/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "pitch-black": "#000000",
                "section-dark": "#050505",
                "neon-orange": "#FF4B1F",
                "warm-white": "#FFF7E6",
                "light-gray": "#E5E5E5",
                "muted-gray": "#9A9A9A",
            },
            boxShadow: {
                'neon': '0 0 20px rgba(255, 75, 31, 0.4)',
                'neon-strong': '0 0 40px rgba(255, 75, 31, 0.6)',
            }
        },
    },
    plugins: [],
}
