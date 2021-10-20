export type Theme = typeof defaultTheme;
export const defaultTheme = {
  meta: {
    key: {
      bg: "#eaeaff",
      color: "#008ed0",
    },
    value: {
      bg: "transparent",
      color: "#484848",
    },
    title: {
      color: "#000",
      fontSize: "1.75rem",
      textDecoration: "none",
    },
  },

  bg: "#fff",
  color: "#333",
  font: "Fira Code, Courier, monospace",
  headline1: {
    bg: "#f0f0f0",
    color: "#3c3c3c",
    border: "1px solid #a7a7a7",
  },
  headline2: {
    bg: "#e5f4fb",
    color: "#143654",
    border: "1px solid #375670",
  },
  headline3: {
    bg: "#efffef",
    color: "#075424",
    border: "none",
  },
  headline4: {
    bg: "transparent",
    color: "#ea6301",
    border: "none",
  },
  src: {
    lang: {
      bg: "#e2e1d6",
      color: "#575556",
    },
    body: {
      bg: "#fffee1",
      color: "#061188",
    },
  },
  link: {
    color: "#0f6fb0",
    bg: "transparent",
    textDecoration: "#0f6fb0",
  },
  linkHover: {
    color: "#333334",
    bg: "#e6ecfe",
    textDecoration: "#257bb5",
  },
  selection: "#fbbc43",
  verbatim: {
    bg: "#f7fdff",
    color: "#1069c9",
    textDecoration: "transparent",
    border: "none",
  },
  verbatimHover: {
    bg: "#f7fdff",
    color: "#1069c9",
    textDecoration: "transparent",
    border: "none",
  },

  code: {
    color: "#075424",
    bg: "#ebf5eb",
  },

  table: {
    bg: "#ebffeb",
    color: "#166c19",
  },
  gutter: "#deeefe",
  modeLine: {
    bg: "#3560a6",
    border: "1px solid #244170",
    context: "#fff",
    modes: "#82cadb",
    hover: "#fef937",
    indicator: "#f6b539",
    indicatorBorder: "#58464b",
  },
  highlight: {
    border: "1px solid transparent",
  },
  highlightHover: {
    border: "1px solid #fc4b4f",
  },
};
