<template>
  <!-- eslint-disable max-len -->
  <div class="sticky top-0 z-40 bg-vkbody md:pb-2">
    <div class="bg-white border-b shadow">
      <div class="container mx-auto max-w-screen-lg md:px-6 lg:px-12 xl:px-18">
        <div class="flex-wrap items-center justify-between hidden py-1 bg-white md:flex">
          <router-link to="/" class="flex items-center block w-1/4 mr-4 text-xl font-semibold">
<!--            <svg class="w-auto h-8 text-blue-600 fill-current" viewBox="0 0 24 24">-->
<!--              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 6a6 6 0 016-6h10a6 6 0 016 6v10a6 6 0 01-6 6H6a6 6 0 01-6-6V6zm6-4a4 4 0 00-4 4v10a4 4 0 004 4h10a4 4 0 004-4V6a4 4 0 00-4-4H6zm7.379 13.774c.638-.241 1.137-.597 1.497-1.066v-3.814h-3.774v1.312h2.051v1.948c-.373.401-1.002.602-1.886.602-.807 0-1.438-.296-1.894-.889-.451-.597-.677-1.433-.677-2.509v-.765c.014-1.08.221-1.898.622-2.454.406-.56.996-.841 1.77-.841 1.2 0 1.894.6 2.086 1.798h1.695c-.132-1.03-.524-1.819-1.176-2.366-.651-.546-1.53-.82-2.638-.82-1.29 0-2.295.424-3.015 1.272-.72.843-1.08 2.016-1.08 3.52v.78c.014.938.194 1.76.54 2.467.35.702.848 1.242 1.49 1.62.643.379 1.381.568 2.215.568.811 0 1.536-.121 2.174-.363z"/>-->
<!--            </svg>-->
            <svg class="w-auto h-8 text-blue-600 fill-current" viewBox="0 0 24 24">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0a6 6 0 00-6 6v10a6 6 0 006 6h10a6 6 0 006-6V6a6 6 0 00-6-6H6zm6.244 16.064c.417-.06.81-.156 1.183-.29.674-.246 1.196-.59 1.565-1.032V10.77h-3.917v1.511h1.866v1.716c-.328.328-.877.492-1.647.492-.766 0-1.347-.266-1.743-.8-.397-.533-.595-1.321-.595-2.365v-.636c.005-1.034.19-1.813.554-2.337.364-.525.895-.787 1.592-.787.547 0 .976.133 1.286.397.314.264.517.681.608 1.25h1.996c-.123-1.075-.517-1.893-1.182-2.453-.608-.516-1.431-.797-2.469-.842a6.38 6.38 0 00-.286-.006h-.014c-.208 0-.41.012-.604.035a3.967 3.967 0 00-1.618.546c-.629.383-1.112.939-1.449 1.668-.333.725-.499 1.584-.499 2.577v.677c.01.966.19 1.807.54 2.522.356.716.857 1.263 1.504 1.641.652.374 1.408.56 2.27.56h.02c.364 0 .71-.024 1.04-.072z"/>
            </svg>
          </router-link>
          <div class="hidden mr-auto md:relative md:block">
            <div class="items-center justify-between py-3 md:flex">
              <span class="flex items-center text-lg font-semibold text-black focus:outline-none">
                News
                <svg viewBox="0 0 24 24" class="w-6 h-6 ml-1 text-blue-600 fill-current">
                  <path d="M9.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z"/>
                </svg>
              </span>
            </div>
          </div>
          <div class="items-center hidden xl:max-w-xs md:block md:flex md:relative">
            <form @submit.prevent="getUsers()">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg class="w-5 h-5 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                </svg>
              </div>
              <input @click="searchBar = true" class="w-64 py-2 pl-10 pr-4 leading-none text-gray-900 bg-gray-200 border border-transparent rounded-lg focus:outline-none focus:bg-white focus:border-gray-300" placeholder="Search">
              <div
                v-if="searchBar"
                @click="searchBar = false"
                class="fixed inset-0"
                tabindex="-1">
              </div>
              <transition
                enter-class="opacity-0 scale-90"
                enter-active-class="ease-out transition-fastest"
                enter-to-class="opacity-100 scale-100"
                leave-class="opacity-100 scale-100"
                leave-active-class="ease-in transition-fastest"
                leave-to-class="opacity-0 scale-90"
              >
                <div v-if="searchBar" class="absolute mx-auto mt-4 text-left origin-top-right">
                  <div class="w-64 h-56 py-1 overflow-y-auto bg-white border rounded-lg shadow-lg">
                    <div>
                      <a href="#" class="block px-4 py-2 leading-tight hover:bg-gray-200" v-for="user in users" :key="user">
                        <div class="flex items-center">
                          <img
                            :src="user.avatar"
                            alt="" class="object-cover w-8 h-8 rounded-full">
                          <div class="ml-3">
                            <span class="block text-sm font-medium leading-none text-gray-800">{{user.first_name}} {{user.last_name}}</span>
                            <span class="text-xs text-gray-600">{{ user.email}}</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </transition>
            </form>
            <div id="dropdown" class="relative inline-block pl-3">
              <button @click="isOpen = true" class="flex items-center py-2 font-semibold focus:outline-none">
                <img
                  src="../../assets/img/perfil2-750.jpg"
                  alt="" class="object-cover rounded-full h-7 w-7">
                <svg class="w-6 h-6 ml-1 text-gray-700 fill-current" viewBox="0 0 24 24">
                  <path
                    d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
                  />
                </svg>
              </button>
              <div
                v-if="isOpen"
                @click="isOpen = false"
                class="fixed inset-0"
                tabindex="-1">
              </div>
              <transition
                enter-class="opacity-0 scale-90"
                enter-active-class="ease-out transition-fastest"
                enter-to-class="opacity-100 scale-100"
                leave-class="opacity-100 scale-100"
                leave-active-class="ease-in transition-fastest"
                leave-to-class="opacity-0 scale-90"
              >
                <div v-if="isOpen" class="absolute right-0 mt-4 text-left origin-top-right">
                  <div class="w-56 bg-white rounded-lg shadow-lg">
                    <div class="py-1">
                      <a href="#" class="block px-6 py-3 leading-tight hover:bg-gray-200">My profile</a>
                    </div>
                    <div class="py-1 border-t border-gray-400">
                      <a href="#" class="block px-6 py-3 leading-tight hover:bg-gray-200">Edit</a>
                      <a href="#" class="block px-6 py-3 leading-tight hover:bg-gray-200">Settings and Privacy</a>
                      <a href="#" class="block px-6 py-3 leading-tight hover:bg-gray-200">Help</a>
                    </div>
                    <form class="py-1 border-t border-gray-400">
                      <button class="block w-full px-6 py-3 leading-tight text-left hover:bg-gray-200 focus:outline-none">
                        Log out
                      </button>
                    </form>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
        <div class="flex justify-around py-1 shadow-sm md:hidden">
          <button class="py-2 text-blue-600 hover:text-blue-600 focus:outline-none">
            <svg viewBox="0 0 24 24" class="fill-current h-7 w-7">
              <path d="M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm16 4V5H4v2h16zm0 2H4v10h16V9z"/>
            </svg>
          </button>
          <button class="py-2 text-gray-500 hover:text-blue-600 focus:outline-none">
            <svg viewBox="0 0 24 24" class="fill-current h-7 w-7">
              <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
            </svg>
          </button>
          <button class="py-2 text-gray-500 hover:text-blue-600 focus:outline-none">
            <svg viewBox="0 0 24 24" class="fill-current h-7 w-7">
              <path d="M2 15V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v15a1 1 0 0 1-1.7.7L16.58 17H4a2 2 0 0 1-2-2zM20 5H4v10h13a1 1 0 0 1 .7.3l2.3 2.29V5z"/>
            </svg>
          </button>
          <button class="py-2 text-gray-500 hover:text-blue-600 focus:outline-none">
            <svg viewBox="0 0 24 24" class="fill-current h-7 w-7">
              <path d="M15 19a3 3 0 0 1-6 0H4a1 1 0 0 1 0-2h1v-6a7 7 0 0 1 4.02-6.34 3 3 0 0 1 5.96 0A7 7 0 0 1 19 11v6h1a1 1 0 0 1 0 2h-5zm-4 0a1 1 0 0 0 2 0h-2zm0-12.9A5 5 0 0 0 7 11v6h10v-6a5 5 0 0 0-4-4.9V5a1 1 0 0 0-2 0v1.1z"/>
            </svg>
          </button>
          <button class="py-2 text-gray-500 hover:text-blue-600 focus:outline-none">
            <svg viewBox="0 0 24 24" class="fill-current h-7 w-7">
              <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'Top',
  data() {
    return {
      isOpen: false,
      searchBar: false,
      users: [],
      page: 1,
      per_page: 10,
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios
        .get('https://reqres.in/api/users?per_page=12')
        .then((response) => {
          this.users = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
