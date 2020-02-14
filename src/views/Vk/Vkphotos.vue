<template>
  <!-- eslint-disable max-len -->
  <div class="bg-white rounded-lg shadow-sm px-4 py-5">
    <div class="flex items-center mb-4 md:hidden">
      <span class="rounded-full flex items-center justify-center h-10 w-10 hover:bg-gray-200">
        <svg class="h-6 w-6 fill-current text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"/>
        </svg>
      </span>
      <p class="ml-2 text-lg font-semibold text-gray-800">Albums</p>
    </div>
    <div class="relative w-full">
      <button class="block w-full px-4 py-2 pl-10 text-sm font-semibold text-blue-600 bg-gray-200 rounded-lg focus:outline-none">Add new photos</button>
    </div>
    <div class="-mx-2 mt-4">
      <div class="lg:flex lg:flex-wrap">
        <div class="cursor-pointer w-full lg:w-1/2 lg:px-2 mb-4">
          <div class="rounded-lg mx-1 relative inline-block shadow align-top">
            <button class="block focus:outline-none relative">
              <span class="block h-64 w-72 overflow-hidden rounded-t-lg flex items-center">
                <img class="h-full w-full rounded-t-lg object-cover" src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExMjE3NH0" alt="">
              </span>
            </button>
            <div class="absolute rounded-b-lg bottom-0 bg-gray-400 w-full text-center text-white py-2" style="background-color: rgba(0,0,0,.7);">
              All photos
            </div>
            <a class="block flex rounded-lg px-2 py-1 absolute z-10" href="#" style="top: 8px; right: 8px; background-size: 80%; background-repeat: no-repeat;
            background-position: 50%; background-color: rgba(0,0,0,.4);">
              <svg class="h-4 w-4 fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M20 7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h2.38l1.73-3.45A1 1 0 0 1 9 3h6a1 1 0 0 1 .9.55L17.61 7H20zM9.62 5L7.89 8.45A1 1 0 0 1 7 9H4v10h16V9h-3a1 1 0 0 1-.9-.55L14.39 5H9.62zM12 17a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
              </svg>
              <span class="text-xs text-gray-100 ml-1">32</span>
            </a>
          </div>
        </div>
        <div class="cursor-pointer w-full lg:w-1/2 lg:px-2 mb-4">
          <div class="rounded-lg mx-1 relative inline-block shadow align-top">
            <button class="block focus:outline-none relative">
              <span class="block h-64 w-72 overflow-hidden rounded-t-lg flex items-center">
                <img class="h-full w-full rounded-t-lg object-cover" src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExMjE3NH0" alt="">
              </span>
            </button>
            <div class="absolute rounded-b-lg bottom-0 bg-gray-400 w-full text-center text-white py-2" style="background-color: rgba(0,0,0,.7);">
              All photos
            </div>
            <a class="block flex rounded-lg px-2 py-1 absolute z-10" href="#" style="top: 8px; right: 8px; background-size: 80%; background-repeat: no-repeat;
            background-position: 50%; background-color: rgba(0,0,0,.4);">
              <svg class="h-4 w-4 fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M20 7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h2.38l1.73-3.45A1 1 0 0 1 9 3h6a1 1 0 0 1 .9.55L17.61 7H20zM9.62 5L7.89 8.45A1 1 0 0 1 7 9H4v10h16V9h-3a1 1 0 0 1-.9-.55L14.39 5H9.62zM12 17a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
              </svg>
              <span class="text-xs text-gray-100 ml-1">32</span>
            </a>
          </div>
        </div>
        <div class="cursor-pointer w-full lg:w-1/2 lg:px-2 mb-4">
          <div class="rounded-lg mx-1 relative inline-block shadow align-top">
            <button class="block focus:outline-none relative">
              <span class="block h-64 w-72 overflow-hidden rounded-t-lg flex items-center">
                <img class="h-full w-full rounded-t-lg object-cover" src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExMjE3NH0" alt="">
              </span>
            </button>
            <div class="absolute rounded-b-lg bottom-0 bg-gray-400 w-full text-center text-white py-2" style="background-color: rgba(0,0,0,.7);">
              All photos
            </div>
            <a class="block flex rounded-lg px-2 py-1 absolute z-10" href="#" style="top: 8px; right: 8px; background-size: 80%; background-repeat: no-repeat;
            background-position: 50%; background-color: rgba(0,0,0,.4);">
              <svg class="h-4 w-4 fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M20 7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h2.38l1.73-3.45A1 1 0 0 1 9 3h6a1 1 0 0 1 .9.55L17.61 7H20zM9.62 5L7.89 8.45A1 1 0 0 1 7 9H4v10h16V9h-3a1 1 0 0 1-.9-.55L14.39 5H9.62zM12 17a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
              </svg>
              <span class="text-xs text-gray-100 ml-1">32</span>
            </a>
          </div>
        </div>
        <div class="cursor-pointer w-full lg:w-1/2 lg:px-2 mb-4">
          <div class="rounded-lg mx-1 relative inline-block shadow align-top">
            <button class="block focus:outline-none relative">
              <span class="block h-64 w-72 overflow-hidden rounded-t-lg flex items-center">
                <img class="h-full w-full rounded-t-lg object-cover" src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExMjE3NH0" alt="">
              </span>
            </button>
            <div class="absolute rounded-b-lg bottom-0 bg-gray-400 w-full text-center text-white py-2" style="background-color: rgba(0,0,0,.7);">
              All photos
            </div>
            <a class="block flex rounded-lg px-2 py-1 absolute z-10" href="#" style="top: 8px; right: 8px; background-size: 80%; background-repeat: no-repeat;
            background-position: 50%; background-color: rgba(0,0,0,.4);">
              <svg class="h-4 w-4 fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M20 7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h2.38l1.73-3.45A1 1 0 0 1 9 3h6a1 1 0 0 1 .9.55L17.61 7H20zM9.62 5L7.89 8.45A1 1 0 0 1 7 9H4v10h16V9h-3a1 1 0 0 1-.9-.55L14.39 5H9.62zM12 17a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
              </svg>
              <span class="text-xs text-gray-100 ml-1">32</span>
            </a>
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
