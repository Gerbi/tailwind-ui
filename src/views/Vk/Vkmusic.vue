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
          <input class="block w-full px-4 py-2 pl-10 text-sm text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:bg-gray-200" placeholder="Search">
        </form>
      </div>
      <div class="-mx-2 border-b pb-3">
        <div class="flex justify-between">
          <p class="px-2 my-3 text-xs font-semibold text-gray-600 uppercase">playlists</p>
          <a href="#" class="px-2 my-3 text-xs font-semibold text-blue-600 hover:underline ">Show All</a>
        </div>
        <div class="flex flex-shrink-0 overflow-x-auto">
          <div class="mx-2 cursor-pointer">
            <img class="object-cover w-32 h-32 rounded-md" src="../../assets/img/perfil-750.jpg" alt="">
          </div>
          <div class="mx-2 cursor-pointer">
            <img class="object-cover w-32 h-32 rounded-md" src="../../assets/img/perfil-750.jpg" alt="">
          </div>
          <div class="mx-2 cursor-pointer">
            <img class="object-cover w-32 h-32 rounded-md" src="../../assets/img/perfil-750.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="mt-2 -mx-2">
        <p class="px-2 my-2 text-xs font-semibold text-gray-600 uppercase">50 tracks</p>
        <div v-for="(music, i) in musics" :key="i">
          <div class="text-gray-600 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-gray-700">
            <div class="flex justify-between p-2">
              <div class="flex">
            <span class="flex items-center justify-center w-10 h-10 bg-gray-400 rounded-md">
<!--              <img class="h-full w-full rounded-lg" :src="music.image.text" alt="">-->
              <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path class="heroicon-ui" d="M8 14.54V6a1 1 0 0 1 .76-.97l12-3A1 1 0 0 1 22 3v12a4 4 0 1 1-2-3.46V4.28l-10 2.5V18a4 4 0 1 1-2-3.46zM6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm12-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
              </svg>
            </span>
                <div class="ml-3">
                  <p class="text-sm text-blue-700">
                    {{ music.name }}
                  </p>
                  <a :href="music.artist.url" class="text-sm text-gray-700">{{ music.artist.name }}</a>
                </div>
              </div>
              <span class="left-0 flex items-center mr-1 text-xs text-gray-600">3.28</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'Vkmusic',
  components: {},
  data() {
    return {
      musics: [],
      api_key: 'b72f4dc85d55ded204de4ba97307260c',
    };
  },

  mounted() {
    const self = this;
    axios.get('https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key=b72f4dc85d55ded204de4ba97307260c&format=json')
      .then((response) => {
        self.musics = response.data.tracks.track;
      })
      .catch((e) => {
        // handle error
        console.log(e);
      });
  },
};
</script>
<style scoped></style>
