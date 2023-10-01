import {addDoc, DocumentData, getDoc, getDocs, updateDoc} from "@firebase/firestore";

export const useFirestore = ()=> {
    const selectFirestoreData = async (query: any) : Promise<(DocumentData)[] | []> => {
        let result: (DocumentData)[] = [];

        try {
            if (!query) {
                throw new Error('Need CollectionName');
            }

            const querySnapshot = await getDocs(query);
            if (!querySnapshot.empty) {
                result = querySnapshot.docs.map((doc: any) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
            }
        } catch (err) {
            console.error(err);
        }
        return result;
    }

    const getFirebaseData = async (doc: any) => {
        let result: any = {};

        try {
            if (!doc) {
                throw new Error('Need doc');
            }

            const docSnapshot = await getDoc(doc);
            if (docSnapshot.exists()) {
                result = docSnapshot.data()
            }
        } catch (err) {
            console.error(err);
        }
        return result;
    }

    const updateFirebaseData = async (doc: any, updateData: any) => {
        try {
            if (!doc) {
                throw new Error('Need doc');
            }

            return await updateDoc(doc, updateData);
        } catch (err) {
            console.error(err);
        }
    }

    const insertFirebaseData = async (doc: any, insertData: any) => {
        try {
            if (!doc) {
                throw new Error('Need doc');
            }

            return await addDoc(doc, insertData);
        } catch (err) {
            console.error(err);
        }
    }


    return {
        selectFirestoreData,
        getFirebaseData,
        updateFirebaseData,
        insertFirebaseData,
    };
};
