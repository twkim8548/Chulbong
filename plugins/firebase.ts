import {initializeApp} from "firebase/app";
import {getAnalytics} from "@firebase/analytics";
import {getFirestore} from "@firebase/firestore";
import {getStorage} from "@firebase/storage";

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

    const firestore = getFirestore(app);
    const storage = getStorage(app);
    return {
        provide: {
            firebase: {
                firestore,
                storage
            }
        }
    }
});