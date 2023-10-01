// https://nuxt.com/docs/api/configuration/nuxt-config
import {fileURLToPath} from "url";

export default defineNuxtConfig({
    devtools: {
        enabled: true
    },
    css: ['assets/css/tailwind.css'],
    alias: {
        "@": "/<rootDir>",
        "images": fileURLToPath(new URL('./assets/images', import.meta.url)),
        "icons": fileURLToPath(new URL('./assets/icons', import.meta.url)),
    },
    runtimeConfig: {
        public: {
            firebaseApiKey: process.env.NUXT_FIREBASE_API_KEY,
            firebaseAuthDomain: process.env.NUXT_FIREBASE_AUTH_DOMAIN,
            firebaseProjectId: process.env.NUXT_FIREBASE_PROJECT_ID,
            firebaseStorageBucket: process.env.NUXT_FIREBASE_STORAGE_BUCKET,
            firebaseMessagingSenderId: process.env.NUXT_FIREBASE_MESSAGING_SENDER_ID,
            firebaseAppId: process.env.NUXT_FIREBASE_APP_ID,
            firebaseMeasurementId: process.env.NUXT_FIREBASE_MEASUREMENT_ID,
            kakaoAppkey: process.env.NUXT_KAKAO_APP_KEY
        }
    },
    app: {
        head: {
            viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
            script: [
                {
                    src: `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&libraries=services&appkey=${process.env.NUXT_KAKAO_APP_KEY}`
                },
            ],
        },
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@vite-pwa/nuxt',
    ],
    pwa: {
        manifest: {
            name: '봉철아 근육먹자',
            short_name: '봉철',
            description: '우리동네 철봉찾기 프로젝트',
            icons: [
                {
                    src: "icons/icon_logo.svg",
                    sizes: "142x64",
                    type: "image/svg"
                }
            ],
        },
        workbox: {
            navigateFallback: "/",
        },
        devOptions: {
            enabled: true,
            type: 'module',
        }
    }
})
