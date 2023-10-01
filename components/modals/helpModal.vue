<script setup lang="ts">
import DefaultModal from "~/components/modals/defaultModal.vue";

const emit = defineEmits(['close']);

</script>

<template>
    <default-modal @close="emit('close')">
        <template v-slot:body>
            <div
                class="flex flex-col gap-[30px] overflow-auto scrollbar-hide p-[34px] w-[480px] tablet:w-full tablet:p-[24px]">
                <div class="flex justify-between w-full items-center">
                    <img
                        src="~/assets/icons/icon_close.svg"
                        class="cursor-pointer p-[5px] w-[30px] h-[30px]"
                        @click="emit('close')"
                        alt="close"
                    />
                </div>
                <div class="flex flex-col gap-[7px] self-center">
                    <p class="text-gray2 text-[15px] font-jalnan">
                        우리집앞 철봉찾기 프로젝트
                    </p>
                    <p class="text-primary text-[30px] font-jalnan text-center leading-[32px]">
                        봉철아~<br/>
                        근육먹자~
                    </p>
                </div>
                <div class="flex flex-col gap-[7px]">
                    <p class="text-gray3 text-[15px]">
                        봉철아~ 근육먹자~
                    </p>
                    <p class="text-black text-[20px] font-[700] ">
                        철봉이나 맨몸운동 할 수 있는 곳을 찾기 힘들어 불편하다는
                        이야기를 들어 철봉 위치 공유 플랫폼이 하나쯤
                        제대로 있었으면 해서 만들어 보았습니다.<br/>
                        <br/>
                        철봉이 어떻게 생겼다거나, 사람이 많이 온다
                        거나, 공원이 이쁘다던가, 뭐든 좋습니다.<br/>
                        <br/>
                        사진은 올려주면 좋을것 같지만 그 장소에 없을
                        수도 있을것 같아 필수로 두지 않았습니다.<br/>
                        <br/>
                        없는 장소들이 계속해서 남아있으면 플랫폼의 의미를 다하지 못할까 싶어 신고 기능을 만들었습니다.<br/>
                        신고가 3번 이상 누적된 장소는 보이지 않게 됩니다.<br/>
                        <br/>
                        우리 같이 공유하고 득근합시다.
                    </p>
                </div>
                <div class="flex flex-col gap-[7px]">
                    <p class="text-gray3 text-[15px]">
                        건의사항
                    </p>
                    <p class="text-black text-[20px] font-[700] ">
                        rlaxodnd95@gmail.com<br/>
                        <br/>
                        개발기간이 3일정도밖에 되지 않아 부족한게 많
                        습니다. 적극적인 피드백 환영합니다.<br/>
                        <br/>
                        시간되는대로 업데이트 해보겠습니다.<br/>
                    </p>
                </div>
                <p class="text-gray3 text-[15px] self-end">
                    개발자 김태웅
                </p>
            </div>
        </template>
    </default-modal>
</template>