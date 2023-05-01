/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        colors: {
            primary: "rgb(var(--color-primary) / <alpha-value>)",
        },
        extend: {},
    },
    plugins: [],
};
