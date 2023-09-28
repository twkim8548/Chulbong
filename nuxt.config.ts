// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true
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
            script: [{
                src: `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.NUXT_KAKAO_APP_KEY}`
            }],
        },
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ],
})
