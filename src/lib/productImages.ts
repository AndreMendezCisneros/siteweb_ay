export const productScreens = [
  {
    src: "/images/page_inicio.png",
    key: "inicio",
  },
  {
    src: "/images/page_asistencia.png",
    key: "asistencia",
  },
  {
    src: "/images/page_tutor.png",
    key: "tutor",
  },
  {
    src: "/images/page_incidencia.png",
    key: "incidencia",
  },
  {
    src: "/images/page_estudiantes.png",
    key: "estudiantes",
  },
  {
    src: "/images/page_catalogo.png",
    key: "catalogo",
  },
  {
    src: "/images/page_reportes.png",
    key: "reportes",
  },
  {
    src: "/images/page_administrador.png",
    key: "administrador",
  },
  {
    src: "/images/page_portal_padres.png",
    key: "portal",
  },
] as const;

export type ProductScreenKey = (typeof productScreens)[number]["key"];
