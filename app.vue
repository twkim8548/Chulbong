<script setup lang="ts">
import Loading from "~/components/common/loading.vue";
import {useLoadingStore} from "~/stores/loading";

let vh = 0;

const isShowLoading = computed(() => useLoadingStore().isShowLoading);

onMounted(() => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});
</script>

<template>
    <div class="min-w-screen min-h-screen w-screen h-screen">
        <NuxtPage class="w-full h-full relative"/>
        <loading v-if="isShowLoading"/>
    </div>
</template>
