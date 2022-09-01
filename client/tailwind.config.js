/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundColor: {
                "main-bg": "#f9fafc",
                "secondary-bg": "#fefefe",
                "green-bg": "#c1f497",
                "light-gray": "#F7F7F7",
                "half-transparent": "rgba(0, 0, 0, 0.5)",
                "secondary-button": "#e54b4b",
                "navbar-bg": "#fefefe",
            },

            colors: {
                "green-logo": "#62a72d",
                "green-text": "#5c813d",
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
