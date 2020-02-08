<template>
  <!-- eslint-disable max-len -->
  <div class="bg-sbase h-screen antialiased leading-none">
    <div class="min-h-screen flex items-center justify-center">
      <div class="flex flex-col justify-around h-full">
        <div>
          <router-link to="/gerbi" class="transition duration-500 ease-in-out mx-2 px-5 py-3 rounded-lg bg-overdark hover:bg-overlight transform hover:-translate-y-1 hover:scale-110 text-sm text-white shadow-xl font-normal leading-none">Gerbi</router-link>
        </div>
        <div class="flex justify-center mt-20">
          <a href="https://www.github.com/gerbi"
             class="bg-white text-gray-900 h-10 w-10  shadow-lg font-normal flex items-center justify-center align-center rounded-full outline-none focus:outline-none"
             type="button">
            <i class="fab fa-3x fa-github"></i>
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
