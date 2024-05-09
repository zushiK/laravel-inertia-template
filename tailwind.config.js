import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    DEFAULT: "var(--primary)",
                    dark: "var(--primary-dark)",
                    active: "var(--primary-active)",
                },
                secondary: {
                    DEFAULT: "var(--secondary)",
                    dark: "var(--secondary-dark)",
                    active: "var(--secondary-active)",
                },
                success: {
                    DEFAULT: "var(--success)",
                    dark: "var(--success-dark)",
                    active: "var(--success-active)",
                },
                warning: {
                    DEFAULT: "var(--warning)",
                    dark: "var(--warning-dark)",
                    active: "var(--warning-active)",
                },
                error: {
                    DEFAULT: "var(--error)",
                    dark: "var(--error-dark)",
                    active: "var(--error-active)",
                },
                danger: {
                    DEFAULT: "var(--danger)",
                    dark: "var(--danger-dark)",
                    active: "var(--danger-active)",
                },
            },
        },
    },

    plugins: [forms],
};
