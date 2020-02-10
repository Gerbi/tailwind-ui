<template>
  <!-- eslint-disable max-len -->
  <div class="bg-sbase h-screen antialiased leading-none">
    <div class="min-h-screen flex items-center justify-center">
      <div class="flex flex-col justify-around h-full">
        <div class="flex flex-col items-center justify-between text-center -mt-20">
          <div class="flex justify-center mb-4">
            <lottie-player
              autoplay
              loop
              mode="normal"
              src="https://assets9.lottiefiles.com/animated_stickers/lf_tgs_SMS4G7.json"
              style="width: 175px"
            >
            </lottie-player>
          </div>
          <h1 class="text-gray-200 text-lg leading-normal my-8">Hello, my name is Gerbi Gómez</h1>
          <p class="text-gray-700">This page is under construction</p>
        </div>
        <div class="flex justify-center text-center mt-8">
          <router-link to="/tg" class="transition duration-500 ease-in-out mx-2 px-5 py-3 rounded-lg bg-overdark hover:bg-overlight transform hover:-translate-y-1 hover:scale-110 text-sm text-white shadow-xl font-normal leading-none">
            <p>Tg</p>
          </router-link>
        </div>
        <div class="flex justify-center mt-24">
          <a href="https://www.github.com/gerbi"
             class="bg-sbase text-white h-6 w-6  shadow-lg font-normal flex items-center justify-center align-center rounded-full outline-none focus:outline-none"
             type="button">
            <i class="fab fa-2x fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Inicio',
};
</script>

<style scoped>

</style>
