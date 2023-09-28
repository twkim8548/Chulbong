import {collection, DocumentData, getDocs} from "@firebase/firestore";
import {useNuxtApp} from "#app";

export const useFirestore = ()=> {

    const getFirestoreData = async (collectionName: string) : Promise<(DocumentData & { id: string })[] | []> => {
        const {firestore} = useNuxtApp();

        let result: (DocumentData & { id: string })[] = [];

        try {
            if (!collectionName) {
                throw new Error('Need CollectionName');
            }

            const querySnapshot = await getDocs(collection(firestore, collectionName));
            if (!querySnapshot.empty) {
                result = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
            }
        } catch (err) {
            console.error(err);
            throw new Error('Error get data');
        }

        return result;
    }


    return {
        getFirestoreData
    };
};
