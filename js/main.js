(function () {
  const LANG_KEY = "jk-lang";
  const strings = {
    en: {
      brandSub: "Welding and Agriculture",
      langShort: "ગુજરાતી",
      home: "Home",
      contact: "Contact Us",
      products: "Products",
      gallery: "Gallery",
      setting: "Setting",
      profile: "Profile",
      explore: "Explore Products",
      heroEyebrow: "AGRICULTURAL MACHINERY & WELDING",
      heroTitle: "Reliable Machinery. Stronger Agriculture.",
      heroText:
        "Quality agricultural machinery and welding solutions, crafted for dependable performance.",
      ourProducts: "OUR PRODUCTS",
      agriMachinery: "Agricultural Machinery",
      viewAll: "View All →",
      ourServices: "OUR SERVICES",
      weldingFab: "Welding & Fabrication",
      seeMore: "See More →",
      footerName: "Shree Jageshwar Welding & Agriculture",
      footerLoc: "Agricultural machinery & fabrication",
      weldSol: "Welding solutions",
      farmEq: "Farm equipment",
      getInTouch: "GET IN TOUCH",
      contactTitle: "Contact Us",
      contactLead: "Have questions about our products? Connect with our team.",
      formTitle: "Contact Form",
      fullName: "Full Name",
      mobile: "Mobile Number",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      sent: "Message sent. We will contact you soon.",
      formNeedsService: "This form is not connected to a message service yet. Your message has not been sent.",
      formFailed: "We could not send your message. Please try again later.",
      ourWork: "OUR WORK",
      galleryTitle: "Our Gallery",
      galleryLead: "Explore our products and workshop.",
      productsTitle: "Explore Our Products",
      productsLead:
        "Discover quality agricultural machinery and fabrication solutions for your needs.",
      searchPh: "Search products…",
      settingsTitle: "Settings",
      settingsLead: "Manage settings",
      prefs: "settings PREFERENCES",
      language: "Language Settings",
      help: "Help & Support",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      save: "Save",
      saved: "Language saved.",
      enquire: "Enquire",
      close: "Close",
      menu: "Menu",
    },
    hi: {
      brandSub: "वेल्डिंग और कृषि",
      langShort: "हिन्दी",
      home: "होम",
      contact: "संपर्क",
      products: "उत्पाद",
      gallery: "गैलरी",
      setting: "सेटिंग",
      profile: "प्रोफ़ाइल",
      explore: "उत्पाद देखें",
      heroEyebrow: "कृषि मशीनरी और वेल्डिंग",
      heroTitle: "विश्वसनीय मशीनरी। मजबूत कृषि।",
      heroText:
        "गुणवत्ता वाली कृषि मशीनरी और वेल्डिंग समाधान, भरोसेमंद प्रदर्शन के लिए।",
      ourProducts: "हमारे उत्पाद",
      agriMachinery: "कृषि मशीनरी",
      viewAll: "सभी देखें →",
      ourServices: "हमारी सेवाएँ",
      weldingFab: "वेल्डिंग और फैब्रिकेशन",
      seeMore: "और देखें →",
      footerName: "श्री जगेश्वर वेल्डिंग एंड एग्रीकल्चर",
      footerLoc: "कृषि मशीनरी और फैब्रिकेशन",
      weldSol: "वेल्डिंग समाधान",
      farmEq: "फार्म उपकरण",
      getInTouch: "संपर्क करें",
      contactTitle: "संपर्क करें",
      contactLead: "उत्पादों के बारे में प्रश्न हैं? हमारी टीम से जुड़ें।",
      formTitle: "संपर्क फ़ॉर्म",
      fullName: "पूरा नाम",
      mobile: "मोबाइल नंबर",
      subject: "विषय",
      message: "संदेश",
      send: "संदेश भेजें",
      sent: "संदेश भेज दिया गया। हम जल्द संपर्क करेंगे।",
      formNeedsService: "यह फ़ॉर्म अभी संदेश सेवा से जुड़ा नहीं है। आपका संदेश नहीं भेजा गया।",
      formFailed: "आपका संदेश नहीं भेज सके। कृपया बाद में फिर कोशिश करें।",
      ourWork: "हमारा कार्य",
      galleryTitle: "हमारी गैलरी",
      galleryLead: "हमारे उत्पाद और वर्कशॉप देखें।",
      productsTitle: "हमारे उत्पाद देखें",
      productsLead: "गुणवत्ता वाली कृषि मशीनरी और फैब्रिकेशन समाधान खोजें।",
      searchPh: "उत्पाद खोजें…",
      settingsTitle: "सेटिंग्स",
      settingsLead: "सेटिंग प्रबंधित करें",
      prefs: "सेटिंग प्राथमिकताएँ",
      language: "भाषा सेटिंग",
      help: "सहायता",
      privacy: "गोपनीयता नीति",
      terms: "नियम और शर्तें",
      save: "सेव",
      saved: "भाषा सेव हो गई।",
      enquire: "पूछताछ",
      close: "बंद करें",
      menu: "मेनू",
    },
    gu: {
      brandSub: "વેલ્ડિંગ અને કૃષિ",
      langShort: "ગુજરાતી",
      home: "હોમ",
      contact: "સંપર્ક",
      products: "પ્રોડક્ટ્સ",
      gallery: "ગેલેરી",
      setting: "સેટિંગ",
      profile: "પ્રોફાઇલ",
      explore: "પ્રોડક્ટ જુઓ",
      heroEyebrow: "કૃષિ મશીનરી અને વેલ્ડિંગ",
      heroTitle: "વિશ્વસનીય મશીનરી. મજબૂત ખેતી.",
      heroText:
        "ગુણવત્તાયુક્ત કૃષિ મશીનરી અને વેલ્ડિંગ સોલ્યુશન્સ, વિશ્વસનીય કામગીરી માટે.",
      ourProducts: "અમારા પ્રોડક્ટ્સ",
      agriMachinery: "કૃષિ મશીનરી",
      viewAll: "બધું જુઓ →",
      ourServices: "અમારી સેવાઓ",
      weldingFab: "વેલ્ડિંગ અને ફેબ્રિકેશન",
      seeMore: "વધુ જુઓ →",
      footerName: "શ્રી જગેશ્વર વેલ્ડિંગ એન્ડ એગ્રીકલ્ચર",
      footerLoc: "કૃષિ મશીનરી અને ફેબ્રિકેશન",
      weldSol: "વેલ્ડિંગ સોલ્યુશન્સ",
      farmEq: "ફાર્મ સાધનો",
      getInTouch: "સંપર્કમાં રહો",
      contactTitle: "સંપર્ક કરો",
      contactLead: "પ્રોડક્ટ વિશે પ્રશ્નો છે? અમારી ટીમ સાથે જોડાઓ.",
      formTitle: "સંપર્ક ફોર્મ",
      fullName: "પૂરું નામ",
      mobile: "મોબાઇલ નંબર",
      subject: "વિષય",
      message: "સંદેશ",
      send: "સંદેશ મોકલો",
      sent: "સંદેશ મોકલાયો. અમે ટૂંક સમયમાં સંપર્ક કરીશું.",
      formNeedsService: "આ ફોર્મ હજી મેસેજ સેવા સાથે જોડાયેલું નથી. તમારો સંદેશ મોકલાયો નથી.",
      formFailed: "તમારો સંદેશ મોકલી શકાયો નથી. કૃપા કરીને પછી પ્રયાસ કરો.",
      ourWork: "અમારું કામ",
      galleryTitle: "અમારી ગેલેરી",
      galleryLead: "અમારા પ્રોડક્ટ્સ અને વર્કશોપ જુઓ.",
      productsTitle: "અમારા પ્રોડક્ટ્સ જુઓ",
      productsLead: "ગુણવત્તાયુક્ત કૃષિ મશીનરી અને ફેબ્રિકેશન સોલ્યુશન્સ શોધો.",
      searchPh: "પ્રોડક્ટ શોધો…",
      settingsTitle: "સેટિંગ્સ",
      settingsLead: "સેટિંગ મેનેજ કરો",
      prefs: "સેટિંગ પસંદગીઓ",
      language: "ભાષા સેટિંગ",
      help: "મદદ અને સપોર્ટ",
      privacy: "પ્રાઇવસી પોલિસી",
      terms: "નિયમો અને શરતો",
      save: "સેવ",
      saved: "ભાષા સેવ થઈ.",
      enquire: "પૂછપરછ",
      close: "બંધ કરો",
      menu: "મેનુ",
    },
  };

  function currentLang() {
    return localStorage.getItem(LANG_KEY) || "en";
  }

  function applyLang(lang) {
    const dict = strings[lang] || strings.en;
    document.documentElement.lang = lang === "gu" ? "gu" : lang === "hi" ? "hi" : "en";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });
    document.querySelectorAll("[data-lang-short]").forEach(function (el) {
      el.textContent = dict.langShort;
    });
  }

  window.JK = {
    t: function (key) {
      return (strings[currentLang()] || strings.en)[key] || key;
    },
    setLang: function (lang) {
      localStorage.setItem(LANG_KEY, lang);
      applyLang(lang);
    },
    lang: currentLang,
  };

  applyLang(currentLang());

  const overlay = document.getElementById("overlay");
  const drawer = document.getElementById("drawer");
  const langMenu = document.getElementById("lang-menu");
  const toast = document.getElementById("toast");

  function closeAll() {
    if (overlay) overlay.classList.remove("open");
    if (drawer) drawer.classList.remove("open");
    if (langMenu) langMenu.classList.remove("open");
    document.querySelectorAll(".modal.open").forEach(function (m) {
      m.classList.remove("open");
    });
    const lb = document.getElementById("lightbox");
    if (lb) lb.classList.remove("open");
  }

  document.querySelectorAll("[data-open-menu]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      overlay.classList.add("open");
      drawer.classList.add("open");
    });
  });

  document.querySelectorAll("[data-lang-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (langMenu) langMenu.classList.toggle("open");
    });
  });

  document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      window.JK.setLang(btn.getAttribute("data-set-lang"));
      closeAll();
      showToast(window.JK.t("saved"));
    });
  });

  if (overlay) overlay.addEventListener("click", closeAll);

  document.querySelectorAll("[data-close]").forEach(function (btn) {
    btn.addEventListener("click", closeAll);
  });

  function showToast(text) {
    if (!toast) return;
    toast.textContent = text;
    toast.classList.add("show");
    setTimeout(function () {
      toast.classList.remove("show");
    }, 2200);
  }

  const searchToggle = document.getElementById("search-toggle");
  const searchBar = document.getElementById("search-bar");
  const searchInput = document.getElementById("product-search");
  if (searchToggle && searchBar) {
    searchToggle.addEventListener("click", function () {
      searchBar.classList.toggle("open");
      if (searchBar.classList.contains("open") && searchInput) searchInput.focus();
    });
  }
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const q = searchInput.value.trim().toLowerCase();
      document.querySelectorAll(".product-card").forEach(function (card) {
        const name = (card.getAttribute("data-name") || "").toLowerCase();
        card.classList.toggle("hidden", q && name.indexOf(q) === -1);
      });
    });
  }

  document.querySelectorAll(".product-card").forEach(function (card) {
    card.addEventListener("click", function () {
      const modal = document.getElementById("product-modal");
      if (!modal) return;
      modal.querySelector("img").src = card.querySelector("img").src;
      modal.querySelector("h3").textContent = card.getAttribute("data-name");
      overlay.classList.add("open");
      modal.classList.add("open");
    });
  });

  document.querySelectorAll("[data-lightbox]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const lb = document.getElementById("lightbox");
      const src = btn.getAttribute("data-src") || btn.querySelector("img").src;
      lb.querySelector("img").src = src;
      lb.classList.add("open");
    });
  });

  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.addEventListener("click", function () {
      lightbox.classList.remove("open");
    });
  }

  document.querySelectorAll(".faq-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const item = btn.closest(".faq-item");
      const open = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach(function (el) {
        el.classList.remove("open");
        const control = el.querySelector(".faq-btn");
        if (control) control.setAttribute("aria-expanded", "false");
      });
      if (!open) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.querySelectorAll(".lang-option").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".lang-option").forEach(function (el) {
        el.classList.remove("selected");
      });
      btn.classList.add("selected");
    });
  });

  const saveLang = document.getElementById("save-lang");
  if (saveLang) {
    saveLang.addEventListener("click", function () {
      const selected = document.querySelector(".lang-option.selected");
      if (selected) window.JK.setLang(selected.getAttribute("data-lang"));
      showToast(window.JK.t("saved"));
    });
  }

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const status = document.getElementById("form-status");
      if (!status) return;
      status.classList.add("show");
      const endpoint = form.getAttribute("data-form-endpoint");
      if (!endpoint) {
        status.textContent = window.JK.t("formNeedsService");
        return;
      }
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Object.fromEntries(new FormData(form).entries()))
        });
        if (!response.ok) throw new Error("Contact request failed");
        status.textContent = window.JK.t("sent");
        form.reset();
      } catch (error) {
        status.textContent = window.JK.t("formFailed");
      }
    });
  }

  document.querySelectorAll("[data-enquire]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const name = btn.getAttribute("data-enquire");
      window.location.href =
        "contact.html?subject=" + encodeURIComponent("Enquiry: " + name);
    });
  });

  const params = new URLSearchParams(window.location.search);
  if (params.get("subject") && document.getElementById("subject")) {
    document.getElementById("subject").value = params.get("subject");
  }
})();
