(function () {
  "use strict";

  const LINKS = [
    { key: "home", label: "Home", path: "/index.html" },
    { key: "shop", label: "Shop", path: "/shop.html" },
    { key: "motivation", label: "Motivation", path: "/about.html" },
    { key: "doku", label: "Doku", path: "/doc/" }
  ];

  function asAbsoluteUrl(path) {
    return new URL(path, window.location.origin).toString();
  }

  function normalizePath(pathname) {
    if (!pathname) return "/";
    let value = pathname.replace(/\/index\.html?$/i, "/");
    if (!value.endsWith("/")) value += "/";
    return value;
  }

  function isActive(targetPath, currentPath) {
    const target = normalizePath(targetPath);
    const current = normalizePath(currentPath);
    if (target === "/doc/") return current.startsWith("/doc/");
    return target === current;
  }

  function updateActiveState(nav) {
    const currentPath = window.location.pathname || "/";
    nav.querySelectorAll("a[data-shop-link]").forEach((anchor) => {
      const href = anchor.getAttribute("href") || "/";
      const targetPath = new URL(href, window.location.origin).pathname;
      if (isActive(targetPath, currentPath)) {
        anchor.setAttribute("aria-current", "page");
      } else {
        anchor.removeAttribute("aria-current");
      }
    });
  }

  function buildNav() {
    const nav = document.createElement("div");
    nav.className = "ehive-shop-header-links";
    nav.setAttribute("role", "navigation");
    nav.setAttribute("aria-label", "Navigation");

    LINKS.forEach((item) => {
      const anchor = document.createElement("a");
      anchor.dataset.shopLink = item.key;
      anchor.href = asAbsoluteUrl(item.path);
      anchor.textContent = item.label;
      nav.appendChild(anchor);
    });

    return nav;
  }

  function applyHeader() {
    const headerInner = document.querySelector(".md-header__inner");
    if (!headerInner) return;

    const logoLink = headerInner.querySelector(".md-header__button.md-logo");
    if (logoLink) {
      logoLink.href = asAbsoluteUrl("/index.html");
      logoLink.title = "eHive Home";
      logoLink.setAttribute("aria-label", "eHive Home");
    }

    let nav = headerInner.querySelector(".ehive-shop-header-links");
    if (!nav) {
      nav = buildNav();
      const searchToggle = headerInner.querySelector('label.md-header__button[for="__search"]');
      if (searchToggle) {
        headerInner.insertBefore(nav, searchToggle);
      } else {
        headerInner.appendChild(nav);
      }
    }

    updateActiveState(nav);
  }

  applyHeader();
  document.addEventListener("DOMContentLoaded", applyHeader);
  if (typeof window.document$ !== "undefined" && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(applyHeader);
  }
})();
