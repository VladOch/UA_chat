<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-6 center">
    <img src="../assets/the-road-815297_1920.jpg" alt="bg-img">
      <router-view></router-view>
  </q-layout>
</template>
<script>

export default {
    data() {
      return {
        
      }
    },
}
</script>
<style>
  [alt="bg-img"] {
    position: absolute;
    top: 0;
    left:0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

</style>