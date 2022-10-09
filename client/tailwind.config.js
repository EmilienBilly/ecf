/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundColor: {
                "main-bg": "#2C3333",
                "secondary-bg": "#395B64",
                "button-bg": "#95A3A4",
                "light-gray": "#E7F6F2",
                "inactive-bg": "#BF4E30",
                "half-transparent": "rgba(0, 0, 0, 0.5)",
                "main-button": "#1A8E9E",
                "navbar-bg": "#2C3333",
            },

            colors: {
                "blue-logo": "#1A8E9E",
                "white-text": "#E7F6F2",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
