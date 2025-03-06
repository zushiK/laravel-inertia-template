import react from "@vitejs/plugin-react";
import laravel from "laravel-vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/vanilla/common.js",
                "resources/scss/app.scss",
                "resources/js/app.tsx"
            ],
            refresh: true
        }),
        react()
    ]
});
