import {getDownloadURL, uploadBytes, ref as storageRef} from "@firebase/storage";

export const useStorage = ()=> {
    const imageUrls = ref<string[]>([]);
    const uploadStorage = async (image: any) => {
        const {$firebase} = useNuxtApp();
        const imageRef = storageRef($firebase.storage, image.name)

        await uploadBytes(imageRef, image.file).then(async () => {
            await getDownloadURL(storageRef($firebase.storage, image.name)).then(async (url) => {
                imageUrls.value.push(url)
            })
        })
        return imageUrls.value;
    }

    return {
        uploadStorage,
    };
};
