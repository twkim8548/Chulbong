<script setup lang="ts">
import DefaultModal from "~/components/modals/defaultModal.vue";
import {getDateFormat} from "~/composables/useDate";
import {useChulbongStore} from "~/stores/chulbong";
import IconClose from "icons/iconClose.vue";
import ReportModal from "~/components/modals/reportModal.vue";

const emit = defineEmits(['close', 'report']);
const props = defineProps({
    chulbongId: {
        required: true,
        type: String,
    }
});

const chulbongStore = useChulbongStore();

chulbongStore.getChulbong(props.chulbongId);
chulbongStore.selectChulbongComments(props.chulbongId);

const chulbong = computed(() => chulbongStore.chulbong);
const comments = computed(() => chulbongStore.comments);
const reDescription = computed(() => chulbong?.value?.description?.split("\\n"));

const newComment = ref("");
const isShowReportModal = ref(false);

const showReportModal = () => {
    isShowReportModal.value = true;
}

const closeReportModal = () => {
    isShowReportModal.value = false;
}

const report = () => {
    emit('report', props.chulbongId);
    isShowReportModal.value = false;
}

</script>

<template>
    <default-modal @close="emit('close')">
        <template v-slot:body>
            <div class="flex flex-col gap-[30px] overflow-auto scrollbar-hide p-[34px] w-[480px]">
                <div class="flex justify-between w-full items-center">
                    <icon-close
                        class="cursor-pointer p-[5px] w-[30px] h-[30px]"
                        @click="emit('close')"
                    />
                    <button class="cursor-pointer"
                            @click="showReportModal">
                        신고하기
                    </button>
                </div>
                <div class="flex flex-col gap-[7px]">
                    <p class="text-gray3 text-[15px]">
                        철봉 위치
                    </p>
                    <p class="text-black text-[20px] font-[700]">
                        {{ chulbong?.locationText }}
                    </p>
                </div>
                <div class="flex flex-col gap-[7px]">
                    <p class="text-gray3 text-[15px]">
                        간략한 설명
                    </p>
                    <p class="text-black text-[20px] font-[700]">
                        <template v-for="(c, index) in reDescription">
                            {{ c }} <br>
                        </template>
                    </p>
                </div>
                <div class="flex flex-col gap-[7px]">
                    <p class="text-gray3 text-[15px]">
                        사진
                    </p>
                    <img class="h-[271px] rounded-[20px] object-contain bg-gray" :src="chulbong?.images[0]"
                         alt="image"/>
                </div>
                <div class="flex flex-col gap-[7px]">
                    <p class="text-gray3 text-[15px]">
                        제보일자
                    </p>
                    <p class="text-black text-[20px] font-[700]">
                        {{ getDateFormat(chulbong?.createdAt?.toDate()) }}
                    </p>
                </div>
                <div class="flex flex-col gap-[30px]">
                    <div class="flex flex-col gap-[11px]">
                        <div class="flex gap-[5px] text-[15px] font-[500]">
                            <p class="text-gray3">
                                댓글
                            </p>
                            <p class="text-black">
                                {{ comments?.length ?? 0 }}
                            </p>
                        </div>
                        <div class="flex">
                            <input type="text" class="flex-1 border rounded-[10px] border-gray3 px-[10px] text-[15px]"
                                   v-model="newComment"
                                   placeholder="댓글을 입력해보세요"/>
                            <div class="px-[20px] py-[10px] curcor-pointer"
                                 :class="newComment.length > 0 ? 'text-black' : 'text-gray2'">
                                등록
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-[16px]">
                        <div class="flex flex-col gap-[5px]"
                             v-for="comment in comments" :key="comment.id">
                            <p class="text-black text-[15px] font-[700]">
                                {{ comment?.content }}
                            </p>
                            <p class="text-gray3 text-[10px] font-[300]">
                                {{ getDateFormat(comment?.createdAt.toDate()) }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <report-modal
                @close="closeReportModal"
                @report="report"
                v-if="isShowReportModal && chulbong"
                :chulbong="chulbong!"/>
        </template>
    </default-modal>
</template>