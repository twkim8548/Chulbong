import {defineStore} from "pinia";
import {Chulbong} from "~/types/chulbong";
import {collection, doc, query, where} from "@firebase/firestore";
import {useNuxtApp} from "#app";
import {Comment} from "~/types/comment";

export const useChulbongStore = defineStore('chulbong', () => {

    const chulbongs = ref<Chulbong[]>([]);
    const chulbong = ref<Chulbong>();
    const comments = ref<Comment[]>([]);
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
        console.log(chulbongs.value)
    }


    const selectChulbongComments = async (chulbongId: string) => {
        comments.value = await useFirestore().selectFirestoreData(collection($firebase.firestore, 'chulbong', chulbongId, 'comments')) as Comment[]
    }

    const updateChulbong = async (chulbongId: string, updateData: any) => {
        await useFirestore().updateFirebaseData(doc($firebase.firestore, 'chulbong', chulbongId), updateData)
    }

    return {
        chulbongs,
        chulbong,
        comments,
        selectChulbongs,
        getChulbong,
        selectChulbongComments,
        updateChulbong,
        initChulbongs,
    }
})
