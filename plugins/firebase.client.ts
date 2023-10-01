import {initializeApp} from "firebase/app";
import {getAnalytics} from "@firebase/analytics";
import {getFirestore} from "@firebase/firestore";

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: config.public.firebaseApiKey,
        authDomain: config.public.firebaseAuthDomain,
        projectId: config.public.firebaseProjectId,
        storageBucket: config.public.firebaseStorageBucket,
        messagingSenderId: config.public.firebaseMessagingSenderId,
        appId: config.public.firebaseAppId,
        measurementId: config.public.firebaseMeasurementId,
    };

    const app = initializeApp(firebaseConfig);

    const analytics = getAnalytics(app);
    const firestore = getFirestore(app);

    return {
        provide: {
            firebase: {
                firestore,
                analytics
            },
        }
    }
});