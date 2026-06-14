(function () {
  "use strict";

  const PRODUCT_URL = "https://www.ehiv3.de/";

  function addShopLink() {
    const headerInner = document.querySelector(".md-header__inner");
    if (!headerInner) return;

    let link = headerInner.querySelector(".md-header-shop-link");
    if (!link) {
      link = document.createElement("a");
      link.className = "md-header-shop-link";
      link.href = PRODUCT_URL;
      link.textContent = "Produktseite";
      link.setAttribute("aria-label", "Zur Produktseite");

      const searchToggle = headerInner.querySelector('label.md-header__button[for="__search"]');
      if (searchToggle) {
        headerInner.insertBefore(link, searchToggle);
      } else {
        headerInner.appendChild(link);
      }
    }
  }

  addShopLink();
  document.addEventListener("DOMContentLoaded", addShopLink);

  if (typeof window.document$ !== "undefined" && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(addShopLink);
  }
})();
