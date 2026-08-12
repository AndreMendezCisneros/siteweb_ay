import type { Dict } from "./es";

export const en: Dict = {
  locale: "en",
  site: {
    name: "AsisAcademy",
    tagline: "A platform to manage and connect your school",
    description:
      "Centralize attendance, incidents, ID cards, reports, family portal and messaging — with role-based access and a single source of truth.",
    definition:
      "AsisAcademy is a RYJEC technology platform for managing and digitizing educational institutions.",
    promise: "Useful technology for schools: one source of truth, with role-based access.",
    url: "https://asisacademy.com",
    ogLocale: "en_US",
    parentBrand: "RYJEC",
    emails: {
      contact: "contacto@ryjec.com",
    },
    phone: "+51 949 261 503",
    whatsappDigits: "51949261503",
  },
  cta: {
    primary: "Request free trial",
    secondary: "Explore the platform",
    pilot: "30-day free pilot",
    contact: "Contact",
    submit: "Send request",
    seeModules: "See modules",
    seePlans: "See plans",
    howItWorks: "How it works",
    bandTitle: "Shall we bring AsisAcademy to your school?",
    bandDescription:
      "We support installation, training and branded ID cards. Start with a free 30-day trial.",
  },
  announcement: {
    text: "Implement AsisAcademy in your school · free 30-day trial",
    cta: "Request free trial",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/nosotros", label: "About us" },
    { href: "/plataforma", label: "Platform" },
    { href: "/como-funciona", label: "How it works" },
    { href: "/instituciones", label: "Institutions" },
    { href: "/planes", label: "Plans" },
    { href: "/modulos", label: "Modules" },
    { href: "/contacto", label: "Contact" },
  ],
  ui: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    available: "Available",
    comingSoon: "Coming soon",
    knowMore: "Learn more",
    seeModule: "View module",
    enter: "Enter",
    prev: "Previous",
    next: "Next",
    byRyjec: "A brand by RYJEC",
    mockCaption: "Live AsisAcademy panel view",
    notFound: {
      code: "404",
      title: "Page not found",
      text: "This page does not exist or was moved. Go home or request your free trial.",
      home: "Go home",
    },
  },
  modules: [
    {
      slug: "asistencia",
      name: "Attendance",
      status: "available",
      summary: "QR or barcode scanning. Arrivals and departures in real time.",
      description:
        "Entry and exit registration at the gate. Information is available the same day for leadership, aides and authorized families.",
      benefits: [
        "Scan in seconds at the gate",
        "Tardiness and absences visible the same day",
        "History by student and section",
      ],
    },
    {
      slug: "incidencias",
      name: "Incidents",
      status: "available",
      summary: "Role-based logging, institutional types and recurrence tracking.",
      description:
        "Log and track incidents with school-defined types. Includes recurrence patterns for leadership.",
      benefits: [
        "Configurable incident types",
        "Role-based follow-up",
        "Recurrence alerts for leadership",
      ],
    },
    {
      slug: "dashboard",
      name: "Dashboard",
      status: "available",
      summary: "Indicators and reports for leadership, without manual spreadsheets.",
      description:
        "A panel with attendance and incident indicators so leadership decides with data, not scattered sheets.",
      benefits: [
        "Day and period indicators",
        "Reports ready for leadership",
        "A single operational source of truth",
      ],
    },
    {
      slug: "carnets",
      name: "ID cards",
      status: "available",
      summary: "Credentials with the school brand, ready to scan.",
      description:
        "Institutional credentials customized with the school brand, ready for the gate scanning flow.",
      benefits: [
        "Institutional brand on every card",
        "Ready for QR or barcode",
        "Support for printing and rollout",
      ],
    },
    {
      slug: "portal-padres",
      name: "Parent portal",
      status: "available",
      summary: "Authorized access to attendance and incidents.",
      description:
        "Authorized families review attendance and incidents in their own portal, without improvised chats.",
      benefits: [
        "Authorized family access",
        "Attendance and incident lookup",
        "Institutional channel, not a WhatsApp group",
      ],
    },
    {
      slug: "mensajeria",
      name: "Messaging",
      status: "available",
      summary: "School ↔ family communication with a dedicated app.",
      description:
        "Messaging in the AsisAcademy app so school and families communicate with clear history and roles.",
      benefits: [
        "Dedicated communication app",
        "Institutional history",
        "Defined roles and permissions",
      ],
    },
    {
      slug: "pagos",
      name: "Payments",
      status: "coming-soon",
      summary: "Tuition and billing concepts.",
      description:
        "Future module for tuition and billing. Not available and not sold as functional today.",
      benefits: ["Tuition and concepts", "Payment tracking", "Visibility for admin"],
    },
    {
      slug: "notas",
      name: "Grades",
      status: "coming-soon",
      summary: "Grades and academic consolidation.",
      description:
        "Future grades module. Shown as coming soon, not as available.",
      benefits: ["Grades", "Academic consolidation", "Role-based visibility"],
    },
    {
      slug: "matricula",
      name: "Enrollment",
      status: "coming-soon",
      summary: "Admissions and enrollment process.",
      description: "Admissions and enrollment process. On the roadmap; not functional today.",
      benefits: ["Admissions", "Documentation", "Initial assignment"],
    },
    {
      slug: "alumnos",
      name: "Students",
      status: "coming-soon",
      summary: "Student records and management.",
      description: "Student record management. On the roadmap.",
      benefits: ["Student file", "History", "Institutional data"],
    },
    {
      slug: "docentes",
      name: "Teachers",
      status: "coming-soon",
      summary: "Teaching staff management.",
      description: "Teaching staff management. On the roadmap.",
      benefits: ["Teaching staff", "Assignments", "Roles"],
    },
    {
      slug: "aulas-horarios",
      name: "Classrooms & schedules",
      status: "coming-soon",
      summary: "Classroom assignment and scheduling.",
      description: "Classroom and schedule assignment. On the roadmap.",
      benefits: ["Classrooms", "Schedules", "Programming"],
    },
  ],
  messengerApp: {
    title: "App for families (Android)",
    description:
      "Parents can download AsisAcademy Messenger and install it on their phone to receive and send school messages.",
    button: "Download APK",
    note: "Android file (.apk). If the phone asks for permission to install apps from unknown sources, enable it only for this install.",
    href: "/app/asisacademy_Messenger.apk",
    galleryTitle: "This is how the app looks",
    galleryDescription:
      "Messages, attendance, incidents and guardian profile — on the phone, with the same school information.",
    screens: [
      { src: "/images/app_mensajes.jpg", label: "Messages" },
      { src: "/images/app_asistencia.jpg", label: "Attendance" },
      { src: "/images/app_incidencia.jpg", label: "Incidents" },
      { src: "/images/app_perfil.jpg", label: "Profile" },
    ],
  },
  institutions: [
    {
      slug: "san-ramon",
      name: "I.E. San Ramón",
      location: "Ayacucho-Huamanga",
      status: "In production",
      description: "A school already managing attendance and incidents with AsisAcademy.",
      href: "https://sanramon.asisacademy.com",
    },
    {
      slug: "jean-piaget",
      name: "Colegio Jean Piaget",
      location: "Ayacucho-Huamanga",
      status: "In production",
      description: "A school already operating AsisAcademy in production.",
      href: "https://jeanpiaget.asisacademy.com",
    },
  ],
  plans: [
    {
      slug: "esencial",
      name: "Essential",
      summary: "Attendance and basic communication.",
      features: ["Attendance and ID cards", "Parent portal", "Messaging"],
    },
    {
      slug: "academico",
      name: "Academic",
      summary: "Essential + operational follow-up.",
      features: ["Everything in Essential", "Incidents and recurrence", "Dashboard and reports"],
    },
    {
      slug: "gestion",
      name: "Management",
      summary: "Daily operations + future admin modules.",
      features: ["Everything in Academic", "Payments (coming soon)", "Grades (coming soon)"],
    },
    {
      slug: "integral",
      name: "Integral",
      summary: "Educational management suite.",
      features: [
        "Everything in Management",
        "Enrollment and schedules (soon)",
        "RYJEC support",
      ],
    },
  ],
  methodology: [
    {
      step: "01",
      title: "Understand",
      description: "We learn the school: gate, schedules, roles and what hurts today.",
    },
    {
      step: "02",
      title: "Analyze",
      description: "We map attendance, incidents and how families are contacted today.",
    },
    {
      step: "03",
      title: "Propose",
      description: "We set up a free 30-day trial with a small group, without stopping the school.",
    },
    {
      step: "04",
      title: "Build",
      description: "We configure AsisAcademy, role-based users and branded ID cards.",
    },
    {
      step: "05",
      title: "Support",
      description: "Training and support during the pilot: gate, classroom and leadership.",
    },
    {
      step: "06",
      title: "Evolve",
      description:
        "When the school grows, the platform can grow too: payments and grades remain upcoming.",
    },
  ],
  audiences: [
    {
      slug: "direccion",
      name: "Leadership / Admin",
      summary: "Configure the school, see indicators, reports and recurrence alerts.",
    },
    {
      slug: "docentes",
      name: "Teachers and aides",
      summary: "Gate and classroom: scanning, section attendance and daily incidents.",
    },
    {
      slug: "familias",
      name: "Families",
      summary: "Authorized portal and messaging in a dedicated app, without improvised chats.",
    },
  ],
  faq: [
    {
      q: "What kind of school is it for?",
      a: "AsisAcademy is for educational institutions that need gate control, incidents and family communication. It currently operates in schools in Ayacucho-Huamanga.",
    },
    {
      q: "How does the free trial work?",
      a: "30 days with a small group (grade/section), installation, training and support. Commercial WhatsApp: 949 261 503.",
    },
    {
      q: "What does the school need to start?",
      a: "Gate staff, a leadership contact and basic student and schedule data. We configure the system and ID cards.",
    },
    {
      q: "How do families receive notices?",
      a: "Through the parent portal and AsisAcademy app messaging. WhatsApp 949 261 503 is only a commercial / demo channel.",
    },
    {
      q: "Does it include payments and grades?",
      a: "Not yet. They appear as upcoming in the catalog. We do not sell them as functional today.",
    },
    {
      q: "Which modules come later?",
      a: "Payments, grades, enrollment, students, teachers, classrooms and schedules — marked Coming soon.",
    },
  ],
  productVisuals: {
    galleryEyebrow: "Product",
    galleryTitle: "This is AsisAcademy inside",
    galleryDescription:
      "Real screens: home, attendance, incidents, student registry, catalogs, reports, admin and parent portal.",
    galleryCaption: "Interface customizable per school",
    heroAlt: "AsisAcademy home dashboard",
    screens: [
      { key: "inicio", label: "Home / dashboard" },
      { key: "asistencia", label: "Arrival control" },
      { key: "tutor", label: "Gate scanning" },
      { key: "incidencia", label: "Incident list" },
      { key: "estudiantes", label: "Student registry" },
      { key: "catalogo", label: "Fault catalog" },
      { key: "reportes", label: "Reports" },
      { key: "administrador", label: "Settings" },
      { key: "portal", label: "Parent portal" },
    ],
    carnetTitle: "ID cards with your school brand",
    carnetDescription:
      "We design scan-ready credentials with typography, colors and details aligned to your institutional identity. Each school looks distinct without breaking the gate flow.",
    carnetAlt: "AsisAcademy student ID card example",
    carnetPoints: [
      "Institutional logo and colors on the card",
      "Barcode or QR ready for the scanner",
      "Clear student data for staff and families",
      "Support for design and printing",
    ],
  },
  personalization: {
    eyebrow: "Personalization",
    title: "Your school, with its own visual identity",
    description:
      "AsisAcademy does not force a single look. We adapt colors, logo, ID cards and screens to the institution: the platform feels yours from day one.",
    features: [
      "Institutional palette on buttons, menu and UI accents.",
      "School logo on ID cards, headers and the family portal.",
      "Configurable arrival/exit times and limits by level.",
      "Fault catalog and severity defined with leadership.",
    ],
    examplesTitle: "Illustrative institutional looks",
    examples: [
      {
        name: "Colegio Verde Andes",
        vibe: "Institutional greens on menu and buttons; ID card with own crest and calm typography.",
        accent: "#15803d",
      },
      {
        name: "Instituto Horizonte",
        vibe: "Navy sidebar and cyan progress; parent portal with the same identity.",
        accent: "#1d4ed8",
      },
      {
        name: "Liceo Aurora",
        vibe: "AsisAcademy purple + tech cyan; ID cards with brand gradient and circular photo.",
        accent: "#5b21e6",
      },
    ],
    note: "Names above are illustrative personalization examples. They are not additional production clients beyond the institutions listed on this site.",
  },
  home: {
    heroEyebrow: "AsisAcademy · RYJEC",
    problemEyebrow: "The problem and the proposal",
    problemTitle: "From scattered sheets to a single source of truth",
    problemDescription:
      "When attendance lives on paper and communication in improvised chats, leadership decides late. AsisAcademy centralizes everything with role-based access.",
    withoutTitle: "Today, without a system",
    withoutItems: [
      "The gate is logged by hand: tardiness and absences reach leadership late.",
      "WhatsApp groups are not an institutional channel: history and roles are lost.",
      "Attendance, incidents and notices live in different places; no one sees the same data.",
    ],
    withTitle: "With AsisAcademy",
    withItems: [
      "Gate scanning and indicators for leadership the same day.",
      "Authorized portal and messaging in a dedicated app for families.",
      "A single source of truth, ready to grow with payments and grades (upcoming).",
    ],
    modulesEyebrow: "Modules",
    modulesTitle: "What you can use today",
    modulesDescription:
      "Six modules in production. Everything else is marked coming soon — we do not sell it as ready.",
    methodEyebrow: "How it works",
    methodTitle: "What each stage involves",
    methodDescription:
      "Six stages. A long-term relationship: from the free trial to a platform that can grow with the school.",
    audiencesEyebrow: "Audiences",
    audiencesTitle: "Who AsisAcademy is for",
    audiencesDescription: "Each profile sees what they need. The information is the same; access is not.",
    roadmapEyebrow: "Roadmap",
    roadmapTitle: "A platform that grows with you",
    roadmapDescription: "These modules are not available yet. They are not sold as functional today.",
    institutionsEyebrow: "Already using AsisAcademy",
    institutionsTitle: "Institutions in production",
    institutionsDescription:
      "Schools already managing attendance and incidents with the platform.",
    plansEyebrow: "Plans",
    plansTitle: "Choose the scope, not an invented price",
    plansDescription:
      "Four configurable levels. No published rates: request the free trial and we build the proposal.",
    faqEyebrow: "FAQ",
    faqTitle: "Frequently asked questions",
    valueTitle: "Useful technology for schools, built by RYJEC",
    valuePoints: [
      {
        title: "One source of truth",
        text: "Attendance, incidents and notices live in the same system for leadership and families.",
      },
      {
        title: "Role-based access",
        text: "Each profile sees what they should. The information is the same; the permission is not.",
      },
      {
        title: "Grows with the school",
        text: "Six modules in production today. Payments and grades are marked upcoming, not sold.",
      },
    ],
  },
  pages: {
    plataforma: {
      metaTitle: "Platform",
      metaDescription:
        "AsisAcademy: the school's operational base with attendance, incidents, ID cards, portal and messaging.",
      heroEyebrow: "Platform",
      heroTitle: "Not just attendance control",
      heroDescription:
        "It is the school's operational base: scanning, incident history, indicators, credentials, family portal and messaging in a dedicated app.",
    },
    modulos: {
      metaTitle: "Modules",
      metaDescription: "AsisAcademy module catalog: available and coming soon.",
      heroEyebrow: "Modules",
      heroTitle: "Module catalog",
      heroDescription:
        "Available today and an honest roadmap. Nothing is shown as ready if it is not.",
      availableTitle: "Available",
      comingTitle: "Coming soon",
    },
    comoFunciona: {
      metaTitle: "How it works",
      metaDescription: "AsisAcademy rollout: from free trial to school evolution.",
      heroEyebrow: "How it works",
      heroTitle: "From pilot to a platform that grows",
      heroDescription:
        "We work with a clear process to implement AsisAcademy without stopping school operations.",
    },
    instituciones: {
      metaTitle: "Institutions",
      metaDescription: "Institutions already using AsisAcademy in production.",
      heroEyebrow: "Institutions",
      heroTitle: "Institutions that trust AsisAcademy",
      heroDescription:
        "Schools in Ayacucho-Huamanga already managing attendance and incidents with the platform.",
    },
    planes: {
      metaTitle: "Plans",
      metaDescription: "Configurable AsisAcademy plans. No invented prices.",
      heroEyebrow: "Plans",
      heroTitle: "Choose the scope",
      heroDescription:
        "Four levels. Request the free trial and we build the proposal for your school.",
      note: "We do not publish rates. Each proposal is defined from your real context.",
    },
    nosotros: {
      metaTitle: "About us",
      metaDescription: "AsisAcademy is a RYJEC brand born in Ayacucho.",
      heroEyebrow: "About us",
      heroTitle: "Useful technology for schools, built by RYJEC",
      heroDescription:
        "AsisAcademy was born in Ayacucho to replace spreadsheets and improvised chats: one source of truth, with role-based access.",
      teamTitle: "RYJEC team",
      teamDescription:
        "We are a young RYJEC team. When we publish individual profiles with authorized names and photos, they will appear here. Until then, we prefer not to invent biographies.",
    },
    contacto: {
      metaTitle: "Contact",
      metaDescription: "Request your free AsisAcademy trial. WhatsApp 949 261 503.",
      heroEyebrow: "Contact",
      heroTitle: "Request your free trial",
      heroDescription:
        "Tell us about your school. We reply by WhatsApp or email with clarity about the 30-day pilot.",
      formTitle: "Request form",
      formDescription: "Fill in the details or write to us on WhatsApp.",
      whatsappLabel: "Commercial WhatsApp",
      afterTitle: "What happens next",
      afterSteps: [
        { title: "We understand.", text: "We read your school context." },
        { title: "We respond.", text: "We write back with next steps for the pilot." },
        { title: "We propose.", text: "If there is a fit, we set up the free 30-day trial." },
      ],
    },
    legalPrivacidad: {
      metaTitle: "Privacy policy",
      heroTitle: "Privacy policy",
      heroDescription: "How we handle the information you share.",
      intro:
        "AsisAcademy (a RYJEC brand) respects your privacy. This policy describes the processing of personal data sent through the form or by email.",
      sections: [
        {
          heading: "Controller",
          body: "RYJEC — Ayacucho, Peru. Contact: contacto@ryjec.com.",
        },
        {
          heading: "Data",
          body: "Name, email, phone, school and the content of your inquiry.",
        },
        {
          heading: "Purpose",
          body: "To handle free trial, demo or information requests. We do not sell personal data.",
        },
        {
          heading: "Rights",
          body: "You may request access, updates or deletion by writing to contacto@ryjec.com.",
        },
      ],
      updated: "Last updated: August 2026.",
    },
    legalTerminos: {
      metaTitle: "Terms and conditions",
      heroTitle: "Terms and conditions",
      heroDescription: "Terms of use for asisacademy.com.",
      intro:
        "By using this site you accept these terms. Informational content is not a service contract until a proposal or pilot is formalized.",
      sections: [
        {
          heading: "Site use",
          body: "Site information is indicative. Modules marked Coming soon are not part of today's available offer.",
        },
        {
          heading: "Commercial contact",
          body: "WhatsApp 949 261 503 is a commercial channel. The operational channel with families is the AsisAcademy portal and messaging.",
        },
      ],
      updated: "Last updated: August 2026.",
    },
    legalCookies: {
      metaTitle: "Cookie policy",
      heroTitle: "Cookie policy",
      heroDescription: "Cookie use on asisacademy.com.",
      intro:
        "This site may use technical cookies required for operation. We do not use third-party advertising cookies in this version.",
      sections: [
        {
          heading: "Control",
          body: "You can configure your browser to block cookies. Some features may be affected.",
        },
      ],
      updated: "Last updated: August 2026.",
    },
    legalReclamaciones: {
      metaTitle: "Complaints book",
      heroTitle: "Complaints book",
      heroDescription: "Channel to submit complaints related to AsisAcademy.",
      intro:
        "To submit a complaint related to the AsisAcademy service, write to contacto@ryjec.com with your details, the facts and your request.",
      sections: [
        {
          heading: "Response",
          body: "We will respond within a reasonable time according to applicable rules and the type of complaint.",
        },
      ],
      updated: "Last updated: August 2026.",
    },
  },
  form: {
    name: "Name",
    email: "Email",
    school: "School",
    phone: "Phone (optional)",
    need: "Tell us about your school",
    needPlaceholder: "Approximate size, gate, what you want to improve…",
    sending: "Sending…",
    errors: {
      name: "Enter your name.",
      email: "Enter your email.",
      emailInvalid: "Enter a valid email.",
      school: "Enter the school name.",
      need: "Tell us a bit more.",
      generic: "Something went wrong. Write to us on WhatsApp at 949 261 503.",
    },
    success: {
      title: "Request received",
      body: "We received your free trial request. We will reply with clarity about the next step.",
      another: "Send another request",
      openEmail: "Open in your email",
    },
  },
  footer: {
    tagline: "School management platform. A brand by RYJEC.",
    product: "Product",
    company: "Company",
    legal: "Legal",
    privacy: "Privacy",
    terms: "Terms",
    cookies: "Cookies",
    claims: "Complaints",
    rights: "All rights reserved.",
  },
  whatsappFloat: {
    label: "Request free trial on WhatsApp",
    message: "Hello AsisAcademy, I want to request the free 30-day trial for my school.",
  },
};
