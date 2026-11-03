(function () {
  const icons = {
    home: '<path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
    contact: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.31 1.77.57 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.14a2 2 0 0 1 2.11-.45c.84.26 1.71.45 2.61.57A2 2 0 0 1 22 16.92z"/>',
    products: '<path d="M3 7.5 12 3l9 4.5-9 4.5-9-4.5Z"/><path d="M3 12l9 4.5 9-4.5M3 16.5 12 21l9-4.5M12 12v9"/>',
    gallery: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
    profile: '<circle cx="12" cy="8" r="4"/><path d="M5 21a7 7 0 0 1 14 0M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9"/>'
  };

  const items = [
    { id: "home", href: "index.html", label: "home", icon: "home" },
    { id: "contact", href: "contact.html", label: "contact", icon: "contact" },
    { id: "products", href: "products.html", label: "products", icon: "products" },
    { id: "gallery", href: "gallery.html", label: "gallery", icon: "gallery" },
    { id: "profile", href: "profile.html", label: "profile", icon: "profile" }
  ];
  const page = document.body.dataset.page || "home";
  const active = ["profile", "personal-information", "notifications", "language", "help", "privacy", "terms"].includes(page) ? "profile" : page;
  const svg = (name) => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + icons[name] + '</svg>';

  document.querySelectorAll(".desktop-nav").forEach((nav) => {
    nav.innerHTML = items.map((item) => '<a href="' + item.href + '" data-i18n="' + item.label + '"' + (item.id === active ? ' aria-current="page"' : '') + '>' + item.label[0].toUpperCase() + item.label.slice(1) + '</a>').join("");
  });

  document.querySelectorAll(".bottom-nav").forEach((nav) => {
    nav.innerHTML = items.map((item) => '<a href="' + item.href + '" data-i18n="' + item.label + '"' + (item.id === active ? ' aria-current="page"' : '') + '>' + svg(item.icon) + '<span>' + item.label[0].toUpperCase() + item.label.slice(1) + '</span></a>').join("");
  });
})();
