(function () {
  "use strict";

  var root = document.documentElement;

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function link(cls, label, href, external) {
    var a = el("a", cls);
    a.href = href;
    a.appendChild(document.createTextNode(label));
    if (external) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      var sr = el("span", "sr", " (yeni sekmede açılır)");
      a.appendChild(sr);
    }
    return a;
  }

  function card(p) {
    var art = el("article", "card");
    art.id = p.id;
    art.style.setProperty("--card-accent", p.accent || "#6b5bf0");
    art.setAttribute("aria-labelledby", p.id + "-baslik");

    var head = el("div", "card-head");
    var logo = el("div", "logo");
    if (p.icon) {
      var img = el("img");
      img.src = p.icon;
      img.alt = "";
      img.width = 72;
      img.height = 72;
      img.decoding = "async";
      logo.appendChild(img);
    } else {
      logo.textContent = p.emoji || "✨";
      logo.setAttribute("aria-hidden", "true");
    }
    head.appendChild(logo);

    var titles = el("div", "titles");
    var h = el("h3", null, p.title);
    h.id = p.id + "-baslik";
    titles.appendChild(h);
    titles.appendChild(el("p", "tagline", p.tagline));
    head.appendChild(titles);
    art.appendChild(head);

    art.appendChild(el("p", "desc", p.description));

    if (p.features && p.features.length) {
      var ul = el("ul", "features");
      p.features.forEach(function (f) { ul.appendChild(el("li", null, f)); });
      art.appendChild(ul);
    }

    if (p.tags && p.tags.length) {
      var tags = el("ul", "tags");
      tags.setAttribute("aria-label", "Etiketler");
      p.tags.forEach(function (t) { tags.appendChild(el("li", null, t)); });
      art.appendChild(tags);
    }

    var actions = el("div", "actions");
    actions.appendChild(link("btn primary", "Aç", p.url, false));
    (p.extra || []).forEach(function (x) {
      actions.appendChild(link("btn", x.label, x.href, false));
    });
    if (p.repo) actions.appendChild(link("btn ghost", "GitHub", p.repo, true));
    art.appendChild(actions);

    return art;
  }

  function render() {
    var list = window.PROJECTS || [];
    var grid = document.getElementById("grid");
    var frag = document.createDocumentFragment();
    list.forEach(function (p) { frag.appendChild(card(p)); });
    grid.appendChild(frag);
    var count = document.getElementById("count");
    count.textContent = list.length + " proje yayında";

    // Hero süsü: projelerin logoları.
    var art = document.getElementById("heroArt");
    list.forEach(function (p) {
      if (!p.icon) return;
      var img = el("img");
      img.src = p.icon;
      img.alt = "";
      img.width = 148;
      img.height = 148;
      img.decoding = "async";
      art.appendChild(img);
    });
  }

  // Tema: kayıtlı tercih yoksa sistem ayarı geçerlidir.
  var toggle = document.getElementById("theme");
  var mq = window.matchMedia("(prefers-color-scheme: dark)");

  function stored() {
    try { return localStorage.getItem("tema"); } catch (e) { return null; }
  }
  function store(v) {
    try { localStorage.setItem("tema", v); } catch (e) { /* özel pencere vb. */ }
  }
  function isDark() {
    var t = root.getAttribute("data-theme");
    return t ? t === "dark" : mq.matches;
  }
  function paintToggle() {
    var dark = isDark();
    toggle.querySelector(".theme-txt").textContent = dark ? "Açık tema" : "Koyu tema";
    toggle.setAttribute("aria-label", dark ? "Açık temaya geç" : "Koyu temaya geç");
  }

  var saved = stored();
  if (saved === "dark" || saved === "light") root.setAttribute("data-theme", saved);
  paintToggle();

  toggle.addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next);
    store(next);
    paintToggle();
  });
  if (mq.addEventListener) mq.addEventListener("change", paintToggle);

  document.getElementById("year").textContent = new Date().getFullYear();
  render();
})();
