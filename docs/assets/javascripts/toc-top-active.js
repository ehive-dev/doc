(function () {
  function syncSecondaryToc() {
    var sidebar = document.querySelector(".md-sidebar--secondary .md-nav");
    if (!sidebar) return;

    var links = sidebar.querySelectorAll(".md-nav__link[href*='#']");
    if (!links.length) return;

    links.forEach(function (link) {
      link.classList.remove("toc-top-active");
    });

    var active = sidebar.querySelector(".md-nav__link--active");
    if (active) return;

    if (window.scrollY <= 18) {
      links[0].classList.add("toc-top-active");
    }
  }

  function init() {
    syncSecondaryToc();
    window.addEventListener("scroll", syncSecondaryToc, { passive: true });
    window.addEventListener("hashchange", syncSecondaryToc);
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(function () {
      requestAnimationFrame(syncSecondaryToc);
    });
    init();
    return;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
