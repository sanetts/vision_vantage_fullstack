/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f2f5f7",
          "200": "#f3f4f7",
        },
        white: "#fff",
        darkgray: {
          "100": "#a0a8b1",
          "200": "#959fa8",
        },
        slategray: "#5d7079",
        darkslategray: {
          "100": "#4a5860",
          "200": "#172c41",
        },
        mediumseagreen: "#2dcc70",
        seagreen: {
          "100": "#007b34",
          "200": "#007330",
        },
        gainsboro: {
          "100": "#e2e6e8",
          "200": "#e2e2e2",
        },
        silver: "#c4c4c4",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
      },
      borderRadius: {
        "8xs": "5px",
        "81xl": "100px",
        "981xl": "1000px",
      },
    },
    fontSize: {
      "5xl": "24px",
      lgi: "19px",
      lg: "18px",
      smi: "13px",
      mini: "15px",
      xl: "20px",
      base: "16px",
      "21xl": "40px",
      "13xl": "32px",
      "14xl": "33px",
      sm: "14px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};