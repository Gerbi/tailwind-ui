<template>
  <!-- eslint-disable max-len -->
  <div class="bg-white rounded-lg shadow-sm px-4 py-5">
    <div class="">
      <div class="relative w-full">
        <form @submit.prevent="getMusic()">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3">
            <a href="">
              <svg class="w-5 h-5 text-gray-500 fill-current hover:text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
              </svg>
            </a>
          </div>
          <input class="block w-full px-4 py-2 pl-10 text-sm text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:bg-gray-200" placeholder="Search friends">
        </form>
      </div>
      <div class="mt-2 -mx-2">
        <p class="px-2 my-4 text-xs font-semibold text-gray-600 uppercase">important</p>
        <div class="mx-2 text-gray-600 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-gray-700">
          <div class="flex justify-between p-2">
            <div class="flex items-center">
            <span class="flex items-center justify-center w-10 h-10 rounded-md">
              <img class="rounded-full" src="../../assets/img/team-4-470x470.png" alt="">
            </span>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-800">
                  Kristina Web
                </p>
              </div>
            </div>
            <button class="mr-2 text-gray-500 text-blue-600 focus:outline-none">
              <svg viewBox="0 0 24 24" class="fill-current h-7 w-7">
                <path d="M2 15V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v15a1 1 0 0 1-1.7.7L16.58 17H4a2 2 0 0 1-2-2zM20 5H4v10h13a1 1 0 0 1 .7.3l2.3 2.29V5z"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="mx-2 text-gray-600 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-gray-700">
          <div class="flex justify-between p-2">
            <div class="flex items-center">
            <span class="flex items-center justify-center w-10 h-10 rounded-md">
              <img class="rounded-full" src="../../assets/img/team-1-800x800.jpg" alt="">
            </span>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-800">
                  Kristina Web
                </p>
              </div>
            </div>
            <button class="mr-2 text-gray-500 text-blue-600 focus:outline-none">
              <svg viewBox="0 0 24 24" class="fill-current h-7 w-7">
                <path d="M2 15V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v15a1 1 0 0 1-1.7.7L16.58 17H4a2 2 0 0 1-2-2zM20 5H4v10h13a1 1 0 0 1 .7.3l2.3 2.29V5z"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="mx-2 text-gray-600 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-gray-700">
          <div class="flex justify-between p-2">
            <div class="flex items-center">
            <span class="flex items-center justify-center w-10 h-10 rounded-md">
              <img class="rounded-full" src="../../assets/img/team-2-800x800.jpg" alt="">
            </span>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-800">
                  Kristina Web
                </p>
              </div>
            </div>
            <button class="mr-2 text-gray-500 text-blue-600 focus:outline-none">
              <svg viewBox="0 0 24 24" class="fill-current h-7 w-7">
                <path d="M2 15V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v15a1 1 0 0 1-1.7.7L16.58 17H4a2 2 0 0 1-2-2zM20 5H4v10h13a1 1 0 0 1 .7.3l2.3 2.29V5z"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="mx-2 text-gray-600 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-gray-700">
          <div class="flex justify-between p-2">
            <div class="flex items-center">
            <span class="flex items-center justify-center w-10 h-10 rounded-md">
              <img class="rounded-full" src="../../assets/img/team-3-800x800.jpg" alt="">
            </span>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-800">
                  Kristina Web
                </p>
              </div>
            </div>
            <button class="mr-2 text-gray-500 text-blue-600 focus:outline-none">
              <svg viewBox="0 0 24 24" class="fill-current h-7 w-7">
                <path d="M2 15V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v15a1 1 0 0 1-1.7.7L16.58 17H4a2 2 0 0 1-2-2zM20 5H4v10h13a1 1 0 0 1 .7.3l2.3 2.29V5z"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="mx-2 text-gray-600 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-gray-700">
          <div class="flex justify-between p-2">
            <div class="flex items-center">
            <span class="flex items-center justify-center w-10 h-10 rounded-md">
              <img class="rounded-full" src="../../assets/img/team-1-800x800.jpg" alt="">
            </span>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-800">
                  Kristina Web
                </p>
              </div>
            </div>
            <button class="mr-2 text-gray-500 text-blue-600 focus:outline-none">
              <svg viewBox="0 0 24 24" class="fill-current h-7 w-7">
                <path d="M2 15V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v15a1 1 0 0 1-1.7.7L16.58 17H4a2 2 0 0 1-2-2zM20 5H4v10h13a1 1 0 0 1 .7.3l2.3 2.29V5z"/>
              </svg>
            </button>
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
