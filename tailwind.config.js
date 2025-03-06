import forms from "@tailwindcss/forms";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
        "./resources/js/**/*.tsx"
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px"
            }
        },
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                wml: ["Kaushan Script", "cursive"]
            },
            colors: {
                primary: {
                    DEFAULT: "var(--primary)",
                    dark: "var(--primary-dark)",
                    content: "var(--primary-content)"
                },
                secondary: {
                    DEFAULT: "var(--secondary)",
                    dark: "var(--secondary-dark)",
                    content: "var(--secondary-content)"
                },
                success: {
                    DEFAULT: "var(--success)",
                    dark: "var(--success-dark)",
                    content: "var(--success-content)"
                },
                warning: {
                    DEFAULT: "var(--warning)",
                    dark: "var(--warning-dark)",
                    content: "var(--warning-content)"
                },
                error: {
                    DEFAULT: "var(--error)",
                    dark: "var(--error-dark)",
                    content: "var(--error-content)"
                },
                danger: {
                    DEFAULT: "var(--danger)",
                    dark: "var(--danger-dark)",
                    content: "var(--danger-content)"
                }
            }
        }
    },
    plugins: [forms]
};
