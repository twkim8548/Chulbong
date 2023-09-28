<script setup lang="ts">
const map = ref();
onMounted(() => {
    kakao.maps.load(initMap)
    // initMap();
})

const initMap = () => {
    const options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
    };
    new kakao.maps.Map(map.value, options); //지도 생성 및 객체 리턴
}
</script>

<template>
    <div class="w-full h-full">
        <div id="map" class="w-full h-full" ref="map"/>
    </div>
</template>

<style scoped>

</style>