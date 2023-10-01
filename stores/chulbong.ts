import {defineStore} from "pinia";
import {Chulbong} from "~/types/chulbong";
import {collection, doc, query, where} from "@firebase/firestore";
import {useNuxtApp} from "#app";

export const useChulbongStore = defineStore('chulbong', () => {

    const chulbongs = ref<Chulbong[]>([]);
    const chulbong = ref<Chulbong>();
    const {$firebase} = useNuxtApp();

    const selectChulbongs = async () => {
        chulbongs.value = await useFirestore().selectFirestoreData(query(collection($firebase.firestore, 'chulbong'), where("reportCount", "<", 3))) as Chulbong[]
        return chulbongs.value;
    }

    const getChulbong = async (chulbongId: string) => {
        chulbong.value = await useFirestore().getFirebaseData(doc($firebase.firestore, 'chulbong', chulbongId)) as Chulbong;
        chulbong.value.id = chulbongId;
    }

    const initChulbongs = () => {
        chulbongs.value = chulbongs.value.filter(chulbong => {
            return chulbong.reportCount < 3
        })
    }


    const updateChulbong = async (chulbongId: string, updateData: any) => {
        return await useFirestore().updateFirebaseData(doc($firebase.firestore, 'chulbong', chulbongId), updateData)
    }

    const insertChulbong = async (insertData: any) => {
        return await useFirestore().insertFirebaseData(collection($firebase.firestore, 'chulbong'), insertData)
    }

    return {
        chulbongs,
        chulbong,
        selectChulbongs,
        getChulbong,
        updateChulbong,
        initChulbongs,
        insertChulbong,
    }
})
