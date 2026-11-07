(function () {
  const grid = document.querySelector("[data-gallery-grid]");
  if (!grid) return;

  // These are the existing local photos used in the Figma gallery. The first
  // entries follow the visible order in the mobile reference; remaining
  // supplied project photos follow without modifying or duplicating assets.
  const figmaOrder = [
    20, 19, 24, 25, 26, 9, 3, 29, 31, 30, 32, 33, 37, 35, 15, 41,
    39, 36, 42, 40
  ];
  const available = [1, 3, 7, 9, 10, 11, 13, 14, 15, 16, 19, 20, 21, 22, 23,
    24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 35, 36, 37, 39, 40, 41, 42,
    43, 44, 45, 46, 47, 48, 49, 50, 51];
  const ordered = figmaOrder.concat(available.filter((number) => !figmaOrder.includes(number)));
  const blankRatios = [1.28, 1.28, 1.3, 0.78, 1.32, 0.82, 0.78, 1.3, 0.84, 1.22];
  const requestedCount = Number.parseInt(grid.dataset.cardCount, 10);
  const cardCount = Number.isFinite(requestedCount) && requestedCount > 0 ? requestedCount : 100;
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < cardCount; index += 1) {
    const card = document.createElement("div");
    card.className = "gallery-card";
    card.setAttribute("role", "listitem");

    if (index < ordered.length) {
      const imageNumber = ordered[index];
      const button = document.createElement("button");
      const image = document.createElement("img");
      const source = "image/image " + imageNumber + ".png";
      const label = "Agricultural machinery and welding project photo " + (index + 1);
      button.type = "button";
      button.className = "gallery-photo";
      button.setAttribute("data-lightbox", "");
      button.setAttribute("data-src", source);
      button.setAttribute("aria-label", "View " + label);
      button.setAttribute("data-i18n-aria-label", "viewGalleryPhoto");
      image.src = source;
      image.alt = label;
      image.setAttribute("data-i18n-alt", "galleryPhotoAlt");
      image.loading = index < 6 ? "eager" : "lazy";
      image.decoding = "async";
      const matchImageRatio = () => {
        if (image.naturalWidth && image.naturalHeight) {
          card.style.aspectRatio = image.naturalWidth + " / " + image.naturalHeight;
        }
      };
      image.addEventListener("load", matchImageRatio, { once: true });
      if (image.complete) matchImageRatio();
      button.appendChild(image);
      card.appendChild(button);
      card.classList.add("has-photo");
    } else {
      card.setAttribute("aria-label", "Empty gallery photo area " + (index + 1));
      card.setAttribute("data-i18n-aria-label", "emptyGallerySlot");
      card.style.setProperty("--gallery-ratio", blankRatios[index % blankRatios.length]);
    }

    fragment.appendChild(card);
  }

  grid.appendChild(fragment);
  grid.dataset.galleryReady = "true";
})();
