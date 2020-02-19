<template>
  <!-- eslint-disable max-len -->
  <div>
    <div class="px-4 bg-white md:rounded-lg shadow-sm pb-4 md:pt-4">
      <div class="flex items-center py-3 md:hidden">
      <span class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200">
        <svg class="w-6 h-6 text-blue-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"/>
        </svg>
      </span>
        <p class="ml-2 text-lg font-semibold text-gray-800">@lucy</p>
      </div>
      <div class="relative w-full">
        <form @submit.prevent="getCommunities()">
          <button class="block w-full px-4 py-2 pl-10 text-sm text-center text-gray-500 bg-gray-200 rounded-lg focus:outline-none focus:text-gray-800 focus:bg-gray-300">Your profile is private</button>
        </form>
      </div>
      <div class="flex my-6">
        <img class="object-cover w-24 h-24 mr-8 rounded-full" src="../../assets/img/perfil2-750.jpg" alt="">
        <div class="block px-2">
          <p class="text-xl break-all block block font-semibold text-gray-900">Lucy Heart</p>
          <p class="text-gray-700">самое лучшее в моей жизни 😊</p>
          <p class="text-sm font-medium text-gray-500">online</p>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="mx-2 lg:mx-4 text-center cursor-pointer">
          <div class="text-sm font-semibold text-blue-500">106</div>
          <div class="text-sm text-gray-600">friends</div>
        </div>
        <div class="mx-2 lg:mx-4 text-center cursor-pointer">
          <div class="text-sm font-semibold text-blue-500">32</div>
          <div class="text-sm text-gray-600">photos</div>
        </div>
        <div class="mx-2 lg:mx-4 text-center cursor-pointer">
          <div class="text-sm font-semibold text-blue-500">10</div>
          <div class="text-sm text-gray-600">videos</div>
        </div>
        <div class="mx-2 lg:mx-4 text-center cursor-pointer">
          <div class="text-sm font-semibold text-blue-500">15</div>
          <div class="text-sm text-gray-600">audios</div>
        </div>
      </div>
      <button class="block w-full px-4 py-2 pl-10 my-4 text-sm font-medium text-center text-blue-500 bg-gray-200 rounded-lg focus:outline-none focus:bg-gray-200">Edit profile</button>
    </div>
    <div class="mt-3">
      <Input />
    </div>
    <div class="px-4 mt-3 bg-white md:rounded-t-lg shadow-sm">
      <div class="flex">
        <div class="flex mr-8 -mb-px">
          <a href="#" class="flex items-center py-3 text-gray-700 no-underline border-b-2 border-blue-500 md:opacity-100 hover:opacity-100">
            All posts
          </a>
        </div>
        <div class="flex mr-8 -mb-px">
          <a href="#" class="flex items-center py-3 text-gray-700 no-underline border-b-2 border-transparent opacity-50 md:opacity-100 hover:opacity-100 md:hover:border-gray-700">
            My posts
          </a>
        </div>
        <div class="flex mr-8 -mb-px">
          <a href="#" class="flex items-center py-3 text-gray-700 no-underline border-b-2 border-transparent opacity-50 md:opacity-100 hover:opacity-100 md:hover:border-gray-700">
            Post archive
          </a>
        </div>
      </div>
      <div class="-mx-4 border-b"></div>
    </div>
    <article class="px-4 pt-4 pb-4 xl:px-10 xl:pt-4 bg-white md:rounded-b-lg shadow">
      <div class="flex justify-between">
        <div class="flex items-center">
          <img
            style="transition: all .15s ease"
            v-on:click="toggleModal()"
            src="../../assets/img/perfil2-750.jpg"
            alt="" class="h-12 w-12 rounded-full object-cover">
          <div class="ml-3">
            <p class="text-base font-semibold leading-tight xl:text-lg">
              <span class="text-gray-900">Lucy Heart</span>
            </p>
            <div class="flex items-center">
              <span class="text-xs text-gray-600">Yesterday at 8:41 pm</span>
            </div>
          </div>
        </div>
        <div class="flex items-start cursor-pointer">
          <svg class="h-5 w-5 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M4 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
        </div>
      </div>
      <div class="my-4 xl:mt-6 text-gray-800 text-sm">
        <p class="mt-4">
          Soon.
        </p>
        <span class="text-blue-500 cursor">#loveng_phrases</span>
        <figure class="-mx-4 md:px-4 my-3 flex justify-center items-center cursor-pointer" v-on:click="toggleModal()">
          <img class="w-full h-auto w-2/3 object-cover" src="https://images.unsplash.com/photo-1503460201202-ebb366ea0cd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="">
        </figure>
      </div>
      <Comments />
    </article>
    <article class="px-4 pt-4 pb-4 my-4 xl:px-10 xl:pt-4 bg-white md:rounded-b-lg shadow">
      <div class="flex justify-between">
        <div class="flex items-center">
          <img
            style="transition: all .15s ease"
            v-on:click="toggleModal()"
            src="../../assets/img/perfil2-750.jpg"
            alt="" class="h-12 w-12 rounded-full object-cover">
          <div class="ml-3">
            <p class="text-base font-semibold leading-tight xl:text-lg">
              <span class="text-gray-900">Lucy Heart</span>
            </p>
            <div class="flex items-center">
              <span class="text-xs text-gray-600">Yesterday at 8:41 pm</span>
            </div>
          </div>
        </div>
        <div class="flex items-start cursor-pointer">
          <svg class="h-5 w-5 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M4 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
        </div>
      </div>
      <div class="my-4 xl:mt-6 text-gray-800 text-sm">
        <p class="mt-4">
          Travel.
        </p>
        <span class="text-blue-500 cursor">#iceland</span>
        <figure class="-mx-4 md:px-4 my-3 flex flex-wrap justify-center flex flex-wrap items-center cursor-pointer" v-on:click="toggleModal()">
          <img class="w-full h-auto w-2/3 object-cover" src="https://images.unsplash.com/photo-1484968309888-8d6b403bc1ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="">
        </figure>
        <figure class="-mx-4 md:px-4 my-3 flex flex-wrap justify-center items-center cursor-pointer" v-on:click="toggleModal()">
          <img class="w-full h-auto w-2/3 object-cover" src="https://images.unsplash.com/photo-1515133997814-e6460be24073?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80" alt="">
        </figure>
      </div>
      <Comments />
    </article>
  </div>
</template>

<script>
import Input from '../../components/vk/posts/Input.vue';
import Comments from '../../components/vk/posts/Comments.vue';

const axios = require('axios');

export default {
  name: 'Vkprofile',
  components: { Comments, Input },
  data() {
    return {
      usuarios: [],
    };
  },
  mounted() {
    this.getUsuarios();
  },
  methods: {
    getUsuarios() {
      axios.get('https://reqres.in/api/users?per_page=12')
        .then((response) => {
          this.usuarios = response.data.data;
        })
        .catch((e) => {
          // handle error
          console.log(e);
        });
    },
  },
};
</script>
<style scoped></style>
