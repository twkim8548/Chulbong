<script setup lang="ts">
import {getDateFormat} from "~/composables/useDate";
import {useChulbongStore} from "~/stores/chulbong";
import {useLoadingStore} from "~/stores/loading";

const route = useRoute();
const router = useRouter();

const locationText = ref("");
const description = ref("");
const imageInput = ref();
const imageFileUrl = ref();
let imageFile: any = null;

const getAddressText = () => {
    const geocoder = new kakao.maps.services.Geocoder();

    const coords = new kakao.maps.LatLng(route.query.lat, route.query.lng)
    geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), (result: any, status: any) => {
        if (status === kakao.maps.services.Status.OK) {
            for (let i = 0; i < result.length; i++) {
                if (result[i].region_type === 'H') {
                    locationText.value = result[i].address_name;
                    break;
                }
            }
        }
    });
}

const changeImageInput = (e) => {
    if (e.target?.files.length > 0) {

    }
    imageFile = e.target.files[0];
    imageFileUrl.value = URL.createObjectURL(imageFile);
}

const insertChulbong = async () => {
    if (description.value.length <= 0) {
        return;
    }
    const loadingStore = useLoadingStore();
    const storageStore = useStorage();

    loadingStore.showLoading();
    let images: string[] = [];
    if (imageFile) {
        images = await storageStore.uploadStorage({name: imageFile.name, file: imageFile});
    }
    await useChulbongStore().insertChulbong({
        lat: route.query.lat,
        lng: route.query.lng,
        locationText: locationText.value,
        reportCount: 0,
        createdAt: new Date(),
        description: description.value,
        images: images,
    }).then(() => {
        loadingStore.hideLoading();
        router.replace({name: 'index'});
    }).catch(err => {
        loadingStore.hideLoading();
        console.error(err);
        alert('오류가 발생하였습니다. 관리자에게 문의해주세요.');
    })
}

onMounted(() => {
    if (!route.query?.lat || !route.query?.lng) {
        alert('올바르지 않은 접근입니다.');
        return router.replace({name: "index"});
    }
    kakao.maps.load(getAddressText)
});
</script>

<template>
    <div class="flex flex-col gap-[20px]">
        <header
            class="flex w-full bg-white px-[16px] pt-[14px] pb-[10px] rounded-b-[20px]flex flex-col items-center gap-[12px]">
            <p class="text-[20px] font-[700] text-black w-fit">
                제보하기
            </p>
            <img src="~/assets/icons/icon_back.svg" alt="back" class="absolute top-[17px] left-[16px] cursor-pointer"
                 @click="$router.replace({name: 'chulbong-add-position', query: {lat: route.query.lat, lng: route.query.lng}})"/>
        </header>
        <main class="flex flex-col gap-[30px] px-[16px] max-w-[450px] self-center w-full pb-[30px]">
            <div class="flex flex-col gap-[7px]">
                <p class="text-gray3 text-[15px]">
                    철봉 위치
                </p>
                <p class="text-black text-[20px] font-[700]">
                    {{ locationText }}
                </p>
            </div>
            <div class="flex flex-col gap-[7px]">
                <p class="text-gray3 text-[15px]">
                    간략한 소개
                </p>
                <textarea maxlength="100"
                          class="text-black text-[15px] font-[500] resize-none h-[120px] px-[10px] py-[10px] border border-gray3 rounded-[20px]"
                          placeholder="간략한 소개를 작성해주세요. 함께 있는 운동기구의 종류나 평소 얼마나 많은 사람이 오는지 등, 모든 도움이 될 수 있다면 좋아요. (최대 100자)"
                          v-model="description"/>
            </div>
            <div class="flex flex-col gap-[7px]">
                <p class="text-gray3 text-[15px]">
                    사진
                </p>
                <input type="file" accept="image/*" hidden id="imageInput"
                       ref="imageInput"
                       @change="changeImageInput">
                <label for="imageInput"
                       v-if="!imageFileUrl"
                       class="h-[300px] border border-gray3 rounded-[20px] flex items-center justify-center text-[15px] font-[700] cursor-pointer">
                    사진 등록
                </label>
                <img v-else :src="imageFileUrl" alt="preview"
                     class="h-[300px] border border-gray3 rounded-[20px] object-contain cursor-pointer"
                     @click="imageInput.click()"/>
            </div>
            <div class="flex flex-col gap-[7px]">
                <p class="text-gray3 text-[15px]">
                    제보일자
                </p>
                <p class="text-black text-[20px] font-[700]">
                    {{ getDateFormat(new Date()) }}
                </p>
            </div>
            <p class="text-gray3 text-[15px]">
                - 3번 이상의 신고 접수 시, 제보는 자동으로 삭제됩니다.
            </p>
            <div class="font-[700] text-[20px] self-center"
                 :class="description.length > 0 ? 'text-primary cursor-pointer' : 'text-gray2 cursor-default'"
                 @click="insertChulbong">
                완료
            </div>
        </main>
    </div>
</template>