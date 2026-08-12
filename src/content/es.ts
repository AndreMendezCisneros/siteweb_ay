export const es = {
  locale: "es",
  site: {
    name: "AsisAcademy",
    tagline: "Una plataforma para gestionar y conectar tu colegio",
    description:
      "Centraliza asistencia, incidencias, carnets, reportes, portal familiar y mensajería — con accesos por rol y una sola fuente de verdad.",
    definition:
      "AsisAcademy es una plataforma tecnológica de RYJEC para la gestión y digitalización de instituciones educativas.",
    promise: "Tecnología útil para el colegio: una sola fuente de verdad, con accesos por rol.",
    url: "https://asisacademy.com",
    ogLocale: "es_PE",
    parentBrand: "RYJEC",
    emails: {
      contact: "contacto@ryjec.com",
    },
    phone: "+51 949 261 503",
    whatsappDigits: "51949261503",
  },
  cta: {
    primary: "Solicitar prueba gratuita",
    secondary: "Conocer la plataforma",
    pilot: "Prueba piloto 30 días",
    contact: "Contactar",
    submit: "Enviar solicitud",
    seeModules: "Ver módulos",
    seePlans: "Ver planes",
    howItWorks: "Cómo funciona",
    bandTitle: "¿Llevamos AsisAcademy a tu colegio?",
    bandDescription:
      "Te acompañamos en instalación, capacitación y carnets personalizados. Empieza con una prueba gratuita de 30 días.",
  },
  announcement: {
    text: "Implementa AsisAcademy en tu colegio · prueba gratuita 30 días",
    cta: "Solicitar prueba gratuita",
  },
  nav: [
    { href: "/", label: "Inicio" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/plataforma", label: "Plataforma" },
    { href: "/como-funciona", label: "Cómo funciona" },
    { href: "/instituciones", label: "Instituciones" },
    { href: "/planes", label: "Planes" },
    { href: "/modulos", label: "Módulos" },
    { href: "/contacto", label: "Contacto" },
  ],
  ui: {
    skipToContent: "Saltar al contenido",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    available: "Disponible",
    comingSoon: "Próximamente",
    knowMore: "Ver detalle",
    seeModule: "Ver módulo",
    enter: "Entrar",
    prev: "Anterior",
    next: "Siguiente",
    byRyjec: "Una marca de RYJEC",
    mockCaption: "Vista real del panel AsisAcademy",
    notFound: {
      code: "404",
      title: "Página no encontrada",
      text: "La ruta no existe o fue movida. Vuelve al inicio o solicita tu prueba gratuita.",
      home: "Ir al inicio",
    },
  },
  modules: [
    {
      slug: "asistencia",
      name: "Asistencia",
      status: "available" as const,
      summary: "Escaneo QR o código de barras. Llegadas y salidas en tiempo real.",
      description:
        "Registro de entrada y salida en la puerta. La información queda disponible el mismo día para dirección, auxiliares y familias autorizadas.",
      benefits: [
        "Escaneo en segundos en la puerta",
        "Tardanzas y faltas visibles el mismo día",
        "Historial por estudiante y sección",
      ],
    },
    {
      slug: "incidencias",
      name: "Incidencias",
      status: "available" as const,
      summary: "Registro por roles, tipos institucionales y seguimiento de reincidencia.",
      description:
        "Registra y da seguimiento a incidencias con tipos definidos por el colegio. Incluye vista de patrones de reincidencia para dirección.",
      benefits: [
        "Tipos de incidencia configurables",
        "Seguimiento por roles",
        "Alertas de reincidencia para dirección",
      ],
    },
    {
      slug: "dashboard",
      name: "Dashboard",
      status: "available" as const,
      summary: "Indicadores y reportes para dirección, sin planillas manuales.",
      description:
        "Panel con indicadores de asistencia e incidencias para que dirección decida con datos, no con planillas dispersas.",
      benefits: [
        "Indicadores del día y del periodo",
        "Reportes listos para dirección",
        "Una sola fuente de verdad operativa",
      ],
    },
    {
      slug: "carnets",
      name: "Carnets",
      status: "available" as const,
      summary: "Credenciales con la marca del colegio, listas para escanear.",
      description:
        "Credenciales institucionales personalizadas con la marca del colegio, listas para el flujo de escaneo en puerta.",
      benefits: [
        "Marca institucional en cada carnet",
        "Listos para QR o código de barras",
        "Acompañamiento en impresión e implementación",
      ],
    },
    {
      slug: "portal-padres",
      name: "Portal padres",
      status: "available" as const,
      summary: "Consulta autorizada de asistencia e incidencias.",
      description:
        "Las familias autorizadas consultan asistencia e incidencias en un portal propio, sin depender de chats improvisados.",
      benefits: [
        "Acceso autorizado por familia",
        "Consulta de asistencia e incidencias",
        "Canal institucional, no un grupo de WhatsApp",
      ],
    },
    {
      slug: "mensajeria",
      name: "Mensajería",
      status: "available" as const,
      summary: "Comunicación colegio ↔ familias con aplicativo propio.",
      description:
        "Mensajería en el aplicativo AsisAcademy para que el colegio y las familias se comuniquen con historial y roles claros.",
      benefits: [
        "Aplicativo propio de comunicación",
        "Historial institucional",
        "Roles y permisos definidos",
      ],
    },
    {
      slug: "pagos",
      name: "Pagos",
      status: "coming-soon" as const,
      summary: "Gestión de pensiones y conceptos de cobro.",
      description:
        "Módulo futuro para pensiones y conceptos de cobro. No está disponible ni se vende como funcional hoy.",
      benefits: ["Pensiones y conceptos", "Seguimiento de pagos", "Visibilidad para administración"],
    },
    {
      slug: "notas",
      name: "Notas",
      status: "coming-soon" as const,
      summary: "Calificaciones y consolidado académico.",
      description:
        "Módulo futuro de calificaciones y consolidado académico. Aparece como próximamente, no como disponible.",
      benefits: ["Calificaciones", "Consolidado académico", "Visibilidad por rol"],
    },
    {
      slug: "matricula",
      name: "Matrícula",
      status: "coming-soon" as const,
      summary: "Proceso de admisión y matrícula.",
      description: "Proceso de admisión y matrícula. En roadmap; no funcional hoy.",
      benefits: ["Admisión", "Documentación", "Asignación inicial"],
    },
    {
      slug: "alumnos",
      name: "Alumnos",
      status: "coming-soon" as const,
      summary: "Ficha y gestión de estudiantes.",
      description: "Gestión de fichas de estudiantes. En roadmap.",
      benefits: ["Ficha del estudiante", "Historial", "Datos institucionales"],
    },
    {
      slug: "docentes",
      name: "Docentes",
      status: "coming-soon" as const,
      summary: "Gestión del personal docente.",
      description: "Gestión del personal docente. En roadmap.",
      benefits: ["Personal docente", "Asignaciones", "Roles"],
    },
    {
      slug: "aulas-horarios",
      name: "Aulas y horarios",
      status: "coming-soon" as const,
      summary: "Asignación de aulas y programación.",
      description: "Asignación de aulas y horarios. En roadmap.",
      benefits: ["Aulas", "Horarios", "Programación"],
    },
  ],
  messengerApp: {
    title: "App para familias (Android)",
    description:
      "Los padres y madres pueden descargar AsisAcademy Messenger e instalarla en su celular para recibir y enviar mensajes del colegio.",
    button: "Descargar APK",
    note: "Archivo Android (.apk). Si el teléfono pide permiso para instalar apps de origen desconocido, actívalo solo para esta instalación.",
    href: "/app/asisacademy_Messenger.apk",
    galleryTitle: "Así se ve la app",
    galleryDescription:
      "Mensajes, asistencia, incidencias y perfil del apoderado — en el celular, con la misma información del colegio.",
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
      status: "En producción",
      description: "Colegio que ya gestiona asistencia e incidencias con AsisAcademy.",
      href: "https://sanramon.asisacademy.com",
    },
    {
      slug: "jean-piaget",
      name: "Colegio Jean Piaget",
      location: "Ayacucho-Huamanga",
      status: "En producción",
      description: "Colegio que ya opera con AsisAcademy en producción.",
      href: "https://jeanpiaget.asisacademy.com",
    },
  ],
  plans: [
    {
      slug: "esencial",
      name: "Esencial",
      summary: "Asistencia y comunicación básica.",
      features: ["Asistencia y carnets", "Portal padres", "Mensajería"],
    },
    {
      slug: "academico",
      name: "Académico",
      summary: "Esencial + seguimiento operativo.",
      features: ["Todo Esencial", "Incidencias y reincidencia", "Dashboard y reportes"],
    },
    {
      slug: "gestion",
      name: "Gestión",
      summary: "Operación diaria + módulos administrativos futuros.",
      features: ["Todo Académico", "Pagos (próximamente)", "Notas (próximamente)"],
    },
    {
      slug: "integral",
      name: "Integral",
      summary: "Suite de gestión educativa.",
      features: [
        "Todo Gestión",
        "Matrícula y horarios (próx.)",
        "Acompañamiento RYJEC",
      ],
    },
  ],
  methodology: [
    {
      step: "01",
      title: "Entender",
      description: "Conocemos al colegio: puerta, horarios, roles y qué duele hoy.",
    },
    {
      step: "02",
      title: "Analizar",
      description: "Mapeamos asistencia, incidencias y cómo se comunica hoy con las familias.",
    },
    {
      step: "03",
      title: "Proponer",
      description: "Armamos una prueba gratuita de 30 días con un grupo reducido, sin detener el colegio.",
    },
    {
      step: "04",
      title: "Construir",
      description: "Configuramos AsisAcademy, usuarios por rol y carnets con la marca institucional.",
    },
    {
      step: "05",
      title: "Acompañar",
      description: "Capacitación y soporte durante el piloto: puerta, aula y dirección.",
    },
    {
      step: "06",
      title: "Evolucionar",
      description:
        "Cuando el colegio crece, la plataforma también: pagos y notas siguen como próximos.",
    },
  ],
  audiences: [
    {
      slug: "direccion",
      name: "Dirección / Admin",
      summary: "Configura el colegio, ve indicadores, reportes y alertas de reincidencia.",
    },
    {
      slug: "docentes",
      name: "Docentes y auxiliares",
      summary: "Puerta y aula: escaneo, asistencia de sección e incidencias del día.",
    },
    {
      slug: "familias",
      name: "Familias",
      summary: "Portal autorizado y mensajería en aplicativo propio, sin chats improvisados.",
    },
  ],
  faq: [
    {
      q: "¿Para qué tipo de colegio sirve?",
      a: "AsisAcademy está pensado para instituciones educativas que necesitan control de puerta, incidencias y comunicación con familias. Hoy opera en colegios de Ayacucho-Huamanga.",
    },
    {
      q: "¿Cómo funciona la prueba gratuita?",
      a: "30 días con un grupo reducido (grado/sección), instalación, capacitación y soporte. WhatsApp comercial: 949 261 503.",
    },
    {
      q: "¿Qué necesita el colegio para empezar?",
      a: "Personal de puerta, un responsable de dirección y datos básicos de estudiantes y horarios. Nosotros configuramos el sistema y los carnets.",
    },
    {
      q: "¿Cómo reciben avisos las familias?",
      a: "Por el portal de padres y la mensajería del aplicativo AsisAcademy. WhatsApp 949 261 503 es solo canal comercial / demo.",
    },
    {
      q: "¿Incluye pagos y notas?",
      a: "No están disponibles aún. Aparecen como próximos en el catálogo. No los vendemos como funcionales hoy.",
    },
    {
      q: "¿Qué módulos vendrán después?",
      a: "Pagos, notas, matrícula, alumnos, docentes, aulas y horarios — marcados como Próximamente.",
    },
  ],
  productVisuals: {
    galleryEyebrow: "Producto",
    galleryTitle: "Así se ve AsisAcademy por dentro",
    galleryDescription:
      "Pantallas reales del sistema: inicio, asistencia, incidencias, padrón, catálogo, reportes, administración y portal familiar.",
    galleryCaption: "Interfaz personalizable por institución",
    heroAlt: "Panel de inicio AsisAcademy",
    screens: [
      { key: "inicio", label: "Inicio / dashboard" },
      { key: "asistencia", label: "Control de llegadas" },
      { key: "tutor", label: "Escaneo en puerta" },
      { key: "incidencia", label: "Lista de incidencias" },
      { key: "estudiantes", label: "Padrón de estudiantes" },
      { key: "catalogo", label: "Catálogo de faltas" },
      { key: "reportes", label: "Reportes" },
      { key: "administrador", label: "Configuración" },
      { key: "portal", label: "Portal de padres" },
    ],
    carnetTitle: "Carnets con la marca de tu colegio",
    carnetDescription:
      "Diseñamos credenciales listas para escanear, con tipografía, colores y detalles alineados a la identidad institucional. Cada colegio luce distinto sin perder el flujo de puerta.",
    carnetAlt: "Ejemplo de carnet AsisAcademy",
    carnetPoints: [
      "Logo y colores institucionales en el carnet",
      "Código de barras o QR listo para el escáner",
      "Datos del estudiante claros para puerta y familia",
      "Acompañamiento en diseño e impresión",
    ],
  },
  personalization: {
    eyebrow: "Personalización",
    title: "Tu colegio, con su propia identidad visual",
    description:
      "AsisAcademy no impone una sola cara. Adaptamos colores, logo, carnets y pantallas a la institución: la plataforma se siente tuya desde el primer día.",
    features: [
      "Paleta institucional en botones, menú y acentos de la interfaz.",
      "Logo del colegio en carnets, encabezados y portal familiar.",
      "Horarios de llegada/salida y límites por nivel configurables.",
      "Catálogo de faltas y severidades definidos con dirección.",
    ],
    examplesTitle: "Ejemplos de look institucional",
    examples: [
      {
        name: "Colegio Verde Andes",
        vibe: "Verdes institucionales en menú y botones; carnet con escudo propio y tipografía serena.",
        accent: "#15803d",
      },
      {
        name: "Instituto Horizonte",
        vibe: "Azul marino en sidebar y celeste en progreso; portal padres con la misma identidad.",
        accent: "#1d4ed8",
      },
      {
        name: "Liceo Aurora",
        vibe: "Morado AsisAcademy + celeste tecnológico; carnets con gradiente de marca y foto circular.",
        accent: "#5b21e6",
      },
    ],
    note: "Los nombres anteriores son ejemplos ilustrativos de personalización visual. No representan clientes adicionales a las instituciones en producción listadas en el sitio.",
  },
  home: {
    heroEyebrow: "AsisAcademy · RYJEC",
    problemEyebrow: "El problema y la propuesta",
    problemTitle: "De planillas dispersas a una sola fuente de verdad",
    problemDescription:
      "Cuando la asistencia vive en papel y la comunicación en chats improvisados, dirección decide tarde. AsisAcademy centraliza todo con accesos por rol.",
    withoutTitle: "Hoy, sin sistema",
    withoutItems: [
      "La puerta se registra a mano: tardanzas y faltas llegan tarde a dirección.",
      "Los grupos de WhatsApp no son canal institucional: se pierde historial y rol.",
      "Asistencia, incidencias y avisos viven en sitios distintos; nadie ve el mismo dato.",
    ],
    withTitle: "Con AsisAcademy",
    withItems: [
      "Escaneo en la puerta e indicadores para dirección el mismo día.",
      "Portal autorizado y mensajería en aplicativo propio para las familias.",
      "Una sola fuente de verdad, lista para crecer con pagos y notas (próximos).",
    ],
    modulesEyebrow: "Módulos",
    modulesTitle: "Lo que ya puedes usar hoy",
    modulesDescription:
      "Seis módulos en producción. Lo demás aparece como próximamente — no lo vendemos como listo.",
    methodEyebrow: "Cómo funciona",
    methodTitle: "Qué implica cada etapa",
    methodDescription:
      "Seis etapas. Una relación de largo plazo: de la prueba gratuita a una plataforma que puede crecer con el colegio.",
    audiencesEyebrow: "Audiencias",
    audiencesTitle: "Para quién es AsisAcademy",
    audiencesDescription: "Cada perfil ve lo que le corresponde. La información es la misma; el acceso, no.",
    roadmapEyebrow: "Roadmap",
    roadmapTitle: "Una plataforma que crece contigo",
    roadmapDescription:
      "Estos módulos no están disponibles aún. No se venden como funcionales hoy.",
    institutionsEyebrow: "Ya usan AsisAcademy",
    institutionsTitle: "Instituciones en producción",
    institutionsDescription:
      "Colegios que ya gestionan asistencia e incidencias con la plataforma.",
    plansEyebrow: "Planes",
    plansTitle: "Elige el alcance, no un precio inventado",
    plansDescription:
      "Cuatro niveles configurables. Sin tarifas publicadas: consulta la prueba gratuita y te armamos la propuesta.",
    faqEyebrow: "FAQ",
    faqTitle: "Preguntas frecuentes",
    valueTitle: "Tecnología útil para el colegio, hecha por RYJEC",
    valuePoints: [
      {
        title: "Una fuente de verdad",
        text: "Asistencia, incidencias y avisos viven en el mismo sistema para dirección y familias.",
      },
      {
        title: "Accesos por rol",
        text: "Cada perfil ve lo que le corresponde. La información es la misma; el permiso, no.",
      },
      {
        title: "Crece con el colegio",
        text: "Hoy seis módulos en producción. Pagos y notas están marcados como próximos, no como vendidos.",
      },
    ],
  },
  pages: {
    plataforma: {
      metaTitle: "Plataforma",
      metaDescription:
        "AsisAcademy: base operativa del colegio con asistencia, incidencias, carnets, portal y mensajería.",
      heroEyebrow: "Plataforma",
      heroTitle: "No es solo un control de asistencia",
      heroDescription:
        "Es la base operativa del colegio: escaneo, historial de incidencias, indicadores, credenciales, portal familiar y mensajería en aplicativo propio.",
    },
    modulos: {
      metaTitle: "Módulos",
      metaDescription: "Catálogo de módulos AsisAcademy: disponibles y próximamente.",
      heroEyebrow: "Módulos",
      heroTitle: "Catálogo de módulos",
      heroDescription:
        "Disponibles hoy y roadmap honesto. Nada se presenta como listo si aún no lo está.",
      availableTitle: "Disponibles",
      comingTitle: "Próximamente",
    },
    comoFunciona: {
      metaTitle: "Cómo funciona",
      metaDescription: "Implementación AsisAcademy: de la prueba gratuita a la evolución del colegio.",
      heroEyebrow: "Cómo funciona",
      heroTitle: "Del piloto a una plataforma que crece",
      heroDescription:
        "Trabajamos con un proceso claro para implementar AsisAcademy sin detener la operación del colegio.",
    },
    instituciones: {
      metaTitle: "Instituciones",
      metaDescription: "Instituciones que ya usan AsisAcademy en producción.",
      heroEyebrow: "Instituciones",
      heroTitle: "Instituciones que confían en AsisAcademy",
      heroDescription:
        "Colegios en Ayacucho-Huamanga que ya gestionan asistencia e incidencias con la plataforma.",
    },
    planes: {
      metaTitle: "Planes",
      metaDescription: "Planes AsisAcademy configurables. Sin precios inventados.",
      heroEyebrow: "Planes",
      heroTitle: "Elige el alcance",
      heroDescription:
        "Cuatro niveles. Consulta la prueba gratuita y armamos la propuesta según tu colegio.",
      note: "No publicamos tarifas. Cada propuesta se define con tu contexto real.",
    },
    nosotros: {
      metaTitle: "Nosotros",
      metaDescription: "AsisAcademy es una marca de RYJEC nacida en Ayacucho.",
      heroEyebrow: "Nosotros",
      heroTitle: "Tecnología útil para el colegio, hecha por RYJEC",
      heroDescription:
        "AsisAcademy nace en Ayacucho para reemplazar planillas y chats improvisados: una sola fuente de verdad, con accesos por rol.",
      teamTitle: "Equipo RYJEC",
      teamDescription:
        "Somos un equipo joven de RYJEC. Cuando publiquemos perfiles individuales con nombre y foto autorizados, aparecerán aquí. Mientras tanto, preferimos no inventar biografías.",
    },
    contacto: {
      metaTitle: "Contacto",
      metaDescription: "Solicita tu prueba gratuita de AsisAcademy. WhatsApp 949 261 503.",
      heroEyebrow: "Contacto",
      heroTitle: "Solicita tu prueba gratuita",
      heroDescription:
        "Cuéntanos sobre tu colegio. Respondemos por WhatsApp o correo con claridad sobre el piloto de 30 días.",
      formTitle: "Formulario de solicitud",
      formDescription: "Completa los datos o escríbenos por WhatsApp.",
      whatsappLabel: "WhatsApp comercial",
      afterTitle: "Qué pasa después",
      afterSteps: [
        { title: "Entendemos.", text: "Leemos el contexto de tu colegio." },
        { title: "Respondemos.", text: "Te escribimos con siguientes pasos del piloto." },
        { title: "Proponemos.", text: "Si hay encaje, armamos la prueba gratuita de 30 días." },
      ],
    },
    legalPrivacidad: {
      metaTitle: "Política de privacidad",
      heroTitle: "Política de privacidad",
      heroDescription: "Cómo tratamos la información que nos compartes.",
      intro:
        "AsisAcademy (marca de RYJEC) respeta tu privacidad. Esta política describe el tratamiento de datos personales enviados por el formulario o por correo.",
      sections: [
        {
          heading: "Responsable",
          body: "RYJEC — Ayacucho, Perú. Contacto: contacto@ryjec.com.",
        },
        {
          heading: "Datos",
          body: "Nombre, correo, teléfono, colegio y el contenido de tu consulta.",
        },
        {
          heading: "Finalidad",
          body: "Atender solicitudes de prueba gratuita, demo o información. No vendemos datos personales.",
        },
        {
          heading: "Derechos",
          body: "Puedes solicitar acceso, actualización o eliminación escribiendo a contacto@ryjec.com.",
        },
      ],
      updated: "Última actualización: agosto 2026.",
    },
    legalTerminos: {
      metaTitle: "Términos y condiciones",
      heroTitle: "Términos y condiciones",
      heroDescription: "Condiciones de uso del sitio asisacademy.com.",
      intro:
        "Al usar este sitio aceptas estas condiciones. El contenido informativo no constituye un contrato de servicio hasta que se formalice una propuesta o piloto.",
      sections: [
        {
          heading: "Uso del sitio",
          body: "La información del sitio es orientativa. Los módulos marcados como Próximamente no forman parte de la oferta disponible hoy.",
        },
        {
          heading: "Contacto comercial",
          body: "WhatsApp 949 261 503 es canal comercial. El canal operativo con familias es el portal y la mensajería de AsisAcademy.",
        },
      ],
      updated: "Última actualización: agosto 2026.",
    },
    legalCookies: {
      metaTitle: "Política de cookies",
      heroTitle: "Política de cookies",
      heroDescription: "Uso de cookies en asisacademy.com.",
      intro:
        "Este sitio puede usar cookies técnicas necesarias para su funcionamiento. No usamos cookies de publicidad de terceros en esta versión.",
      sections: [
        {
          heading: "Control",
          body: "Puedes configurar tu navegador para bloquear cookies. Algunas funciones podrían verse afectadas.",
        },
      ],
      updated: "Última actualización: agosto 2026.",
    },
    legalReclamaciones: {
      metaTitle: "Libro de reclamaciones",
      heroTitle: "Libro de reclamaciones",
      heroDescription: "Canal para presentar reclamos relacionados con AsisAcademy.",
      intro:
        "Para presentar un reclamo relacionado con el servicio AsisAcademy, escríbenos a contacto@ryjec.com indicando tus datos, el hecho reclamado y tu pedido.",
      sections: [
        {
          heading: "Respuesta",
          body: "Responderemos en un plazo razonable según la normativa aplicable y el tipo de reclamo.",
        },
      ],
      updated: "Última actualización: agosto 2026.",
    },
  },
  form: {
    name: "Nombre",
    email: "Correo",
    school: "Colegio",
    phone: "Teléfono (opcional)",
    need: "Cuéntanos sobre tu colegio",
    needPlaceholder: "Tamaño aproximado, puerta, qué quieres mejorar…",
    sending: "Enviando…",
    errors: {
      name: "Ingresa tu nombre.",
      email: "Ingresa tu correo.",
      emailInvalid: "Ingresa un correo válido.",
      school: "Ingresa el nombre del colegio.",
      need: "Cuéntanos un poco más.",
      generic: "Hubo un problema. Escríbenos por WhatsApp al 949 261 503.",
    },
    success: {
      title: "Solicitud registrada",
      body: "Recibimos tu solicitud de prueba gratuita. Te responderemos con claridad sobre el siguiente paso.",
      another: "Enviar otra solicitud",
      openEmail: "Abrir en tu correo",
    },
  },
  footer: {
    tagline: "Plataforma de gestión escolar. Una marca de RYJEC.",
    product: "Producto",
    company: "Empresa",
    legal: "Legal",
    privacy: "Privacidad",
    terms: "Términos",
    cookies: "Cookies",
    claims: "Reclamaciones",
    rights: "Todos los derechos reservados.",
  },
  whatsappFloat: {
    label: "Solicitar prueba gratuita por WhatsApp",
    message: "Hola AsisAcademy, quiero solicitar la prueba gratuita de 30 días para mi colegio.",
  },
};

export type Dict = typeof es;
