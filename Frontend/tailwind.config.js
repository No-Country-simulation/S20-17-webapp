/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            borderRadius: {
                "4xl": "2rem",
                "6xl": "3rem",
            },
            backgroundPosition: {
                left: "0% 50%",
                right: "100% 50%",
            },
            animation: {
                "gradient-flow": "gradient-flow 1.5s ease forwards",
            },
            keyframes: {
                "gradient-flow": {
                    "0%": { backgroundPosition: "0% 50%" },
                    "100%": { backgroundPosition: "100% 50%" },
                },
            },
            backgroundSize: {
                "200%": "200%",
            },
        },
    },
    plugins: [],
}
