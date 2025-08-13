/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                bgWhite: '#ebeff2',
            },
            fontFamily: {
                Montserrat: ["Montserrat", "sans-serif"],
                Opensans: ["Open Sans", "sans-serif"],
            },
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
            },
            boxShadow: {
                card: '0px 4px 8px 0px rgba(0, 0, 0, 0.2)',
            }
        },
    },
    plugins: [],
};