import type { Dict } from "./es";

export const quy: Dict = {
  locale: "quy",
  site: {
    name: "AsisAcademy",
    tagline: "Yachay wasiykipaq kamachina plataformam",
    description:
      "Asistencia, incidencias, carnets, reportes, tayta-mama portal wan mensajería hukllapi — rolman hina yaykuywan, huklla cheqaq willakuywan.",
    definition:
      "AsisAcademyqa RYJEC-pa tecnología plataformanmi yachay wasikunata kamachinanpaq, digitalizaciónpaq.",
    promise:
      "Yachay wasipaq allin tecnología: huklla cheqaq willakuy, rolman hina yaykuywan.",
    url: "https://asisacademy.com",
    ogLocale: "quy_PE",
    parentBrand: "RYJEC",
    emails: {
      contact: "contacto@ryjec.com",
    },
    phone: "+51 949 261 503",
    whatsappDigits: "51949261503",
  },
  cta: {
    primary: "Qillqay gratis prueba",
    secondary: "Plataformata reqsiy",
    pilot: "Piloto prueba 30 p'unchaw",
    contact: "Rimaykuway",
    submit: "Mañakuyta apachiy",
    seeModules: "Módulokunata qaway",
    seePlans: "Planekunata qaway",
    howItWorks: "Imaynataq llamkan",
    bandTitle: "¿AsisAcademyta yachay wasiykiman apamusunchik?",
    bandDescription:
      "Instalación, capacitacion wan carnets personalizadospi yanapasayki. 30 p'unchaw gratis pruebawan qallariy.",
  },
  announcement: {
    text: "AsisAcademyta yachay wasiykiman churay · gratis prueba 30 p'unchaw",
    cta: "Qillqay gratis prueba",
  },
  nav: [
    { href: "/", label: "Qallariy" },
    { href: "/nosotros", label: "Ñuqanchik" },
    { href: "/plataforma", label: "Plataforma" },
    { href: "/como-funciona", label: "Imaynataq llamkan" },
    { href: "/instituciones", label: "Yachay wasikuna" },
    { href: "/planes", label: "Planekuna" },
    { href: "/modulos", label: "Módulokuna" },
    { href: "/contacto", label: "Rimanakuy" },
  ],
  ui: {
    skipToContent: "Contenidoman rinay",
    openMenu: "Menúta kichay",
    closeMenu: "Menúta wichqay",
    available: "Kachkanña",
    comingSoon: "Hamunraq",
    knowMore: "Astawan qaway",
    seeModule: "Módulota qaway",
    enter: "Yaykuy",
    prev: "Ñawpaq",
    next: "Qatiq",
    byRyjec: "RYJEC-pa marcanmi",
    mockCaption: "AsisAcademy panelpa cheqaq vista",
    notFound: {
      code: "404",
      title: "Página mana tarisqa",
      text: "Kay ñanqa manam kanchu utaq hukman apasqa. Qallariman kutiy utaq gratis pruebaykita mañakuy.",
      home: "Qallariman riy",
    },
  },
  modules: [
    {
      slug: "asistencia",
      name: "Asistencia",
      status: "available",
      summary: "QR utaq código de barras escaneo. Chayamuykuna lluqsiykuna tiempo realpi.",
      description:
        "Punkupi yaykuy lluqsiy qillqay. Chay willakuyqa chaylla p'unchawmi dirección, auxiliares wan familias autorizadaspaq kachkan.",
      benefits: [
        "Punkupi segundospi escaneo",
        "Tardanzas faltas chaylla p'unchaw rikukunku",
        "Estudiante secciónman hina historial",
      ],
    },
    {
      slug: "incidencias",
      name: "Incidencias",
      status: "available",
      summary: "Rolman hina qillqay, yachay wasi tipokuna wan reincidencia qatikuy.",
      description:
        "Incidenciakunata qillqay qatikuy, yachay wasi tipokunawan. Direcciónpaq reincidencia patrónkunata rikuchin.",
      benefits: [
        "Incidencia tipokuna configurables",
        "Rolman hina qatikuy",
        "Reincidencia alertakuna direcciónpaq",
      ],
    },
    {
      slug: "dashboard",
      name: "Dashboard",
      status: "available",
      summary: "Indicadores reportes direcciónpaq, mana planilla makillawan.",
      description:
        "Asistencia incidencias indicadoreswan panel: dirección datoswan decidinanpaq, mana ch'eqerisqa planillakunawan.",
      benefits: [
        "P'unchawpa periodo indicadores",
        "Direcciónpaq listo reportes",
        "Huklla cheqaq willakuy operativa",
      ],
    },
    {
      slug: "carnets",
      name: "Carnets",
      status: "available",
      summary: "Yachay wasi marcayuq credenciales, escaneanapaq listo.",
      description:
        "Institucional credenciales yachay wasi marcawan, punkupi escaneo flujoqpaq listo.",
      benefits: [
        "Sapa carnetpi institucional marca",
        "QR utaq código de barraspaq listo",
        "Impresión implementaciónpi yanapay",
      ],
    },
    {
      slug: "portal-padres",
      name: "Tayta-mama portal",
      status: "available",
      summary: "Asistencia incidencias autorizasqa consulta.",
      description:
        "Familias autorizadas asistencia incidenciakunata sapallan portalpi qawanku, mana improvisado chatkunaman hap'isqa.",
      benefits: [
        "Familiawan autorizasqa yaykuy",
        "Asistencia incidencias consulta",
        "Institucional canal, mana WhatsApp grupo",
      ],
    },
    {
      slug: "mensajeria",
      name: "Mensajería",
      status: "available",
      summary: "Yachay wasi ↔ familiakuna sapallan aplicativowan.",
      description:
        "AsisAcademy aplicativo mensajería: yachay wasi familiakunawan rimanakuynin historialwan, claro roleswan.",
      benefits: [
        "Comunicaciónpaq sapallan aplicativo",
        "Institucional historial",
        "Roles permisos definidos",
      ],
    },
    {
      slug: "pagos",
      name: "Pagos",
      status: "coming-soon",
      summary: "Pensiones cobro conceptokuna kamachiy.",
      description:
        "Hamuq módulo pensiones cobro conceptokunapaq. Manam kachkanraqchu, manam kunan funcional hina venderanchikchu.",
      benefits: ["Pensiones conceptokuna", "Pagos qatikuy", "Administraciónpaq rikuy"],
    },
    {
      slug: "notas",
      name: "Notas",
      status: "coming-soon",
      summary: "Calificaciones académico consolidado.",
      description:
        "Hamuq módulo calificaciones académico consolidado. Hamunraq hina rikurin, mana disponible hina.",
      benefits: ["Calificaciones", "Académico consolidado", "Rolman hina rikuy"],
    },
    {
      slug: "matricula",
      name: "Matrícula",
      status: "coming-soon",
      summary: "Admisión matrícula proceso.",
      description: "Admisión matrícula proceso. Roadmappi; manam kunan llamkanchu.",
      benefits: ["Admisión", "Documentación", "Ñawpaq asignación"],
    },
    {
      slug: "alumnos",
      name: "Yachakuqkuna",
      status: "coming-soon",
      summary: "Estudiante ficha kamachiy.",
      description: "Estudiante fichakuna kamachiy. Roadmappi.",
      benefits: ["Estudiante ficha", "Historial", "Institucional datos"],
    },
    {
      slug: "docentes",
      name: "Yachachiqkuna",
      status: "coming-soon",
      summary: "Docente personal kamachiy.",
      description: "Docente personal kamachiy. Roadmappi.",
      benefits: ["Docente personal", "Asignaciones", "Roles"],
    },
    {
      slug: "aulas-horarios",
      name: "Aulas horarios",
      status: "coming-soon",
      summary: "Aulas asignación programación.",
      description: "Aulas horarios asignación. Roadmappi.",
      benefits: ["Aulas", "Horarios", "Programación"],
    },
  ],
  messengerApp: {
    title: "Familikunapaq app (Android)",
    description:
      "Tayta-mamakuna AsisAcademy Messenger descargayta atinku celularninkupi instalaspa yachay wasi mensajekunata chaskinapaq apachinapaq.",
    button: "APK descargay",
    note: "Android archivo (.apk). Celular mana reqsisqa origen apps instalay permiso mañaptinqa kay instalaciónllapaq activay.",
    href: "/app/asisacademy_Messenger.apk",
    galleryTitle: "Appqa kayhina rikurin",
    galleryDescription:
      "Mensajes, asistencia, incidencias wan apoderado perfil — celularpi, yachay wasi kaqlla willakuyninwan.",
    screens: [
      { src: "/images/app_mensajes.jpg", label: "Mensajes" },
      { src: "/images/app_asistencia.jpg", label: "Asistencias" },
      { src: "/images/app_incidencia.jpg", label: "Incidencias" },
      { src: "/images/app_perfil.jpg", label: "Perfil" },
    ],
  },
  institutions: [
    {
      slug: "san-ramon",
      name: "I.E. San Ramón",
      location: "Ayacucho-Huamanga",
      status: "Producciónpi",
      description: "AsisAcademywanña asistencia incidenciakunata kamachiq yachay wasi.",
      href: "https://sanramon.asisacademy.com",
    },
    {
      slug: "jean-piaget",
      name: "Colegio Jean Piaget",
      location: "Ayacucho-Huamanga",
      status: "Producciónpi",
      description: "AsisAcademywanña producciónpi llamkaq yachay wasi.",
      href: "https://jeanpiaget.asisacademy.com",
    },
  ],
  plans: [
    {
      slug: "esencial",
      name: "Esencial",
      summary: "Asistencia básica comunicación.",
      features: ["Asistencia carnets", "Tayta-mama portal", "Mensajería"],
    },
    {
      slug: "academico",
      name: "Académico",
      summary: "Esencial + operativo qatikuy.",
      features: ["Tukuy Esencial", "Incidencias reincidencia", "Dashboard reportes"],
    },
    {
      slug: "gestion",
      name: "Gestión",
      summary: "Sapa p'unchaw llamkay + hamuq administrativo módulos.",
      features: ["Tukuy Académico", "Pagos (hamunraq)", "Notas (hamunraq)"],
    },
    {
      slug: "integral",
      name: "Integral",
      summary: "Educativa gestión suite.",
      features: ["Tukuy Gestión", "Matrícula horarios (hamuq)", "RYJEC yanapay"],
    },
  ],
  methodology: [
    {
      step: "01",
      title: "Jap'iy",
      description: "Yachay wasita reqsinchik: punku, horarios, roles wan kunan imataq nanan.",
    },
    {
      step: "02",
      title: "Analizay",
      description: "Asistencia, incidencias wan familiakunawan imaynataq rimanankuta mapanchik.",
    },
    {
      step: "03",
      title: "Niy",
      description:
        "30 p'unchaw gratis pruebata huk huch'uy grupoqwan armanchik, yachay wasita mana sayachiychu.",
    },
    {
      step: "04",
      title: "Ruway",
      description:
        "AsisAcademyta configuranchik, rolman hina usuarios wan institucional marcayuq carnets.",
    },
    {
      step: "05",
      title: "Yanapay",
      description: "Piloto pacham capacitacion soporte: punku, aula wan dirección.",
    },
    {
      step: "06",
      title: "Wiñachiy",
      description:
        "Yachay wasi wiñaptin plataformaqa wiñanmi: pagos notasqa hamuqmi kachkanku.",
    },
  ],
  audiences: [
    {
      slug: "direccion",
      name: "Dirección / Admin",
      summary: "Yachay wasita configura, indicadores, reportes wan reincidencia alertakunata qawan.",
    },
    {
      slug: "docentes",
      name: "Yachachiqkuna auxiliares",
      summary: "Punku aula: escaneo, sección asistencia wan p'unchaw incidencias.",
    },
    {
      slug: "familias",
      name: "Familikuna",
      summary: "Autorizasqa portal wan sapallan aplicativo mensajería, mana improvisado chatkuna.",
    },
  ],
  faq: [
    {
      q: "¿Ima laya yachay wasipaqmi?",
      a: "AsisAcademyqa punku control, incidencias wan familiakunawan comunicación necesitachkaq yachay wasikunapaqmi. Kunanqa Ayacucho-Huamanga colegiospi llamkan.",
    },
    {
      q: "¿Imaynataq gratis pruebataq llamkan?",
      a: "30 p'unchaw huk huch'uy grupoqwan (grado/sección), instalación, capacitacion wan soporte. Comercial WhatsApp: 949 261 503.",
    },
    {
      q: "¿Yachay wasi imataq necesitán qallarinanpaq?",
      a: "Punku personal, dirección responsable wan estudiante horarios datos. Ñuqanchik sistemata carnetkunata configuranchik.",
    },
    {
      q: "¿Familikuna imaynataq willakuyta chaskinku?",
      a: "Tayta-mama portalwan wan AsisAcademy aplicativo mensajeríawan. WhatsApp 949 261 503qa comercial / demo canalllam.",
    },
    {
      q: "¿Pagos notaswanmi?",
      a: "Manaraq kachkankuchu. Catálogopi hamuq hina rikurinku. Manam kunan funcional hina venderanchikchu.",
    },
    {
      q: "¿Ima módulokuna qatimuq?",
      a: "Pagos, notas, matrícula, yachakuqkuna, yachachiqkuna, aulas horarios — Hamunraq nisqa.",
    },
  ],
  productVisuals: {
    galleryEyebrow: "Producto",
    galleryTitle: "AsisAcademyqa ukhunpi kayhina rikurin",
    galleryDescription:
      "Cheqaq pantallakuna: inicio, asistencia, incidencias, padrón, catálogo, reportes, administración wan tayta-mama portal.",
    galleryCaption: "Instituciónman hina personalizable interfaz",
    heroAlt: "AsisAcademy inicio panel",
    screens: [
      { key: "inicio", label: "Inicio / dashboard" },
      { key: "asistencia", label: "Llegadas control" },
      { key: "tutor", label: "Punkupi escaneo" },
      { key: "incidencia", label: "Incidencias lista" },
      { key: "estudiantes", label: "Yachakuqkuna padrón" },
      { key: "catalogo", label: "Faltas catálogo" },
      { key: "reportes", label: "Reportes" },
      { key: "administrador", label: "Configuración" },
      { key: "portal", label: "Tayta-mama portal" },
    ],
    carnetTitle: "Yachay wasi marcayuq carnets",
    carnetDescription:
      "Escaneanapaq listo credenciales diseñanchik: tipografía, colores wan detalles institucional identidadman. Sapa colegioqa huklla rikurin, punku flujo mana p'akispapas.",
    carnetAlt: "AsisAcademy carnet ejemplo",
    carnetPoints: [
      "Institucional logo colores carnetpi",
      "Código de barras utaq QR escánerpaq listo",
      "Estudiante datos claro puerta familiapaq",
      "Diseño impresiónpi yanapay",
    ],
  },
  personalization: {
    eyebrow: "Personalización",
    title: "Yachay wasiyki, sapallan visual identidadwan",
    description:
      "AsisAcademyqa manam huklla uyata forzanchu. Colores, logo, carnets wan pantallakunata instituciónman adaptanchik: plataformaqa ñawpaq p'unchawmantaraq qampa hina.",
    features: [
      "Institucional paleta botones, menú wan UI acentospi.",
      "Yachay wasi logo carnets, encabezados wan familiar portalpi.",
      "Llegada/salida horarios nivelman hina configurables.",
      "Faltas catálogo severidad direcciónwan definido.",
    ],
    examplesTitle: "Institucional look ejemplos",
    examples: [
      {
        name: "Colegio Verde Andes",
        vibe: "Institucional verdes menú botonespi; sapallan escudoyuq carnet.",
        accent: "#15803d",
      },
      {
        name: "Instituto Horizonte",
        vibe: "Navy sidebar wan celeste progreso; kaqlla identidadyuq portal.",
        accent: "#1d4ed8",
      },
      {
        name: "Liceo Aurora",
        vibe: "AsisAcademy morado + tecnológico celeste; gradiente carnets.",
        accent: "#5b21e6",
      },
    ],
    note: "Kay sutikunaqa visual personalización ejemplosllam. Manam sitioq producción institucionesmanta aswan clientekunachu.",
  },
  home: {
    heroEyebrow: "AsisAcademy · RYJEC",
    problemEyebrow: "Sasachakuywan propuesta",
    problemTitle: "Ch'eqerisqa planillakunamanta huklla cheqaq willakuyman",
    problemDescription:
      "Asistencia papelpi kachkaptin comunicación improvisado chatkunapi kachkaptin, direcciónqa tarde decidin. AsisAcademyqa tukuyta rolman hina yaykuywan hukllapi churan.",
    withoutTitle: "Kunan, mana sistemayuq",
    withoutItems: [
      "Punkuta makillawan qillqanku: tardanzas faltas tarde direcciónman chayan.",
      "WhatsApp grupokuna manam institucional canalchu: historial rol chinkan.",
      "Asistencia, incidencias avisos huk huk sitiyupi kachkanku; pipas mana kaqlla datota qawanchu.",
    ],
    withTitle: "AsisAcademywan",
    withItems: [
      "Punkupi escaneo wan direcciónpaq indicadores chaylla p'unchaw.",
      "Autorizasqa portal wan sapallan aplicativo mensajería familiakunapaq.",
      "Huklla cheqaq willakuy, pagos notaswan wiñananpaq listo (hamuq).",
    ],
    modulesEyebrow: "Módulokuna",
    modulesTitle: "Kunanña llamkachiyta atinki",
    modulesDescription:
      "Soqta módulo producciónpi. Hukkunaqa hamunraq hina rikurinku — manam listo hina venderanchikchu.",
    methodEyebrow: "Imaynataq llamkan",
    methodTitle: "Sapa etapatapi ima kan",
    methodDescription:
      "Soqta etapa. Unay tiempo relación: gratis pruebamanta yachay wasiwan wiñaq plataformakama.",
    audiencesEyebrow: "Uyariqkuna",
    audiencesTitle: "Pipaqmi AsisAcademy",
    audiencesDescription:
      "Sapa perfilqa paypaq kaqllata qawan. Willakuyqa kaqllam; yaykuyqa manam.",
    roadmapEyebrow: "Roadmap",
    roadmapTitle: "Qamwan wiñaq plataforma",
    roadmapDescription:
      "Kay módulokuna manaraq kachkankuchu. Manam kunan funcional hina venderankuchu.",
    institutionsEyebrow: "AsisAcademytaña llamkachinku",
    institutionsTitle: "Producciónpi yachay wasikuna",
    institutionsDescription:
      "Asistencia incidenciakunata plataformawanña kamachiq colegios.",
    plansEyebrow: "Planekuna",
    plansTitle: "Alcanceta akllay, mana inventasqa preciota",
    plansDescription:
      "Tawa nivel configurables. Mana publicasqa tarifas: gratis pruebata tapukuy, propuestata armanaykipaq.",
    faqEyebrow: "FAQ",
    faqTitle: "Sapa kuti tapukuykuna",
    valueTitle: "Yachay wasipaq allin tecnología, RYJEC-pa ruwasqan",
    valuePoints: [
      {
        title: "Huklla cheqaq willakuy",
        text: "Asistencia, incidencias avisos kaqlla sistemapi dirección familiakunapaq.",
      },
      {
        title: "Rolman hina yaykuy",
        text: "Sapa perfilqa paypaq kaqllata qawan. Willakuyqa kaqllam; permisoqa manam.",
      },
      {
        title: "Yachay wasiwan wiñan",
        text: "Kunan soqta módulo producciónpi. Pagos notasqa hamuq nisqa, mana vendido nisqa.",
      },
    ],
  },
  pages: {
    plataforma: {
      metaTitle: "Plataforma",
      metaDescription:
        "AsisAcademy: yachay wasipa operativo base — asistencia, incidencias, carnets, portal wan mensajería.",
      heroEyebrow: "Plataforma",
      heroTitle: "Manam asistencia controlllamchu",
      heroDescription:
        "Yachay wasipa operativo basenmi: escaneo, incidencias historial, indicadores, credenciales, familiar portal wan sapallan aplicativo mensajería.",
    },
    modulos: {
      metaTitle: "Módulokuna",
      metaDescription: "AsisAcademy módulos catálogo: kachkanña wan hamunraq.",
      heroEyebrow: "Módulokuna",
      heroTitle: "Módulos catálogo",
      heroDescription:
        "Kunan disponibles wan honesto roadmap. Mana listochu kachkaptinqa manam listo hina rikuchinchikchu.",
      availableTitle: "Kachkanña",
      comingTitle: "Hamunraq",
    },
    comoFunciona: {
      metaTitle: "Imaynataq llamkan",
      metaDescription: "AsisAcademy implementación: gratis pruebamanta yachay wasi wiñaykama.",
      heroEyebrow: "Imaynataq llamkan",
      heroTitle: "Pilotomanta wiñaq plataformakama",
      heroDescription:
        "AsisAcademyta yachay wasi llamkayta mana sayachiychu churanapaq claro procesowan llamkanchik.",
    },
    instituciones: {
      metaTitle: "Yachay wasikuna",
      metaDescription: "AsisAcademyta producciónpiña llamkachiq yachay wasikuna.",
      heroEyebrow: "Yachay wasikuna",
      heroTitle: "AsisAcademypi confiaq yachay wasikuna",
      heroDescription:
        "Ayacucho-Huamanga colegios asistencia incidenciakunata plataformawanña kamachinku.",
    },
    planes: {
      metaTitle: "Planekuna",
      metaDescription: "AsisAcademy planekuna configurables. Mana inventasqa precios.",
      heroEyebrow: "Planekuna",
      heroTitle: "Alcanceta akllay",
      heroDescription:
        "Tawa nivel. Gratis pruebata tapukuy, yachay wasiykiman hina propuestata armanchik.",
      note: "Manam tarifakunata publicanchikchu. Sapa propuestaqa cheqaq contextoykiwanmi definikun.",
    },
    nosotros: {
      metaTitle: "Ñuqanchik",
      metaDescription: "AsisAcademyqa Ayacuchopi paqarisqa RYJEC marca.",
      heroEyebrow: "Ñuqanchik",
      heroTitle: "Yachay wasipaq allin tecnología, RYJEC-pa ruwasqan",
      heroDescription:
        "AsisAcademyqa Ayacuchopi paqarin planillakunata improvisado chatkunata reemplazanapaq: huklla cheqaq willakuy, rolman hina yaykuywan.",
      teamTitle: "RYJEC equipo",
      teamDescription:
        "RYJEC-pa joven equiponmi kayku. Suti fotoyuq autorizasqa perfilkunata publicaptinchikqa kaypim rikurinqaku. Chaykamaqa manam biografíakunata inventayta munaniku.",
    },
    contacto: {
      metaTitle: "Rimanakuy",
      metaDescription: "AsisAcademy gratis pruebaykita mañakuy. WhatsApp 949 261 503.",
      heroEyebrow: "Rimanakuy",
      heroTitle: "Gratis pruebaykita mañakuy",
      heroDescription:
        "Yachay wasiykimanta willawayku. WhatsApp utaq correowan 30 p'unchaw pilotomanta claro kutichisayki.",
      formTitle: "Mañakuy formulario",
      formDescription: "Datokunata hunt'achiy utaq WhatsAppwan qillqawayku.",
      whatsappLabel: "Comercial WhatsApp",
      afterTitle: "Qatiqpi ima kan",
      afterSteps: [
        { title: "Jap'inchik.", text: "Yachay wasiykipa contextota ñawinchayku." },
        { title: "Kutichinchik.", text: "Pilotoq qatiq pasokunawan qillqasayki." },
        { title: "Niychik.", text: "Encaje kaptinqa 30 p'unchaw gratis pruebata armanchik." },
      ],
    },
    legalPrivacidad: {
      metaTitle: "Privacidad política",
      heroTitle: "Privacidad política",
      heroDescription: "Willakuwasqaykita imaynataq tratanchik.",
      intro:
        "AsisAcademy (RYJEC marca) privacidadniykita respetan. Kay políticaqa formulario utaq correowan apachisqa datos personales tratamientota willan.",
      sections: [
        {
          heading: "Responsable",
          body: "RYJEC — Ayacucho, Perú. Contacto: contacto@ryjec.com.",
        },
        {
          heading: "Datos",
          body: "Suti, correo, teléfono, yachay wasi wan consultaykipa contenido.",
        },
        {
          heading: "Finalidad",
          body: "Gratis prueba, demo utaq información mañakuykunata atendenapaq. Manam datos personales venderanchikchu.",
        },
        {
          heading: "Derechos",
          body: "Acceso, actualización utaq eliminaciónta mañawayta atinki contacto@ryjec.com-man qillqaspa.",
        },
      ],
      updated: "Qhipa actualización: agosto 2026.",
    },
    legalTerminos: {
      metaTitle: "Términos condiciones",
      heroTitle: "Términos condiciones",
      heroDescription: "asisacademy.com sitio uso condiciones.",
      intro:
        "Kay sitiota llamkachispa kay condiciones aceptanki. Informativo contenidoqa manam servicio contratuchu kan, propuesta utaq piloto formalizasqakama.",
      sections: [
        {
          heading: "Sitio uso",
          body: "Sitio willakuyqa orientativa. Hamunraq nisqa módulokuna manam kunan oferta partechu.",
        },
        {
          heading: "Comercial contacto",
          body: "WhatsApp 949 261 503qa comercial canalmi. Familikunawan operativo canalqa AsisAcademy portal mensajeríam.",
        },
      ],
      updated: "Qhipa actualización: agosto 2026.",
    },
    legalCookies: {
      metaTitle: "Cookies política",
      heroTitle: "Cookies política",
      heroDescription: "asisacademy.com-pi cookies uso.",
      intro:
        "Kay sitioqa funcionamientoqpaq necesario técnicas cookiekunata llamkachinman. Kay versiónpi manam terceros publicidad cookiekunata llamkanchikchu.",
      sections: [
        {
          heading: "Control",
          body: "Navegadorykita configurayta atinki cookiekunata bloquenapaq. Wakin funcionesqa afectasqa kanman.",
        },
      ],
      updated: "Qhipa actualización: agosto 2026.",
    },
    legalReclamaciones: {
      metaTitle: "Reclamaciones libro",
      heroTitle: "Reclamaciones libro",
      heroDescription: "AsisAcademywan relacionasqa reclamos canal.",
      intro:
        "AsisAcademy serviciowan relacionasqa reclamota apachinaykipaq, contacto@ryjec.com-man qillqawayku: datoykikuna, reclamado hecho wan mañakuyniyki.",
      sections: [
        {
          heading: "Kutichiy",
          body: "Aplicable normativawan reclamo tipoman hina razonable plazoqpi kutichisayki.",
        },
      ],
      updated: "Qhipa actualización: agosto 2026.",
    },
  },
  form: {
    name: "Suti",
    email: "Correo",
    school: "Yachay wasi",
    phone: "Teléfono (munanki chayqa)",
    need: "Yachay wasiykimanta willawayku",
    needPlaceholder: "Approximate size, punku, imataq allichayta munanki…",
    sending: "Apachichkan…",
    errors: {
      name: "Sutiykita qillqay.",
      email: "Correoykita qillqay.",
      emailInvalid: "Allin correota qillqay.",
      school: "Yachay wasi sutinta qillqay.",
      need: "Astawan willawayku.",
      generic: "Sasachakuy karqa. WhatsApp 949 261 503-man qillqawayku.",
    },
    success: {
      title: "Mañakuy qillqasqa",
      body: "Gratis prueba mañakuyniykita chaskirqaniku. Qatiq pasoqmanta claro kutichisayki.",
      another: "Huk mañakuyta apachiy",
      openEmail: "Correoykipi kichay",
    },
  },
  footer: {
    tagline: "Escolar gestión plataforma. RYJEC-pa marcanmi.",
    product: "Producto",
    company: "Empresa",
    legal: "Legal",
    privacy: "Privacidad",
    terms: "Términos",
    cookies: "Cookies",
    claims: "Reclamaciones",
    rights: "Tukuy derechos reservados.",
  },
  whatsappFloat: {
    label: "WhatsAppwan gratis pruebata mañakuy",
    message:
      "Napaykullayki AsisAcademy, yachay wasiypaq 30 p'unchaw gratis pruebata mañakuyta munani.",
  },
};
