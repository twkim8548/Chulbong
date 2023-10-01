<script setup lang="ts">
import Loading from "~/components/common/loading.vue";
import {useLoadingStore} from "~/stores/loading";

const mainDiv = ref();
let vh = 0;

const isShowLoading = computed(() => useLoadingStore().isShowLoading);

onMounted(() => {
    vh = window.innerHeight * 0.01;
    mainDiv.value.style.setProperty('--vh', `${vh}px`);
    console.log(mainDiv.value)
});
</script>

<template>
    <div class="min-w-screen w-screen" ref="mainDiv" style="min-height: calc(var(--vh, 1vh) * 100); height: calc(var(--vh, 1vh) * 100)">
        <NuxtPage class="w-full h-full relative"/>
        <loading v-if="isShowLoading"/>
    </div>
</template>
