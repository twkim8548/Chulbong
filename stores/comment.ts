import {defineStore} from "pinia";
import {collection, orderBy, query, Timestamp} from "@firebase/firestore";
import {useNuxtApp} from "#app";
import {Comment} from "~/types/comment";

export const useCommentStore = defineStore('comment', () => {

    const {$firebase} = useNuxtApp();
    const comments = ref<Comment[]>([]);

    const selectChulbongComments = async (chulbongId: string) => {
        comments.value = await useFirestore().selectFirestoreData(query(collection($firebase.firestore, 'chulbong', chulbongId, 'comments'), orderBy('createdAt', 'desc'))) as Comment[]
    }

    const insertComment = async (chulbongId: string, insertData: any) => {
        return await useFirestore().insertFirebaseData(collection($firebase.firestore, 'chulbong', chulbongId, 'comments'), insertData)
            .then(res => {
                comments.value.unshift({
                    id: res.id,
                    content: insertData.content,
                    createdAt: Timestamp.fromDate(insertData.createdAt),
                });
                return res;
            });
    }

    return {
        comments,
        selectChulbongComments,
        insertComment,
    }
})
