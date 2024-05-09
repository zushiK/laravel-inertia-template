import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/vanilla/common.js", "resources/scss/app.scss"],
            refresh: true,
        }),
        react(),
    ],
});
