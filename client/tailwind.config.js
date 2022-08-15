/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundColor: {
                "main-bg": "#F5F5F5",
                "main-dark-bg": "#424B54",
                "secondary-dark-bg": "#33373E",
                "light-gray": "#F7F7F7",
                "half-transparent": "rgba(0, 0, 0, 0.5)",
            },
        },
    },
    plugins: [],
};
