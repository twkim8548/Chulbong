<script setup lang="ts">
import IconLogo from "assets/icons/iconLogo.vue";
import {useChulbongStore} from "~/stores/chulbong";
import DetailChulbongModal from "~/components/modals/detailChulbongModal.vue";
import {Chulbong} from "~/types/chulbong";

const chulbongStore = useChulbongStore()
const chulbongs = computed(() => chulbongStore.chulbongs);
const mapView = ref();
const isShowDetailChulbongModal = ref(false);

let markers: any[] = [];
let selectedChulbongId: string = "";
let map: any = null;

chulbongStore.selectChulbongs().then(res => {
    setMarkers();
});

const initMap = () => {
    let lat = 37.545409;
    let lng = 126.991511;

    const options = {
        center: new kakao.maps.LatLng(lat, lng),
        level: 5
    };
    map = new kakao.maps.Map(mapView.value, options);
    moveCurrentPosition();
    setMarkers();
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

const setMarkers = () => {
    if (chulbongs.value?.length <= 0) {
        return;
    }
    markers.forEach(marker => marker.setMap(null));
    markers = [];

    chulbongs.value.forEach(chulbong => {
        const imageSrc = '_nuxt/assets/icons/icon_pin.svg',
            imageSize = new kakao.maps.Size(50, 50),
            imageOption = {offset: new kakao.maps.Point(0, 50)};

        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
            markerPosition = new kakao.maps.LatLng(chulbong.lat, chulbong.lng); // 마커가 표시될 위치입니다

        const marker = new kakao.maps.Marker({
            position: markerPosition,
            image: markerImage,
        });
        marker.id = chulbong.id;
        console.log(marker.id);
        markers.push(marker);
        marker.setMap(map);
        console.log(markers)
        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'click', function () {
            // 마커 위에 인포윈도우를 표시합니다
            showDatailChulbongModal(chulbong);
        });
    })


    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    // geocoder.addressSearch(
    //     "제주특별자치도 제주시 첨단로 242",
    //     function (result, status) {
    //         console.log(result)
    //         // 정상적으로 검색이 완료됐으면
    //
    //         if (status === kakao.maps.services.Status.OK) {
    //             var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
    //
    //             // 결과값으로 받은 위치를 마커로 표시합니다
    //             var marker = new kakao.maps.Marker({
    //                 map: map,
    //                 position: coords,
    //             });
    //
    //             // 인포윈도우로 장소에 대한 설명을 표시합니다
    //             var infowindow = new kakao.maps.InfoWindow({
    //                 content:
    //                     '<div style="width:150px;text-align:center;padding:6px 0;">Kakao</div>',
    //             });
    //             infowindow.open(map, marker);
    //
    //             // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
    //             // map.setCenter(coords);
    //         }
    //     }
    // );
}

const showDatailChulbongModal = (chulbong: Chulbong) => {
    selectedChulbongId = chulbong.id
    isShowDetailChulbongModal.value = true;
}

const closeDeatilChulbongModal = () => {
    selectedChulbongId = "";
    isShowDetailChulbongModal.value = false;
}

const checkChulbong = (chulbongId: string) => {
    console.log(chulbongs.value.find(it => it.id === chulbongId))
    const chulbong = chulbongs.value.find(it => it.id === chulbongId)
    if (chulbong) {
        chulbong!.reportCount += 1
        if (chulbong!.reportCount >= 3) {
            const marker = markers.find(marker => marker.id === chulbongId);
            marker.setMap(null);
            markers = markers.filter((it: any) => it !== marker);
            markers.splice(markers.findIndex(it => it.id === marker.id), 1);
        }
    }
    closeDeatilChulbongModal();
}

onMounted(() => {
    kakao.maps.load(initMap)
})
</script>

<template>
    <div>
        <div class="w-full h-full z-0" ref="mapView"/>
        <icon-logo class="absolute top-[16px] left-[16px] cursor-pointer w-[71px]"
                   @click="$router.push({name: 'chulbong'})"/>
        <div class="absolute bottom-[18px] right-[17px] flex flex-col items-end gap-[15px]">
            <img src="~/assets/icons/icon_help.svg" alt="current" class="w-[41px] h-[41px] drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)] cursor-pointer"/>
            <img src="~/assets/icons/icon_current.svg" alt="current" class="w-[41px] h-[41px] drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)] cursor-pointer"
                @click="moveCurrentPosition"/>
            <img src="~/assets/icons/icon_plus.svg" alt="current" class="w-[71px] h-[71px] drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)] cursor-pointer"/>
        </div>
        <detail-chulbong-modal
            :chulbong-id="selectedChulbongId"
            v-if="isShowDetailChulbongModal"
            @close="closeDeatilChulbongModal"
            @report="checkChulbong"/>
    </div>
</template>

<style scoped>

</style>