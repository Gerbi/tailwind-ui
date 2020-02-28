<template>
  <!-- eslint-disable max-len -->
  <div class="sticky top-0 z-40 bg-vkbody md:pb-2">
    <div class="bg-white border-b shadow">
      <div class="container mx-auto max-w-screen-lg md:px-6 lg:px-12 xl:px-18">
        <div class="flex-wrap items-center justify-between hidden py-1 bg-white md:flex">
          <router-link to="/" class="flex items-center block w-1/4 mr-4 text-xl font-semibold">
            <svg class="w-10 h-10 text-blue-600 fill-current" viewBox="0 0 20 20">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.955 3.447C5.154 1.79 7.403 0 7.895 0c.493 0 2.742 1.791 3.942 3.447.984 1.359 1.31 2.375 1.78 3.842l.19.59c.55 1.685.985 4.43.985 4.43s.296 1.35 0 1.478l-5.911 3.939c-.723.368-1.155.362-1.97 0-.812-.54-1.762-1.155-2.66-1.737-1.659-1.073-3.142-2.032-3.252-2.202-.128-.198-.063-.822-.023-1.203.013-.127.023-.226.023-.274-.002-.193.435-2.746.985-4.432l.19-.589c.47-1.467.796-2.483 1.78-3.842zM6.91 8.863s.555.492.986.492c.43 0 .985-.492.985-.492s.809-.803 1.478-.985c.556-.152.956-.247 1.478 0 .591.28.75.761.949 1.368l.036.11c.397 1.196-.193 2.043-.867 3.012-.204.293-.416.598-.611.926-.177.3-.327.595-.47.878-.478.943-.886 1.748-1.993 2.076-.738.219-1.233.219-1.97 0-1.108-.328-1.516-1.133-1.994-2.076-.143-.283-.293-.579-.47-.878a14.933 14.933 0 00-.61-.926c-.675-.969-1.264-1.816-.868-3.013l.036-.109c.2-.607.358-1.088.95-1.368.521-.247.92-.152 1.477 0 .67.182 1.478.985 1.478.985zm.986 5.908c1.088 0 1.97-.661 1.97-1.477 0-.816-.882-1.477-1.97-1.477-1.089 0-1.97.661-1.97 1.477 0 .816.881 1.477 1.97 1.477z"/>
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
            <form>
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
                      <a href="#" class="block px-4 py-2 leading-tight hover:bg-gray-200" v-for="user in users" :key="user.id">
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
                  src="https://images.unsplash.com/photo-1551292831-023188e78222?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80"
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
      myError: '',
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
        .catch((e) => {
          this.myError(e);
        });
    },
  },
};
</script>
