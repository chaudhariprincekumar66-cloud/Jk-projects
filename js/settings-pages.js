(function () {
  const byId = (id) => document.getElementById(id);

  const personalForm = byId("personal-info-form");
  if (personalForm) {
    const fields = Array.from(personalForm.querySelectorAll("input"));
    const edit = byId("edit-personal");
    const save = byId("save-personal");
    const status = byId("personal-status");
    let saved = {};
    try {
      saved = JSON.parse(localStorage.getItem("jk-personal-info") || "{}");
    } catch (_) {
      saved = {};
    }
    fields.forEach((field) => {
      if (typeof saved[field.name] === "string") field.value = saved[field.name];
    });
    edit.addEventListener("click", () => {
      fields.forEach((field) => { field.disabled = false; });
      save.disabled = false;
      edit.disabled = true;
      fields[0].focus();
      status.textContent = "Edit your details and save them on this device.";
    });
    personalForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const details = {};
      fields.forEach((field) => { details[field.name] = field.value.trim(); });
      localStorage.setItem("jk-personal-info", JSON.stringify(details));
      fields.forEach((field) => { field.disabled = true; });
      save.disabled = true;
      edit.disabled = false;
      status.textContent = "Saved on this device. Account syncing is not connected.";
    });
  }

  const languageForm = byId("language-form");
  if (languageForm) {
    const options = Array.from(languageForm.querySelectorAll("[data-language-option]"));
    const selected = (window.JK && window.JK.lang() === "gu") ? "gu" : "en";
    const setSelected = (value) => {
      options.forEach((option) => {
        const input = option.querySelector("input");
        input.checked = input.value === value;
        option.classList.toggle("selected", input.checked);
      });
    };
    setSelected(selected);
    options.forEach((option) => {
      option.addEventListener("change", () => setSelected(option.querySelector("input").value));
    });
    languageForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const choice = languageForm.querySelector('input[name="language"]:checked');
      if (!choice) return;
      if (window.JK) window.JK.setLang(choice.value);
      setSelected(choice.value);
      const status = byId("language-status");
      status.textContent = choice.value === "gu" ? "ગુજરાતી ભાષા પસંદગી સાચવાઈ." : "Language preference saved.";
      status.classList.add("show");
    });
  }

  const notificationList = byId("notification-list");
  if (notificationList) {
    const readKey = "jk-notifications-read";
    let readIds = [];
    try {
      readIds = JSON.parse(localStorage.getItem(readKey) || "[]");
    } catch (_) {
      readIds = [];
    }
    const cards = Array.from(notificationList.querySelectorAll("[data-notification]"));
    const applyReadState = (card, isRead) => {
      card.dataset.read = String(isRead);
      card.classList.toggle("is-unread", !isRead);
      card.setAttribute("aria-label", card.querySelector("h3").textContent + (isRead ? ", read" : ", unread"));
    };
    cards.forEach((card) => applyReadState(card, readIds.includes(card.dataset.notification)));
    const markAll = byId("mark-all-read");
    const status = byId("notification-status");
    markAll.addEventListener("click", () => {
      readIds = cards.map((card) => card.dataset.notification);
      localStorage.setItem(readKey, JSON.stringify(readIds));
      cards.forEach((card) => applyReadState(card, true));
      markAll.disabled = true;
      status.textContent = "Preview notifications marked as read on this device.";
      status.classList.add("show");
    });
    markAll.disabled = cards.every((card) => card.dataset.read === "true");
  }

  const supportForm = byId("support-form");
  if (supportForm) {
    supportForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = byId("support-status");
      status.textContent = "Your request has not been sent. Support form delivery is not connected yet.";
      status.classList.add("show");
    });
  }
})();
