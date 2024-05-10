/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aliceblue: "#e3edf9",
        darkslateblue: {
          "100": "#253d90",
          "200": "#193288",
        },
        red: {
          "100": "#ff2626",
          "200": "#f50707",
          "300": "#ff0000",
          "400": "#ff0e0e",
        },
        white: "#fff",
        gray: {
          "100": "#232423",
          "200": "#121c3e",
          "300": "rgba(0, 0, 0, 0)",
          "400": "rgba(0, 0, 0, 0.6)",
          "500": "rgba(255, 255, 255, 0)",
          "600": "rgba(0, 0, 0, 0.7)",
          "700": "#918686",
          "800": "#777",
          "1000": "#242121",
          "1200": "#1d1d1d",
        },
        black: "#000",
        lightgray: "#c9d4e0",
        gold: "#ffc20e",
        darkgoldenrod: {
          "100": "#cc8f00",
          "200": "#ac8204",
        },
        forestgreen: {
          "100": "#66ad45",
          "200": "#3f861e",
        },
        royalblue: "#0074ff",
        darkgray: "#969696",
        midnightblue: "#0f2b90",
        darkslategray: "#494949",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#e0e3ec",
          "300": "#d9d9d9",
        },
        goldenrod: "#cfa308",
        dimgray: {
          "100": "#646464",
          "200": "#545559",
        },
        mediumblue: {
          "100": "#1242eb",
          "200": "#1b16ea",
        },
      },
      spacing: {},
      fontFamily: {
        "product-sans": "'Product Sans'",
        inherit: "inherit",
        inter: "Inter",
      },
      borderRadius: {
        "4xl": "23px",
        mini: "15px",
        "2xs": "11px",
        sm: "14px",
        "xl-5": "20.5px",
        "12xs": "1px",
        "6xs-5": "6.5px",
        smi: "13px",
        "4xs": "9px",
        "28xl": "47px",
        "6xs": "7px",
        "11xl": "30px",
        "3xs": "10px",
        "10xs": "3px",
      },
    },
    fontSize: {
      xl: "20px",
      "6xl": "25px",
      "51xl": "70px",
      "23xl": "42px",
      "37xl": "56px",
      "11xl": "30px",
      lg: "18px",
      "5xl": "24px",
      base: "16px",
      "5xs": "8px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      smi: "13px",
      "3xs": "10px",
      "2xs": "11px",
      sm: "14px",
      "21xl": "40px",
      lgi: "19px",
      mini: "15px",
      "33xl": "52px",
      "12xl": "31px",
      xs: "12px",
      "13xl": "32px",
      inherit: "inherit",
    },
    // screens: {
    //   sm: '640px', // add this for small screens
    //   md: '768px', // add this for medium screens
    //   lg: {
    //     max: '1200px',
    //   },
    //   // ... your other custom breakpoints
    // },
    screens: {
      mq1600: {
        raw: "screen and (max-width: 1600px)",
      },
      mq1575: {
        raw: "screen and (max-width: 1575px)",
      },
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      lg: {
        max: "1200px",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      md: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      sm: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
