/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            borderRadius: {
                "4xl": "2rem",
                "6xl": "3rem",
            },
        },
    },
    plugins: [],
}
