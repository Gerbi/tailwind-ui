<template>
  <!-- eslint-disable max-len -->
  <div class="px-4 py-5 bg-white rounded-lg shadow-sm">
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
        <div v-for="usuario in usuarios" :key="usuario.id">
          <div class="mx-2 text-gray-600 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-gray-700">
            <div class="flex justify-between p-2">
              <div class="flex">
            <span class="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full">
              <img class="object-cover rounded-full" :src="usuario.avatar" alt="">
            </span>
                <div class="ml-3">
                  <p class="text-sm text-blue-700">
                    {{ usuario.first_name }} {{ usuario.last_name }}
                  </p>
                  <p class="text-sm text-gray-700">{{usuario.id}} members</p>
                </div>
              </div>
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
  name: 'Vkcommunities',
  components: {},
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
