<script setup lang="ts">
import DefaultModal from "~/components/modals/defaultModal.vue";
import {useChulbongStore} from "~/stores/chulbong";
import {PropType} from "@vue/runtime-core";
import {Chulbong} from "~/types/chulbong";

const emit = defineEmits(['close', 'report']);
const props = defineProps({
    chulbong: {
        required: true,
        type: Object as PropType<Chulbong>
    }
});

const router = useRouter();

const chulbongStore = useChulbongStore();

const report = () => {
    chulbongStore.updateChulbong(props.chulbong.id, {reportCount: props.chulbong?.reportCount + 1})
        .then(() => {
            alert('신고하였습니다.');
            chulbongStore.initChulbongs();
            emit('report');
        }).catch(err => {
            console.error(err)
        })
}
</script>

<template>
    <default-modal @close="emit('close')">
        <template v-slot:body>
            <div class="flex flex-col gap-[25px] px-[40px] py-[19px] items-center w-[300px]">
                <p class="text-primary text-[15px] font-[800]">
                    신고하기
                </p>
                <p class="text-center text-black font-[500] text-[15px]">
                    총 3번의 신고가 누적되면 <br>
                    해당 게시물은 삭제처리 됩니다.<br>
                    <br>
                    신고하시겠습니까?
                </p>
                <div class="flex items-center w-full text-center text-[15px] font-[700]">
                    <p class="cursor-pointer flex-1 text-gray3" @click="emit('close')">
                        취소
                    </p>
                    <p class="cursor-pointer flex-1 text-primary" @click="report">
                        신고하기
                    </p>
                </div>
            </div>
        </template>
    </default-modal>
</template>