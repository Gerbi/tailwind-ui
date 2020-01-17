<template>
  <div id="app" class="font-sans">
    <!-- eslint-disable max-len -->
    <div class="absolute z-50 flex w-full justify-center mx-auto mt-4">
      <div class="flex bg-gray-800 text-white rounded-lg py-3 shadow-lg">
        <div class="mx-4">
          <router-link to="/">Home</router-link>
        </div>
        <div class="mx-4">
          <router-link to="/layout">Layout</router-link>
        </div>
        <div class="mx-4">
          <router-link to="/schedule">Schedule</router-link>
        </div>
        <div class="mx-4">
          <router-link to="/kod">Kod</router-link>
        </div>
        <div class="mx-4">
          <router-link to="/rnts">Rnts</router-link>
        </div>
        <div class="mx-4">
          <router-link to="/news">News</router-link>
        </div>
        <div class="mx-4">
          <router-link to="/pages">Pages</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  components: {
    // Layout,
  },
};
</script>
<style src="./assets/css/Tailwind.css"></style>
