/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");


module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        home: {
          primary: "var(--color-primary)",
          primaryDark: "var(--color-primary-dark)",
          primaryDeep: "var(--color-primary-deep)",
          white: "var(--color-white)",
          secondary: "var(--color-secondary)",
          "secondary-75": "var(--color-secondary-transparent)",
          "secondary-30": "var(--color-secondary-transparent2)",
        }
      },
      fontFamily: {
        pop: ["var(--font-poppins)", ...fontFamily.sans],
        cat: ["var(--font-catamaran)", ...fontFamily.sans],
        rale: ["var(--font-raleway)", ...fontFamily.sans],
      },
      height: {
        "5p": "5%",
				"10v": "10vh",
				"15v": "15vh",
				"20v": "20vh",
				"30v": "30vh",
				"40v": "40vh",
				"50v": "50vh",
				"60v": "60vh",
				"70v": "70vh",
				"85v": "85vh",
				"90v": "90vh",
				"100v": "100vh",
			},
      backgroundImage: {
        'hero': "url('https://res.cloudinary.com/dahddvlgy/image/upload/v1683177506/taacodeep/website/images/pexels-salvatore-ventura-883757.jpg')",
        'menu': "radial-gradient(var(--color-secondary), var(--color-primary-dark))",
        'nav-home': "url(https://res.cloudinary.com/dahddvlgy/image/upload/v1683427493/taacodeep/website/images/rsz_1rsz_pexels-brett-sayles-4597280.jpg)"
      },
      backgroundSize: {
        hero: "150px, 150px",
      },
      transitionTimingFunction: {
        'menu-transition-one': 'cubic-bezier(0.86, 0, 0.07, 1)',
        'menu-transition-two': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
      },
      boxShadow: {
        'image-overlay-secondary': 'inset 0 0 0 2000px var(--color-secondary-transparent2)',
        'nav-hole': 'inset -8px -8px 12px rgba(100, 174, 249, 0.25), inset 8px 8px 12px rgba(1, 1, 24, 0.2);'
      },
      dropShadow: {
        'carved-heading': `0 1px 0 #ccc,
        0 2px 0 #c9c9c9,
        0 3px 0 #bbb,
        0 4px 0 #b9b9b9,
        0 5px 0 #aaa,
        0 6px 1px rgba(0,0,0,.1),
        0 0 5px rgba(0,0,0,.1),
        0 1px 3px rgba(0,0,0,.3),
        0 3px 5px rgba(0,0,0,.2),
        0 5px 10px rgba(0,0,0,.25),
        0 10px 10px rgba(0,0,0,.2),
        0 20px 20px rgba(0,0,0,.15)`
      }
    },
  },
  plugins: [
    plugin(function groupPeer({ addVariant }) {
      let pseudoVariants = [
        // ... Any other pseudo variants you want to support. 
        // See https://github.com/tailwindlabs/tailwindcss/blob/6729524185b48c9e25af62fc2372911d66e7d1f0/src/corePlugins.js#L78
        "checked",
      ].map((variant) =>
        Array.isArray(variant) ? variant : [variant, `&:${variant}`],
      );

      for (let [variantName, state] of pseudoVariants) {
        addVariant(`group-peer-${variantName}`, (ctx) => {
          let result = typeof state === "function" ? state(ctx) : state;
          return result.replace(/&(\S+)/, ":merge(.peer)$1 ~ .group &");
        });
      }
    }),
  ],
}