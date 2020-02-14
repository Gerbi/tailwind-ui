<template>
  <!-- eslint-disable max-len -->
  <div class="bg-white rounded-lg shadow-sm px-4 py-5">
    <div class="">
      <div class="relative w-full">
        <form @submit.prevent="getCommunities()">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3">
            <a href="">
              <svg class="w-5 h-5 text-gray-500 fill-current hover:text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
              </svg>
            </a>
          </div>
          <input class="block w-full px-4 py-2 pl-10 text-sm text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:bg-gray-200" placeholder="Search communities">
        </form>
      </div>
      <div class="mt-4 -mx-2">
        <div class="mx-2 text-gray-600 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-gray-700">
          <div class="flex justify-between p-2">
            <div class="flex">
            <span class="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300">
              <img class="rounded-full object-cover" src="https://vuejs.org/images/logo.png" alt="">
            </span>
              <div class="ml-3">
                <p class="text-sm text-blue-700">
                  Vue.js
                </p>
                <p class="text-sm text-gray-700">10,043 members</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-2 text-gray-600 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-gray-700">
          <div class="flex justify-between p-2">
            <div class="flex">
            <span class="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300">
              <img class="rounded-full object-cover" src="https://avatars0.githubusercontent.com/u/30317862?s=200&v=4" alt="">
            </span>
              <div class="ml-3">
                <p class="text-sm text-blue-700">
                  Tailwind Css
                </p>
                <p class="text-sm text-gray-700">6,304 members</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-2 text-gray-600 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-gray-700">
          <div class="flex justify-between p-2">
            <div class="flex">
            <span class="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300">
              <img class="rounded-full object-cover" src="https://avatars3.githubusercontent.com/u/958072?s=200&v=4" alt="">
            </span>
              <div class="ml-3">
                <p class="text-sm text-blue-700">
                  Laravel
                </p>
                <p class="text-sm text-gray-700">18,523</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-2 text-gray-600 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-gray-700">
          <div class="flex justify-between p-2">
            <div class="flex">
            <span class="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300">
              <img class="rounded-full object-cover" src="https://avatars0.githubusercontent.com/u/6154722?s=200&v=4" alt="">
            </span>
              <div class="ml-3">
                <p class="text-sm text-blue-700">
                  Microsoft
                </p>
                <p class="text-sm text-gray-700">848 members</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-2 text-gray-600 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-gray-700">
          <div class="flex justify-between p-2">
            <div class="flex">
            <span class="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300">
              <img class="rounded-full object-cover" src="https://avatars3.githubusercontent.com/u/6113871?s=200&v=4" alt="">
            </span>
              <div class="ml-3">
                <p class="text-sm text-blue-700">
                  Vue.js
                </p>
                <p class="text-sm text-gray-700">1,453 members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Vkmusic',
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped></style>
