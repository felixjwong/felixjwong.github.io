(function () {
  "use strict";

  // Header background on scroll
  var header = document.getElementById("site-header");
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 50) header.classList.add("is-scrolled");
      else header.classList.remove("is-scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Mobile menu
  var menu = document.getElementById("mobile-menu");
  var openBtn = document.getElementById("menu-open");
  var closeBtn = document.getElementById("menu-close");
  function setMenu(open) {
    if (!menu) return;
    menu.classList.toggle("is-open", open);
    menu.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.style.overflow = open ? "hidden" : "";
  }
  if (openBtn) openBtn.addEventListener("click", function () { setMenu(true); });
  if (closeBtn) closeBtn.addEventListener("click", function () { setMenu(false); });
  if (menu) menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  // Scroll reveal — progressive enhancement. Elements are hidden only after
  // JS "arms" them, and anything on-screen is force-shown on load, so text is
  // never left invisible even if a callback is missed.
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length && "IntersectionObserver" in window) {
    reveals.forEach(function (el) { el.classList.add("is-armed"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.05, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
    var revealInView = function () {
      reveals.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < (window.innerHeight || document.documentElement.clientHeight) && r.bottom > 0) el.classList.add("is-visible");
      });
    };
    window.addEventListener("load", revealInView);
    setTimeout(revealInView, 600);
  }

  // Publications year filter
  var filters = document.querySelectorAll(".pub-filter");
  var rows = document.querySelectorAll(".pub-row");
  var ACTIVE = ["border-ink", "bg-ink", "text-cream"];
  var INACTIVE = ["border-divider", "text-ink-light"];
  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var year = btn.getAttribute("data-year");
      filters.forEach(function (b) {
        b.classList.remove.apply(b.classList, ACTIVE);
        b.classList.add.apply(b.classList, INACTIVE);
        b.classList.remove("is-active");
      });
      btn.classList.remove.apply(btn.classList, INACTIVE);
      btn.classList.add.apply(btn.classList, ACTIVE);
      btn.classList.add("is-active");
      rows.forEach(function (row) {
        var show = year === "all" || row.getAttribute("data-year") === year;
        row.style.display = show ? "" : "none";
      });
    });
  });

  // Cover carousel
  var track = document.getElementById("cover-track");
  if (track) {
    var arrows = document.querySelectorAll(".cover-arrow");
    function update() {
      var atStart = track.scrollLeft <= 8;
      var atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
      arrows.forEach(function (a) {
        var dir = parseInt(a.getAttribute("data-dir"), 10);
        var enabled = dir === -1 ? !atStart : !atEnd;
        a.disabled = !enabled;
        a.classList.toggle("hover:border-ink", enabled);
        a.classList.toggle("hover:bg-cream-dark", enabled);
      });
    }
    arrows.forEach(function (a) {
      a.addEventListener("click", function () {
        var dir = parseInt(a.getAttribute("data-dir"), 10);
        track.scrollBy({ left: dir * Math.min(track.clientWidth * 0.8, 640), behavior: "smooth" });
      });
    });
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }
})();
