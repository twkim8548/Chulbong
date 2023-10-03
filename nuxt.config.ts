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
            htmlAttrs: {
                lang: 'ko'
            },
            viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
            script: [
                {
                    src: `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&libraries=services&appkey=${process.env.NUXT_KAKAO_APP_KEY}`
                },
            ],
            link: [
                {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "icon_logo.png"
                }
            ],
            meta: [
                {
                    name: 'theme-color',
                    content: '#1F41BB'
                }
            ]
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
            short_name: '봉철아 근육먹자',
            description: '우리동네 철봉찾기 프로젝트',
            icons: [
                {
                    "src": "windows11/SmallTile.scale-100.png",
                    "sizes": "71x71",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/SmallTile.scale-125.png",
                    "sizes": "89x89",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/SmallTile.scale-150.png",
                    "sizes": "107x107",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/SmallTile.scale-200.png",
                    "sizes": "142x142",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/SmallTile.scale-400.png",
                    "sizes": "284x284",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square150x150Logo.scale-100.png",
                    "sizes": "150x150",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square150x150Logo.scale-125.png",
                    "sizes": "188x188",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square150x150Logo.scale-150.png",
                    "sizes": "225x225",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square150x150Logo.scale-200.png",
                    "sizes": "300x300",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square150x150Logo.scale-400.png",
                    "sizes": "600x600",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Wide310x150Logo.scale-100.png",
                    "sizes": "310x150",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Wide310x150Logo.scale-125.png",
                    "sizes": "388x188",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Wide310x150Logo.scale-150.png",
                    "sizes": "465x225",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Wide310x150Logo.scale-200.png",
                    "sizes": "620x300",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Wide310x150Logo.scale-400.png",
                    "sizes": "1240x600",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/LargeTile.scale-100.png",
                    "sizes": "310x310",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/LargeTile.scale-125.png",
                    "sizes": "388x388",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/LargeTile.scale-150.png",
                    "sizes": "465x465",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/LargeTile.scale-200.png",
                    "sizes": "620x620",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/LargeTile.scale-400.png",
                    "sizes": "1240x1240",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.scale-100.png",
                    "sizes": "44x44",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.scale-125.png",
                    "sizes": "55x55",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.scale-150.png",
                    "sizes": "66x66",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.scale-200.png",
                    "sizes": "88x88",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.scale-400.png",
                    "sizes": "176x176",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/StoreLogo.scale-100.png",
                    "sizes": "50x50",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/StoreLogo.scale-125.png",
                    "sizes": "63x63",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/StoreLogo.scale-150.png",
                    "sizes": "75x75",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/StoreLogo.scale-200.png",
                    "sizes": "100x100",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/StoreLogo.scale-400.png",
                    "sizes": "200x200",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/SplashScreen.scale-100.png",
                    "sizes": "620x300",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/SplashScreen.scale-125.png",
                    "sizes": "775x375",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/SplashScreen.scale-150.png",
                    "sizes": "930x450",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/SplashScreen.scale-200.png",
                    "sizes": "1240x600",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/SplashScreen.scale-400.png",
                    "sizes": "2480x1200",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.targetsize-16.png",
                    "sizes": "16x16",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.targetsize-20.png",
                    "sizes": "20x20",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.targetsize-24.png",
                    "sizes": "24x24",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.targetsize-30.png",
                    "sizes": "30x30",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.targetsize-32.png",
                    "sizes": "32x32",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.targetsize-36.png",
                    "sizes": "36x36",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.targetsize-40.png",
                    "sizes": "40x40",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.targetsize-44.png",
                    "sizes": "44x44",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.targetsize-48.png",
                    "sizes": "48x48",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.targetsize-60.png",
                    "sizes": "60x60",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.targetsize-64.png",
                    "sizes": "64x64",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.targetsize-72.png",
                    "sizes": "72x72",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.targetsize-80.png",
                    "sizes": "80x80",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.targetsize-96.png",
                    "sizes": "96x96",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.targetsize-256.png",
                    "sizes": "256x256",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
                    "sizes": "16x16",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
                    "sizes": "20x20",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
                    "sizes": "24x24",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
                    "sizes": "30x30",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
                    "sizes": "32x32",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
                    "sizes": "36x36",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
                    "sizes": "40x40",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
                    "sizes": "44x44",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
                    "sizes": "48x48",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
                    "sizes": "60x60",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
                    "sizes": "64x64",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
                    "sizes": "72x72",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
                    "sizes": "80x80",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
                    "sizes": "96x96",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
                    "sizes": "256x256",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
                    "sizes": "16x16",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
                    "sizes": "20x20",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
                    "sizes": "24x24",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
                    "sizes": "30x30",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
                    "sizes": "32x32",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
                    "sizes": "36x36",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
                    "sizes": "40x40",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
                    "sizes": "44x44",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
                    "sizes": "48x48",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
                    "sizes": "60x60",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
                    "sizes": "64x64",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
                    "sizes": "72x72",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
                    "sizes": "80x80",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
                    "sizes": "96x96",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
                    "sizes": "256x256",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "android/android-launchericon-512-512.png",
                    "sizes": "512x512",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "android/android-launchericon-192-192.png",
                    "sizes": "192x192",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "android/android-launchericon-144-144.png",
                    "sizes": "144x144",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "android/android-launchericon-96-96.png",
                    "sizes": "96x96",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "android/android-launchericon-72-72.png",
                    "sizes": "72x72",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "android/android-launchericon-48-48.png",
                    "sizes": "48x48",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "ios/16.png",
                    "sizes": "16x16",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "ios/20.png",
                    "sizes": "20x20",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "ios/29.png",
                    "sizes": "29x29",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "ios/32.png",
                    "sizes": "32x32",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "ios/40.png",
                    "sizes": "40x40",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "ios/50.png",
                    "sizes": "50x50",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "ios/57.png",
                    "sizes": "57x57",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "ios/58.png",
                    "sizes": "58x58",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "ios/60.png",
                    "sizes": "60x60",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "ios/64.png",
                    "sizes": "64x64",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "ios/72.png",
                    "sizes": "72x72",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "ios/76.png",
                    "sizes": "76x76",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "ios/80.png",
                    "sizes": "80x80",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "ios/87.png",
                    "sizes": "87x87",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "ios/100.png",
                    "sizes": "100x100",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "ios/114.png",
                    "sizes": "114x114",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "ios/120.png",
                    "sizes": "120x120",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "ios/128.png",
                    "sizes": "128x128",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "ios/144.png",
                    "sizes": "144x144",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "ios/152.png",
                    "sizes": "152x152",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "ios/167.png",
                    "sizes": "167x167",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "ios/180.png",
                    "sizes": "180x180",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "ios/192.png",
                    "sizes": "192x192",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "ios/256.png",
                    "sizes": "256x256",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "ios/512.png",
                    "sizes": "512x512",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    "src": "ios/1024.png",
                    "sizes": "1024x1024",
                    type: "image/png",
                    purpose: "any maskable",
                }
            ],
            background_color: "#FFFFFF",
            theme_color: "#1F41BB",
            display: "standalone",
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
