import {defineStore} from "pinia";

export const useLoadingStore = defineStore('loading', () => {
    const isShowLoading = ref(false);
    const showLoading = () => {
        isShowLoading.value = true;
    }
    const hideLoading = () => {
        isShowLoading.value = false;
    }

    return {
        isShowLoading,
        showLoading,
        hideLoading,
    }
})
