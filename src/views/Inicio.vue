<template>
  <!-- eslint-disable max-len -->
  <div class="min-h-screen antialiased leading-none bg-sbase">
    <div class="flex items-center justify-center min-h-screen">
      <div class="flex flex-col justify-around h-full">
        <div class="flex flex-col items-center justify-between text-center">
          <div class="flex justify-center mt-10 mb-4">
            <lottie-player
              autoplay
              loop
              mode="normal"
              src="https://assets9.lottiefiles.com/animated_stickers/lf_tgs_SMS4G7.json"
              style="width: 175px"
            >
            </lottie-player>
          </div>
          <h1 class="mt-8 text-3xl font-bold leading-loose text-gray-200">Gerbi Gómez</h1>
          <h1 class="my-3 text-lg leading-normal text-gray-200">Web Developer</h1>
        </div>
        <div class="flex justify-center mt-8 text-center">
          <router-link to="/vk" class="px-5 py-3 mx-2 text-sm font-normal leading-none text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-overdark hover:bg-overlight hover:-translate-y-1 hover:scale-110">
            <p>Vk</p>
          </router-link>
          <a href="https://goofy-clone-news.netlify.com/" class="px-5 py-3 mx-2 text-sm font-normal leading-none text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-overdark hover:bg-overlight hover:-translate-y-1 hover:scale-110">
            <p>Kd</p>
          </a>
          <a href="https://ecommerce-galileo.netlify.com/" class="px-5 py-3 mx-2 text-sm font-normal leading-none text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-overdark hover:bg-overlight hover:-translate-y-1 hover:scale-110">
            <p>St</p>
          </a>
        </div>
        <div class="flex justify-center my-24">
          <a href="https://www.github.com/gerbi"
             class="flex items-center justify-center w-12 h-12 font-normal text-white rounded-full shadow-lg outline-none hover:text-gray-400  align-center focus:outline-none"
             type="button">
            <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="absolute top-0 left-0 m-4">
        <router-link to="/tg" class="block px-4 py-3 mx-2 text-sm font-normal leading-none text-center text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-overdark hover:bg-overlight hover:-translate-y-1 hover:scale-110">
          <p>Telegram</p>
        </router-link>
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
