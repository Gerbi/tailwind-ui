<template>
  <!-- eslint-disable max-len -->
  <div class="min-h-screen bg-bins antialiased xl:flex xl:flex-col xl:h-screen">
    <div class="fixed top-0 left-0 z-50 bg-pink-500 text-white shadow-md px-2 rounded-br font-mono">
      <span class="sm:hidden">default</span>
      <span class="hidden sm:inline md:hidden">sm</span>
      <span class="hidden md:inline lg:hidden">md</span>
      <span class="hidden lg:inline xl:hidden">lg</span>
      <span class="hidden xl:inline">xl</span>
    </div>
    <header class="sticky top-0 bg-white border-b shadow z-40">
      <div class="container overflow-visible px-4 lg:px-10 xl:px-40 mx-auto">
        <div class="flex flex-wrap items-center justify-between bg-white rounded-sm py-4">
          <router-link to="/dashboard" class="navbar-logo block items-center text-xl text-gray-800 font-semibold flex text-left">
            <svg class="h-8 w-auto fill-current text-blue-600 mr-3" viewBox="0 0 24 24">
              <path d="M9 20v-1.7l.01-.24L15.07 12h2.94c1.1 0 1.99.89 1.99 2v4a2 2 0 0 1-2 2H9zm0-3.34V5.34l2.08-2.07a1.99 1.99 0 0 1 2.82 0l2.83 2.83a2 2 0 0 1 0 2.82L9 16.66zM0 1.99C0 .9.89 0 2 0h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zM4 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
            </svg>
            Instant
          </router-link>
          <div class="hidden xl:max-w-xs xl:w-full md:block md:relative">
            <form @submit.prevent="searchGifs">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg class="h-6 w-6 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                </svg>
              </div>
              <input v-model="search" class="block w-full border border-transparent bg-gray-200 focus:outline-none focus:bg-white focus:border-gray-300 text-gray-900 rounded-lg pl-10 pr-4 py-2" placeholder="Search">
            </form>
          </div>
          <nav class="flex text-sm font-medium">
            <router-link class="px-4 py-2 bg-tgblue text-white rounded-md hover:bg-tgtblue hover:text-white" to="/login">Log In</router-link>
            <router-link class="pl-4 py-2 text-tgblue hover:text-tgtblue" to="i-signup">Sign Up</router-link>
          </nav>
        </div>
      </div>
    </header>

    <main class="xl:flex-1 xl:flex xl:overflow-y-hidden bg-white">
      <div class="w-screen overflow-auto">
        <div class="container mx-auto py-3 px-4 lg:px-10 xl:px-40 mx-auto">
          <section v-if="loading" class="flex justify-center items-center text-center mx-auto mt-32">
            <img class="h-64 w-64" alt="loading" src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" />
          </section>
          <section v-if="!loading" class="md:flex md:flex-wrap -mx-2 mt-10">
            <div class="md:w-1/2 lg:w-1/3 px-3 pb-6" :key="gif" v-for="gif in gifs">
              <img class="object-cover rounded-lg" :src="gif" style="height: 300px" />
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';

const API_URL = 'https://api.giphy.com/v1/gifs/search?api_key=JnxTmEGKXjZeUKBzRjTQoMDg8OX8pS5U&rating=pg&q=';
export default {
  setup() {
    const search = ref('');
    const loading = ref(false);
    const gifs = ref([]);
    const searchGifs = async () => {
      loading.value = true;
      const response = await fetch(API_URL + search.value);
      const json = await response.json();
      gifs.value = json.data.map((gif) => gif.images.fixed_height.url);
      console.log(json);
      setTimeout(() => {
        loading.value = false;
      }, 1500);
    };
    return {
      search,
      loading,
      searchGifs,
      gifs,
    };
  },
};
</script>

<style>
  section.images {
    column-count: 4;
  }
  img {
    width: 100%;
  }
  section.loading {
    width: 100%;
  }
  section.loading img {
    width: 50%;
    display: block;
    margin: 0 auto;
  }
</style>
