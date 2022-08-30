/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundColor: {
                "main-bg": "#F5F5F5",
                "secondary-bg": "#424b54",
                "light-gray": "#F7F7F7",
                "half-transparent": "rgba(0, 0, 0, 0.5)",
                "secondary-button": "#e54b4b",
            },
        },
    },
    plugins: [],
};
