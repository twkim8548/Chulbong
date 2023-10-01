<script setup lang="ts">
import {preventScroll} from "~/composables/useScroll";

const emit = defineEmits(['close']);

preventScroll();
</script>

<template>
    <div class="fixed top-0 left-0 right-0 bottom-0 bg-[#00000050] w-screen h-screen z-[20] px-[10px]"
         @click="emit('close')">
        <div
            class="absolute top-0 left-0 right-0 bottom-0 m-auto bg-white w-fit rounded-[20px] h-fit flex flex-col max-h-[calc(100%-25px)] shadow-[0_0_15px_2px_rgba(0,0,0,0.25)]"
            @click.stop=""
        >
            <slot name="body"/>
        </div>
    </div>
</template>