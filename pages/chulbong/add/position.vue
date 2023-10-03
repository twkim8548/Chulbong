<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const mapView = ref();
let map: any = null;
let currentLatLng = ref({
    lat: Number(route.query?.lat ?? "37.545409"),
    lng: Number(route.query?.lng ?? "126.991511"),
})


const initMap = () => {
    const options = {
        center: new kakao.maps.LatLng(route.query?.lat, route.query?.lng ?? 126.991511),
        level: 5
    };
    map = new kakao.maps.Map(mapView.value, options);

    kakao.maps.event.addListener(map, 'idle', function () {
        currentLatLng.value.lat = map.getCenter().getLat();
        currentLatLng.value.lng = map.getCenter().getLng();
    });
}

const moveCurrentPosition = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const moveLatLon = new kakao.maps.LatLng(lat, lng);
            map.setLevel(5);
            map.panTo(moveLatLon);
        });
    }
}

onMounted(() => {
    kakao.maps.load(initMap)
});

</script>

<template>
    <div>
        <div class="w-full h-full z-0" ref="mapView"/>
        <header
            class="absolute top-0 w-full bg-white px-[16px] pt-[14px] pb-[10px] rounded-b-[20px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex flex-col items-center gap-[12px]">
            <p class="text-[20px] font-[700] text-black">
                제보하기
            </p>
            <p class="text-[15px] font-[700] text-gray3">
                지도를 움직여 철봉이 있는 위치를<br class="hidden tablet:block" />
                가운데 핀이 향하도록 설정해주세요.
            </p>
            <img src="~/assets/icons/icon_back.svg" alt="back" class="absolute top-[17px] left-[16px] cursor-pointer"
                 @click="router.replace({name: 'chulbong', query: {lat: currentLatLng.lat, lng: currentLatLng.lng}})"/>
        </header>
        <img src="~/assets/icons/icon_pin.svg" alt="pin"
             class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"/>
        <div
            class="cursor-pointer px-[34px] py-[13px] text-[20px] font-[700] absolute bottom-[45px] left-[50%] translate-x-[-50%] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-white rounded-full text-primary"
            @click="router.push({name: 'chulbong-add-detail', query : {lat: currentLatLng.lat, lng: currentLatLng.lng}})">
            다음
        </div>
        <img src="~/assets/icons/icon_current.svg" alt="current"
             class="absolute bottom-[36px] right-[32px] drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)] cursor-pointer"
            @click="moveCurrentPosition"/>
    </div>
</template>