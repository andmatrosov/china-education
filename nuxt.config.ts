// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@pinia/nuxt'],
    css: ["@/app/normalize.min.css","@/app/global.css", '@/app/fonts.css'],

    imports: {
        dirs: [
            "shared/composables",
            "shared/utils",
            "app/stores"
            // You can specify here any folder from which you want to auto-import
        ],
    },

    dir: {
        pages: "routes",
    },

    compatibilityDate: "2024-12-15",
})