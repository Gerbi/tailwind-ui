<template>
  <!-- eslint-disable max-len -->
  <div class="min-h-screen flex items-center justify-center">
    <div class="flex flex-col justify-around h-full">
      <div>
        <router-link to="/gerbi">Example 1</router-link>
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
</template>

<script>

export default {
  name: 'Inicio',
};
</script>

<style scoped>

</style>
