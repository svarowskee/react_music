const { nextui } = require("@nextui-org/theme");

module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/components/(autocomplete|avatar|badge|breadcrumbs|button|card|checkbox|chip|date-input|date-picker|divider|dropdown|image|input|link|listbox|menu|modal|navbar|pagination|popover|progress|select|skeleton|slider|spinner|toggle|table|tabs|user|ripple|scroll-shadow|calendar|spacer).js"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "dark",
      defaultExtendTheme: "dark",
      themes: {
        dark: {
          colors: {
            background: "#0a1222",
            primary: {
              DEFAULT: "#0a7557",
              foreground: "#ffffff"
            },
            secondary: {
              DEFAULT: "#0a75574d",
              foreground: "#ffffff"
            }
          },
        },
      },
    })
  ],
};