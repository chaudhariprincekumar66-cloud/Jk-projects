(function () {
  const LANG_KEY = "jk-lang";
  const strings = {
    en: {
      brandSub: "Welding and Agriculture",
      langShort: "English",
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
      primaryNav: "Primary navigation",
      mobileNav: "Mobile navigation",
      phoneLabel: "Phone",
      homeTitle: "Shree Jageshwar Welding and Agriculture",
      homeDescription: "Quality agricultural machinery and welding solutions from Shree Jageshwar Welding and Agriculture.",
      logoAlt: "Shree Jageshwar Welding and Agriculture logo",
      contactDetails: "Contact details",
      readState: "read",
      unreadState: "unread",
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
      primaryNav: "मुख्य नेविगेशन",
      mobileNav: "मोबाइल नेविगेशन",
      phoneLabel: "फोन",
      homeTitle: "श्री जगेश्वर वेल्डिंग एंड एग्रीकल्चर",
      homeDescription: "श्री जगेश्वर वेल्डिंग एंड एग्रीकल्चर की गुणवत्तापूर्ण कृषि मशीनरी और वेल्डिंग समाधान।",
      logoAlt: "श्री जगेश्वर वेल्डिंग एंड एग्रीकल्चर का लोगो",
      contactDetails: "संपर्क विवरण",
      readState: "पढ़ी हुई",
      unreadState: "अपठित",
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
      primaryNav: "મુખ્ય નેવિગેશન",
      mobileNav: "મોબાઇલ નેવિગેશન",
      phoneLabel: "ફોન",
      homeTitle: "શ્રી જગેશ્વર વેલ્ડિંગ એન્ડ એગ્રીકલ્ચર",
      homeDescription: "શ્રી જગેશ્વર વેલ્ડિંગ એન્ડ એગ્રીકલ્ચરના ગુણવત્તાયુક્ત કૃષિ મશીનરી અને વેલ્ડિંગ સોલ્યુશન્સ.",
      logoAlt: "શ્રી જગેશ્વર વેલ્ડિંગ એન્ડ એગ્રીકલ્ચરનો લોગો",
      contactDetails: "સંપર્ક વિગતો",
      readState: "વાંચેલું",
      unreadState: "ન વાંચેલું",
    },
  };

  const pageStrings = {
    en: {
      skipContent: "Skip to content", backHome: "Back to Home", backProfile: "Back to Profile",
      account: "ACCOUNT", profileSection: "PROFILE", preferences: "PREFERENCES", support: "SUPPORT", legal: "LEGAL",
      profileTitle: "My Profile", profileLead: "Manage your personal details and preferences.", profileCardTitle: "Profile & Settings",
      profileCardLead: "Personal details, preferences and support.", accountGroup: "ACCOUNT", prefsSupport: "PREFERENCES & SUPPORT",
      personalInformation: "Personal Information", notifications: "Notifications", languageSettings: "Language Settings",
      helpSupport: "Help & Support", privacyPolicy: "Privacy Policy", termsConditions: "Terms & Conditions",
      personalInfoTitle: "Personal Information", personalInfoLead: "View and update your contact details.",
      profilePhoto: "Profile photo", photoUploadNote: "Photo upload can be enabled with an account service.",
      emailAddress: "Email Address", enterFullName: "Enter your full name", enterMobile: "Enter your mobile number", enterEmail: "Enter your email address",
      edit: "Edit", personalStorageNotice: "Changes are stored in this browser only; account syncing is not connected.",
      editDetailsNotice: "Edit your details and save them on this device.", localSaveNotice: "Saved on this device. Account syncing is not connected.",
      notificationsTitle: "Notifications", notificationsLead: "Order and enquiry updates in one place.", recentUpdates: "Recent updates",
      previewNotice: "Preview items only. Live updates require an account service.", markAllRead: "Mark All as Read", orderPreview: "Order update · Preview",
      orderStatusTitle: "Order status update", orderStatusBody: "Your order update will appear here when notifications are connected.",
      enquiryPreview: "Enquiry update · Preview", enquiryResponseTitle: "Enquiry response", enquiryResponseBody: "Replies to your product enquiries will appear here.",
      example: "Example", readPreviewNotice: "Preview notifications marked as read on this device.",
      languageTitle: "Language Settings", languageLead: "Choose your preferred language.", selectLanguage: "Select language",
      englishName: "English", gujaratiName: "ગુજરાતી", gujaratiLanguageName: "Gujarati", hindiName: "हिन्दी", hindiLanguageName: "Hindi", saveLanguage: "Save Language", languageSaved: "Language preference saved.",
      helpTitle: "Help & Support", helpLead: "We are here to help with your questions.", contactTeam: "Contact our team",
      contactTeamLead: "Call or message us for product and service enquiries.", callFirst: "Call +91 98791 71496", callSecond: "Call +91 89801 75862",
      whatsappUs: "WhatsApp us", emailPending: "[Email address pending]", faqTitle: "Frequently Asked Questions",
      faqProduct: "How can I enquire about a product?", faqProductAnswer: "Open the product page and use its enquiry option, or call us directly. Enquiry submission will be enabled when the website is connected to a message service.",
      faqOrder: "How do I get an order update?", faqOrderAnswer: "Please contact our team by phone or WhatsApp. Live order tracking requires an account and order service integration.",
      faqWhatsApp: "Can I contact support on WhatsApp?", faqWhatsAppAnswer: "Yes. Use the WhatsApp button above to start a conversation with +91 98791 71496.",
      supportRequestTitle: "Submit Support Request", supportRequestLead: "Your request form is ready, but sending needs a support service connection.",
      howHelp: "How can we help?", submitRequest: "Submit Request", supportNotSent: "Your request has not been sent. Support form delivery is not connected yet.",
      privacyTitle: "Privacy Policy", privacyLead: "How information is handled on this website.", reviewed: "Last reviewed: 5 November 2026",
      privacy1Title: "1. Information you provide", privacy1: "You may enter details such as your name, phone number, email address and message into forms on this website. Profile details saved through Personal Information are stored in this browser on this device. They are not synced to an account.",
      privacy2Title: "2. Contact and support forms", privacy2: "The contact and support forms currently do not send information to Shree Jageshwar or to a third-party service. Do not rely on these forms to deliver a message until a submission service is connected. You can contact the business using the phone or WhatsApp links shown on the website.",
      privacy3Title: "3. Local preferences", privacy3: "The language preference is saved in this browser so the website can remember your selection. Clearing browser storage may remove that preference and any profile details saved on this device.",
      privacy4Title: "4. Sharing and retention", privacy4: "This static website does not currently submit form details to a server. If online account, analytics, or communication services are added, this policy should be updated to explain what they collect, why they use it, and how long it is retained.",
      privacy5Title: "5. External links", privacy5: "Links to services such as WhatsApp or your phone app open outside this website. Their use is governed by the respective service provider's terms and privacy practices.",
      privacy6Title: "6. Questions", privacy6: "For questions about this policy, contact Shree Jageshwar by calling +91 98791 71496 or +91 89801 75862.",
      termsTitle: "Terms & Conditions", termsLead: "Please read these website use terms.",
      terms1Title: "1. Using this website", terms1: "This website provides general information about Shree Jageshwar Welding and Agriculture, its products, and its services. You agree to use it lawfully and not to interfere with its operation or attempt unauthorized access.",
      terms2Title: "2. Product information", terms2: "Product descriptions, images and other information are provided for general reference. Availability, specifications, pricing, delivery and other sale terms must be confirmed directly with the business before placing an order.",
      terms3Title: "3. Enquiries and orders", terms3: "An enquiry made through this website is not an order or a confirmed purchase. Website forms are not connected to a submission service at this time. Please contact the business directly to discuss enquiries and order details.",
      terms4Title: "4. Website content", terms4: "Website text, branding and images are provided for this business website. Do not copy, republish, or commercially use material without permission from its owner, except where applicable law permits.",
      terms5Title: "5. External services", terms5: "Phone and WhatsApp links open third-party services. Those services are provided under their own terms and are outside this website's control.",
      terms6Title: "6. Availability and changes", terms6: "Website content and availability may change. We may update these terms when the website or its services change. The current version will be published on this page.",
      terms7Title: "7. Contact", terms7: "For questions about these terms, contact Shree Jageshwar by calling +91 98791 71496 or +91 89801 75862.",
      productThresher: "Thresher", productTrolley: "Trolley", productRotavator: "Rotavator", productDoor: "Door", productCultivator: "Cultivator", productGate: "Gate",
      productModalLead: "Quality agricultural machinery and fabrication from Shree Jageshwar.", galleryPhotoAlt: "Gallery photo", viewGalleryPhoto: "View gallery photo", emptyGallerySlot: "Empty gallery photo area",
      chooseLanguage: "Choose language", chatWhatsApp: "Chat on WhatsApp", contactFormNote: "Message delivery will be enabled when a contact service is connected.",
      cropWheatPaddy: "Wheat & Paddy", soilTillage: "Soil Tillage", fieldPreparation: "Field Prep", transport: "Transport",
      arcWelding: "Arc Welding", metalFabrication: "Metal Fabrication", customParts: "Custom Parts", repairs: "Repairs",
      galleryPhotos: "Gallery photos", galleryPhotoPreview: "Gallery photo preview", closePhotoPreview: "Close photo preview"
    },
    hi: {
      skipContent: "मुख्य सामग्री पर जाएँ", backHome: "होम पर वापस जाएँ", backProfile: "प्रोफ़ाइल पर वापस जाएँ",
      account: "खाता", profileSection: "प्रोफ़ाइल", preferences: "प्राथमिकताएँ", support: "सहायता", legal: "कानूनी जानकारी",
      profileTitle: "मेरी प्रोफ़ाइल", profileLead: "अपनी व्यक्तिगत जानकारी और प्राथमिकताएँ प्रबंधित करें।", profileCardTitle: "प्रोफ़ाइल और सेटिंग्स",
      profileCardLead: "व्यक्तिगत जानकारी, प्राथमिकताएँ और सहायता।", accountGroup: "खाता", prefsSupport: "प्राथमिकताएँ और सहायता",
      personalInformation: "व्यक्तिगत जानकारी", notifications: "सूचनाएँ", languageSettings: "भाषा सेटिंग्स",
      helpSupport: "सहायता और समर्थन", privacyPolicy: "गोपनीयता नीति", termsConditions: "नियम और शर्तें",
      personalInfoTitle: "व्यक्तिगत जानकारी", personalInfoLead: "अपनी संपर्क जानकारी देखें और अपडेट करें।",
      profilePhoto: "प्रोफ़ाइल फ़ोटो", photoUploadNote: "खाता सेवा जुड़ने पर फ़ोटो अपलोड की सुविधा जोड़ी जा सकती है।",
      emailAddress: "ईमेल पता", enterFullName: "अपना पूरा नाम दर्ज करें", enterMobile: "अपना मोबाइल नंबर दर्ज करें", enterEmail: "अपना ईमेल पता दर्ज करें",
      edit: "संपादित करें", personalStorageNotice: "बदलाव केवल इसी ब्राउज़र में सहेजे जाते हैं; खाते से सिंक उपलब्ध नहीं है।",
      editDetailsNotice: "अपनी जानकारी बदलें और इस डिवाइस पर सहेजें।", localSaveNotice: "इस डिवाइस पर सहेजा गया। खाते से सिंक उपलब्ध नहीं है।",
      notificationsTitle: "सूचनाएँ", notificationsLead: "ऑर्डर और पूछताछ के अपडेट एक ही जगह।", recentUpdates: "हाल के अपडेट",
      previewNotice: "ये केवल नमूना सूचनाएँ हैं। लाइव अपडेट के लिए खाता सेवा आवश्यक है।", markAllRead: "सभी को पढ़ा हुआ मानें", orderPreview: "ऑर्डर अपडेट · नमूना",
      orderStatusTitle: "ऑर्डर की स्थिति का अपडेट", orderStatusBody: "सूचना सेवा जुड़ने पर आपके ऑर्डर का अपडेट यहाँ दिखाई देगा।",
      enquiryPreview: "पूछताछ अपडेट · नमूना", enquiryResponseTitle: "पूछताछ का जवाब", enquiryResponseBody: "आपकी उत्पाद पूछताछ के जवाब यहाँ दिखाई देंगे।",
      example: "उदाहरण", readPreviewNotice: "नमूना सूचनाएँ इस डिवाइस पर पढ़ी हुई चिह्नित की गईं।",
      languageTitle: "भाषा सेटिंग्स", languageLead: "अपनी पसंदीदा भाषा चुनें।", selectLanguage: "भाषा चुनें",
      englishName: "अंग्रेज़ी", gujaratiName: "गुजराती", gujaratiLanguageName: "गुजराती", hindiName: "हिन्दी", hindiLanguageName: "हिन्दी", saveLanguage: "भाषा सहेजें", languageSaved: "भाषा की पसंद सहेज दी गई।",
      helpTitle: "सहायता और समर्थन", helpLead: "आपके सवालों में मदद के लिए हम यहाँ हैं।", contactTeam: "हमारी टीम से संपर्क करें",
      contactTeamLead: "उत्पाद और सेवाओं की पूछताछ के लिए कॉल या संदेश करें।", callFirst: "+91 98791 71496 पर कॉल करें", callSecond: "+91 89801 75862 पर कॉल करें",
      whatsappUs: "WhatsApp पर संपर्क करें", emailPending: "[ईमेल पता उपलब्ध नहीं]", faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
      faqProduct: "मैं किसी उत्पाद की पूछताछ कैसे करूँ?", faqProductAnswer: "उत्पाद पृष्ठ खोलकर पूछताछ विकल्प चुनें या हमें सीधे कॉल करें। वेबसाइट पर पूछताछ भेजने की सुविधा संदेश सेवा जुड़ने के बाद उपलब्ध होगी।",
      faqOrder: "ऑर्डर का अपडेट कैसे मिलेगा?", faqOrderAnswer: "कृपया फ़ोन या WhatsApp से हमारी टीम से संपर्क करें। लाइव ऑर्डर ट्रैकिंग के लिए खाता और ऑर्डर सेवा जोड़ना आवश्यक है।",
      faqWhatsApp: "क्या मैं WhatsApp पर सहायता से संपर्क कर सकता हूँ?", faqWhatsAppAnswer: "हाँ। +91 98791 71496 पर बातचीत शुरू करने के लिए ऊपर दिया WhatsApp बटन चुनें।",
      supportRequestTitle: "सहायता अनुरोध भेजें", supportRequestLead: "फ़ॉर्म तैयार है, लेकिन अनुरोध भेजने के लिए सहायता सेवा जोड़ना आवश्यक है।",
      howHelp: "हम आपकी कैसे मदद कर सकते हैं?", submitRequest: "अनुरोध भेजें", supportNotSent: "आपका अनुरोध नहीं भेजा गया। सहायता फ़ॉर्म भेजने की सुविधा अभी जुड़ी नहीं है।",
      privacyTitle: "गोपनीयता नीति", privacyLead: "इस वेबसाइट पर जानकारी कैसे संभाली जाती है।", reviewed: "अंतिम समीक्षा: 5 नवंबर 2026",
      privacy1Title: "1. आपके द्वारा दी गई जानकारी", privacy1: "आप इस वेबसाइट के फ़ॉर्म में अपना नाम, फ़ोन नंबर, ईमेल पता और संदेश दर्ज कर सकते हैं। व्यक्तिगत जानकारी पृष्ठ पर सहेरी गई प्रोफ़ाइल जानकारी इसी डिवाइस के इसी ब्राउज़र में रहती है। यह किसी खाते से सिंक नहीं होती।",
      privacy2Title: "2. संपर्क और सहायता फ़ॉर्म", privacy2: "फ़िलहाल संपर्क और सहायता फ़ॉर्म की जानकारी Shree Jageshwar या किसी तीसरी सेवा को नहीं भेजी जाती। संदेश सेवा जुड़ने तक इन फ़ॉर्म से संदेश पहुँचने की अपेक्षा न करें। वेबसाइट पर दिए फ़ोन या WhatsApp लिंक से व्यवसाय से संपर्क करें।",
      privacy3Title: "3. स्थानीय प्राथमिकताएँ", privacy3: "वेबसाइट आपकी भाषा की पसंद इसी ब्राउज़र में सहेजती है। ब्राउज़र स्टोरेज मिटाने पर यह पसंद और इस डिवाइस पर सहेरी गई प्रोफ़ाइल जानकारी हट सकती है।",
      privacy4Title: "4. जानकारी साझा करना और रखना", privacy4: "यह स्थिर वेबसाइट फ़ॉर्म की जानकारी सर्वर पर नहीं भेजती। यदि ऑनलाइन खाता, विश्लेषण या संदेश सेवाएँ जोड़ी जाती हैं, तो इस नीति में बताया जाना चाहिए कि वे क्या जानकारी लेते हैं, क्यों लेते हैं और कितने समय तक रखते हैं।",
      privacy5Title: "5. बाहरी लिंक", privacy5: "WhatsApp या फ़ोन ऐप जैसी सेवाओं के लिंक आपको इस वेबसाइट से बाहर ले जाते हैं। उनका उपयोग संबंधित सेवा प्रदाता की शर्तों और गोपनीयता नियमों के अधीन है।",
      privacy6Title: "6. प्रश्न", privacy6: "इस नीति के बारे में प्रश्नों के लिए Shree Jageshwar को +91 98791 71496 या +91 89801 75862 पर कॉल करें।",
      termsTitle: "नियम और शर्तें", termsLead: "वेबसाइट उपयोग की ये शर्तें पढ़ें।",
      terms1Title: "1. इस वेबसाइट का उपयोग", terms1: "यह वेबसाइट Shree Jageshwar Welding and Agriculture, उसके उत्पादों और सेवाओं के बारे में सामान्य जानकारी देती है। आप इसका उपयोग कानून के अनुसार करने और इसके संचालन में बाधा डालने या अनधिकृत पहुँच का प्रयास न करने के लिए सहमत हैं।",
      terms2Title: "2. उत्पाद जानकारी", terms2: "उत्पाद विवरण, तस्वीरें और अन्य जानकारी सामान्य संदर्भ के लिए दी गई हैं। ऑर्डर देने से पहले उपलब्धता, विशेषताओं, कीमत, डिलीवरी और बिक्री की अन्य शर्तों की पुष्टि सीधे व्यवसाय से करें।",
      terms3Title: "3. पूछताछ और ऑर्डर", terms3: "इस वेबसाइट से की गई पूछताछ ऑर्डर या पक्की खरीद नहीं है। फ़िलहाल वेबसाइट फ़ॉर्म किसी संदेश सेवा से जुड़े नहीं हैं। पूछताछ और ऑर्डर के विवरण के लिए व्यवसाय से सीधे संपर्क करें।",
      terms4Title: "4. वेबसाइट की सामग्री", terms4: "वेबसाइट का पाठ, ब्रांड और तस्वीरें इस व्यवसाय की वेबसाइट के लिए हैं। लागू कानून की अनुमति के अलावा, स्वामी की अनुमति के बिना सामग्री की नकल, पुनर्प्रकाशन या व्यावसायिक उपयोग न करें।",
      terms5Title: "5. बाहरी सेवाएँ", terms5: "फ़ोन और WhatsApp लिंक तीसरी-पक्ष सेवाएँ खोलते हैं। वे अपनी शर्तों के अधीन हैं और इस वेबसाइट के नियंत्रण से बाहर हैं।",
      terms6Title: "6. उपलब्धता और बदलाव", terms6: "वेबसाइट की सामग्री और उपलब्धता बदल सकती है। वेबसाइट या सेवाओं में बदलाव होने पर हम इन शर्तों को अपडेट कर सकते हैं। वर्तमान संस्करण इसी पृष्ठ पर प्रकाशित होगा।",
      terms7Title: "7. संपर्क", terms7: "इन शर्तों के बारे में प्रश्नों के लिए Shree Jageshwar को +91 98791 71496 या +91 89801 75862 पर कॉल करें।",
      productThresher: "थ्रेशर", productTrolley: "ट्रॉली", productRotavator: "रोटावेटर", productDoor: "दरवाज़ा", productCultivator: "कल्टीवेटर", productGate: "गेट",
      productModalLead: "Shree Jageshwar की भरोसेमंद कृषि मशीनरी और फैब्रिकेशन।", galleryPhotoAlt: "गैलरी की तस्वीर", viewGalleryPhoto: "गैलरी की तस्वीर देखें", emptyGallerySlot: "गैलरी का खाली फोटो स्थान",
      chooseLanguage: "भाषा चुनें", chatWhatsApp: "WhatsApp पर संदेश करें", contactFormNote: "संपर्क सेवा जुड़ने पर संदेश भेजने की सुविधा उपलब्ध होगी।",
      cropWheatPaddy: "गेहूँ और धान", soilTillage: "मिट्टी की जुताई", fieldPreparation: "खेत की तैयारी", transport: "परिवहन",
      arcWelding: "आर्क वेल्डिंग", metalFabrication: "धातु निर्माण", customParts: "कस्टम पुर्ज़े", repairs: "मरम्मत",
      galleryPhotos: "गैलरी की तस्वीरें", galleryPhotoPreview: "गैलरी तस्वीर का पूर्वावलोकन", closePhotoPreview: "तस्वीर का पूर्वावलोकन बंद करें"
    },
    gu: {
      skipContent: "મુખ્ય સામગ્રી પર જાઓ", backHome: "હોમ પર પાછા જાઓ", backProfile: "પ્રોફાઇલ પર પાછા જાઓ",
      account: "ખાતું", profileSection: "પ્રોફાઇલ", preferences: "પસંદગીઓ", support: "સહાય", legal: "કાનૂની",
      profileTitle: "મારી પ્રોફાઇલ", profileLead: "તમારી વ્યક્તિગત વિગતો અને પસંદગીઓ સંચાલિત કરો.", profileCardTitle: "પ્રોફાઇલ અને સેટિંગ્સ",
      profileCardLead: "વ્યક્તિગત વિગતો, પસંદગીઓ અને સહાય.", accountGroup: "ખાતું", prefsSupport: "પસંદગીઓ અને સહાય",
      personalInformation: "વ્યક્તિગત માહિતી", notifications: "સૂચનાઓ", languageSettings: "ભાષા સેટિંગ્સ",
      helpSupport: "મદદ અને સપોર્ટ", privacyPolicy: "ગોપનીયતા નીતિ", termsConditions: "નિયમો અને શરતો",
      personalInfoTitle: "વ્યક્તિગત માહિતી", personalInfoLead: "તમારી સંપર્ક વિગતો જુઓ અને અપડેટ કરો.",
      profilePhoto: "પ્રોફાઇલ ફોટો", photoUploadNote: "ખાતા સેવા જોડાયા પછી ફોટો અપલોડ કરી શકાશે.",
      emailAddress: "ઈમેલ સરનામું", enterFullName: "તમારું પૂરું નામ દાખલ કરો", enterMobile: "તમારો મોબાઇલ નંબર દાખલ કરો", enterEmail: "તમારું ઈમેલ સરનામું દાખલ કરો",
      edit: "ફેરફાર કરો", personalStorageNotice: "ફેરફારો ફક્ત આ બ્રાઉઝરમાં સંગ્રહાય છે; ખાતા સાથે સિંક ઉપલબ્ધ નથી.",
      editDetailsNotice: "તમારી વિગતોમાં ફેરફાર કરો અને આ ઉપકરણમાં સાચવો.", localSaveNotice: "આ ઉપકરણમાં સાચવ્યું. ખાતા સાથે સિંક ઉપલબ્ધ નથી.",
      notificationsTitle: "સૂચનાઓ", notificationsLead: "ઓર્ડર અને પૂછપરછના અપડેટ એક જ જગ્યાએ.", recentUpdates: "તાજેતરના અપડેટ",
      previewNotice: "આ ફક્ત નમૂનાની સૂચનાઓ છે. લાઇવ અપડેટ માટે ખાતા સેવા જરૂરી છે.", markAllRead: "બધાને વાંચેલા તરીકે ચિહ્નિત કરો", orderPreview: "ઓર્ડર અપડેટ · નમૂનો",
      orderStatusTitle: "ઓર્ડરની સ્થિતિનો અપડેટ", orderStatusBody: "સૂચના સેવા જોડાયા પછી તમારા ઓર્ડરનો અપડેટ અહીં દેખાશે.",
      enquiryPreview: "પૂછપરછ અપડેટ · નમૂનો", enquiryResponseTitle: "પૂછપરછનો જવાબ", enquiryResponseBody: "તમારી પ્રોડક્ટ પૂછપરછના જવાબ અહીં દેખાશે.",
      example: "ઉદાહરણ", readPreviewNotice: "નમૂનાની સૂચનાઓ આ ઉપકરણ પર વાંચેલી તરીકે ચિહ્નિત થઈ.",
      languageTitle: "ભાષા સેટિંગ્સ", languageLead: "તમારી પસંદગીની ભાષા પસંદ કરો.", selectLanguage: "ભાષા પસંદ કરો",
      englishName: "અંગ્રેજી", gujaratiName: "ગુજરાતી", gujaratiLanguageName: "ગુજરાતી", hindiName: "હિન્દી", hindiLanguageName: "હિન્દી", saveLanguage: "ભાષા સાચવો", languageSaved: "ભાષાની પસંદગી સાચવાઈ.",
      helpTitle: "મદદ અને સપોર્ટ", helpLead: "તમારા પ્રશ્નોમાં મદદ કરવા અમે અહીં છીએ.", contactTeam: "અમારી ટીમનો સંપર્ક કરો",
      contactTeamLead: "પ્રોડક્ટ અને સેવા પૂછપરછ માટે કૉલ અથવા સંદેશ કરો.", callFirst: "+91 98791 71496 પર કૉલ કરો", callSecond: "+91 89801 75862 પર કૉલ કરો",
      whatsappUs: "WhatsApp પર સંપર્ક કરો", emailPending: "[ઈમેલ સરનામું બાકી]", faqTitle: "વારંવાર પૂછાતા પ્રશ્નો",
      faqProduct: "પ્રોડક્ટ વિશે પૂછપરછ કેવી રીતે કરું?", faqProductAnswer: "પ્રોડક્ટ પેજ ખોલીને પૂછપરછ વિકલ્પ વાપરો અથવા અમને સીધો કૉલ કરો. વેબસાઇટ સંદેશ સેવા સાથે જોડાશે ત્યારે પૂછપરછ મોકલી શકાશે।",
      faqOrder: "ઓર્ડર અપડેટ કેવી રીતે મળશે?", faqOrderAnswer: "કૃપા કરીને ફોન અથવા WhatsApp દ્વારા અમારી ટીમનો સંપર્ક કરો. લાઇવ ઓર્ડર ટ્રેકિંગ માટે ખાતા અને ઓર્ડર સેવા જોડવી પડશે.",
      faqWhatsApp: "શું હું WhatsApp પર સપોર્ટનો સંપર્ક કરી શકું?", faqWhatsAppAnswer: "હા. +91 98791 71496 પર વાતચીત શરૂ કરવા ઉપરનું WhatsApp બટન વાપરો.",
      supportRequestTitle: "સપોર્ટ વિનંતી મોકલો", supportRequestLead: "ફોર્મ તૈયાર છે, પરંતુ મોકલવા માટે સપોર્ટ સેવા જોડવી જરૂરી છે.",
      howHelp: "અમે તમને કેવી રીતે મદદ કરી શકીએ?", submitRequest: "વિનંતી મોકલો", supportNotSent: "તમારી વિનંતી મોકલાઈ નથી. સપોર્ટ ફોર્મ મોકલવાની સેવા હજી જોડાઈ નથી.",
      privacyTitle: "ગોપનીયતા નીતિ", privacyLead: "આ વેબસાઇટ પર માહિતી કેવી રીતે સંભાળવામાં આવે છે.", reviewed: "છેલ્લી સમીક્ષા: 5 નવેમ્બર 2026",
      privacy1Title: "1. તમે આપેલી માહિતી", privacy1: "તમે આ વેબસાઇટના ફોર્મમાં નામ, ફોન નંબર, ઈમેલ સરનામું અને સંદેશ દાખલ કરી શકો છો. વ્યક્તિગત માહિતી પેજ પર સાચવેલી પ્રોફાઇલ વિગતો આ ઉપકરણના આ બ્રાઉઝરમાં રહે છે. તે ખાતા સાથે સિંક થતી નથી.",
      privacy2Title: "2. સંપર્ક અને સપોર્ટ ફોર્મ", privacy2: "હાલ સંપર્ક અને સપોર્ટ ફોર્મની માહિતી Shree Jageshwar અથવા કોઈ તૃતીય પક્ષ સેવાને મોકલતી નથી. સંદેશ સેવા જોડાય ત્યાં સુધી આ ફોર્મથી સંદેશ પહોંચવાની અપેક્ષા રાખશો નહીં. વેબસાઇટ પરના ફોન અથવા WhatsApp લિંકથી સંપર્ક કરો.",
      privacy3Title: "3. સ્થાનિક પસંદગીઓ", privacy3: "વેબસાઇટ તમારી ભાષાની પસંદગી આ બ્રાઉઝરમાં સાચવે છે. બ્રાઉઝર સ્ટોરેજ સાફ કરવાથી આ પસંદગી અને આ ઉપકરણમાં સાચવેલી પ્રોફાઇલ વિગતો દૂર થઈ શકે છે.",
      privacy4Title: "4. માહિતી વહેંચણી અને સંગ્રહ", privacy4: "આ સ્થિર વેબસાઇટ ફોર્મની વિગતો સર્વર પર મોકલતી નથી. ઓનલાઈન ખાતા, વિશ્લેષણ અથવા સંદેશ સેવાઓ ઉમેરવામાં આવે તો તેઓ કઈ માહિતી લે છે, શા માટે લે છે અને કેટલો સમય રાખે છે તે સમજાવવા આ નીતિ અપડેટ કરવી જોઈએ.",
      privacy5Title: "5. બાહ્ય લિંક્સ", privacy5: "WhatsApp અથવા ફોન એપ જેવી સેવાઓની લિંક્સ તમને આ વેબસાઇટની બહાર લઈ જાય છે. તેનો ઉપયોગ સંબંધિત સેવા પ્રદાતાની શરતો અને ગોપનીયતા પ્રથાઓ હેઠળ થાય છે.",
      privacy6Title: "6. પ્રશ્નો", privacy6: "આ નીતિ વિશે પ્રશ્નો માટે Shree Jageshwar ને +91 98791 71496 અથવા +91 89801 75862 પર કૉલ કરો.",
      termsTitle: "નિયમો અને શરતો", termsLead: "વેબસાઇટ ઉપયોગની આ શરતો વાંચો.",
      terms1Title: "1. આ વેબસાઇટનો ઉપયોગ", terms1: "આ વેબસાઇટ Shree Jageshwar Welding and Agriculture, તેના પ્રોડક્ટ્સ અને સેવાઓ વિશે સામાન્ય માહિતી આપે છે. તમે તેનો કાયદેસર ઉપયોગ કરવા અને કામગીરીમાં ખલેલ કે અનધિકૃત પ્રવેશનો પ્રયાસ ન કરવા સંમત થાઓ છો.",
      terms2Title: "2. પ્રોડક્ટ માહિતી", terms2: "પ્રોડક્ટ વર્ણન, છબીઓ અને અન્ય માહિતી સામાન્ય સંદર્ભ માટે છે. ઓર્ડર આપતા પહેલાં ઉપલબ્ધતા, વિશેષતાઓ, કિંમત, ડિલિવરી અને વેચાણની અન્ય શરતો વ્યવસાય સાથે સીધી ચકાસો.",
      terms3Title: "3. પૂછપરછ અને ઓર્ડર", terms3: "આ વેબસાઇટ દ્વારા કરેલી પૂછપરછ ઓર્ડર કે પુષ્ટિ થયેલી ખરીદી નથી. હાલમાં વેબસાઇટના ફોર્મ સંદેશ સેવા સાથે જોડાયેલા નથી. પૂછપરછ અને ઓર્ડરની વિગતો માટે વ્યવસાયનો સીધો સંપર્ક કરો.",
      terms4Title: "4. વેબસાઇટ સામગ્રી", terms4: "વેબસાઇટનું લખાણ, બ્રાન્ડિંગ અને છબીઓ આ વ્યવસાયની વેબસાઇટ માટે છે. લાગુ કાયદાની મંજૂરી સિવાય, માલિકની મંજૂરી વિના સામગ્રીની નકલ, પુનઃપ્રકાશન કે વ્યાપારી ઉપયોગ ન કરો.",
      terms5Title: "5. બાહ્ય સેવાઓ", terms5: "ફોન અને WhatsApp લિંક્સ તૃતીય પક્ષની સેવાઓ ખોલે છે. તે તેમની પોતાની શરતો હેઠળ છે અને આ વેબસાઇટના નિયંત્રણ બહાર છે.",
      terms6Title: "6. ઉપલબ્ધતા અને ફેરફાર", terms6: "વેબસાઇટની સામગ્રી અને ઉપલબ્ધતા બદલાઈ શકે છે. વેબસાઇટ અથવા સેવાઓ બદલાય ત્યારે અમે આ શરતો અપડેટ કરી શકીએ છીએ. હાલનું સંસ્કરણ આ પેજ પર પ્રકાશિત થશે.",
      terms7Title: "7. સંપર્ક", terms7: "આ શરતો વિશે પ્રશ્નો માટે Shree Jageshwar ને +91 98791 71496 અથવા +91 89801 75862 પર કૉલ કરો.",
      productThresher: "થ્રેશર", productTrolley: "ટ્રોલી", productRotavator: "રોટાવેટર", productDoor: "દરવાજો", productCultivator: "કલ્ટિવેટર", productGate: "ગેટ",
      productModalLead: "Shree Jageshwar ની ગુણવત્તાયુક્ત કૃષિ મશીનરી અને ફેબ્રિકેશન.", galleryPhotoAlt: "ગેલેરીનો ફોટો", viewGalleryPhoto: "ગેલેરીનો ફોટો જુઓ", emptyGallerySlot: "ગેલેરીનો ખાલી ફોટો વિસ્તાર",
      chooseLanguage: "ભાષા પસંદ કરો", chatWhatsApp: "WhatsApp પર સંદેશ કરો", contactFormNote: "સંપર્ક સેવા જોડાશે ત્યારે સંદેશ મોકલી શકાશે.",
      cropWheatPaddy: "ઘઉં અને ડાંગર", soilTillage: "જમીન ખેડાણ", fieldPreparation: "ખેતરની તૈયારી", transport: "પરિવહન",
      arcWelding: "આર્ક વેલ્ડિંગ", metalFabrication: "ધાતુ બનાવટ", customParts: "કસ્ટમ પાર્ટ્સ", repairs: "સમારકામ",
      galleryPhotos: "ગેલેરીના ફોટા", galleryPhotoPreview: "ગેલેરી ફોટાનું પૂર્વાવલોકન", closePhotoPreview: "ફોટાનું પૂર્વાવલોકન બંધ કરો"
    }
  };
  Object.keys(pageStrings).forEach(function (lang) {
    Object.assign(strings[lang], pageStrings[lang]);
  });

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
    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-aria-label");
      if (dict[key]) el.setAttribute("aria-label", dict[key]);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-alt");
      if (dict[key]) el.setAttribute("alt", dict[key]);
    });
    document.querySelectorAll("[data-i18n-content]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-content");
      if (dict[key]) el.setAttribute("content", dict[key]);
    });
    document.querySelectorAll(".product-card[data-i18n-name]").forEach(function (card) {
      card.setAttribute("data-search-label", dict[card.getAttribute("data-i18n-name")] || card.getAttribute("data-name") || "");
    });
    document.querySelectorAll("[data-notification]").forEach(function (card) {
      const heading = card.querySelector("h3");
      if (heading) card.setAttribute("aria-label", heading.textContent + ", " + dict[card.dataset.read === "true" ? "readState" : "unreadState"]);
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
        const name = ((card.getAttribute("data-name") || "") + " " + (card.getAttribute("data-search-label") || "")).toLowerCase();
        card.classList.toggle("hidden", q && name.indexOf(q) === -1);
      });
    });
  }

  document.querySelectorAll(".product-card").forEach(function (card) {
    card.addEventListener("click", function () {
      const modal = document.getElementById("product-modal");
      if (!modal) return;
      modal.querySelector("img").src = card.querySelector("img").src;
      const nameKey = card.getAttribute("data-i18n-name");
      modal.querySelector("h3").textContent = nameKey ? window.JK.t(nameKey) : card.getAttribute("data-name");
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
