<template>
  <!-- eslint-disable max-len -->
  <div class="flex flex-col min-h-screen bg-vkbody">
    <!-- header s -->
    <Top />
    <!-- header e -->
    <div class="container flex mx-auto max-w-screen-lg md:px-6 xl:px-18">
      <div class="hidden lg:block lg:w-1/4">
        <div class="hidden lg:block fixed w-48 mt-2 md:mt-0">
          <ul>
            <li>
              <a href="#" class="mt-1 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-300 rounded-lg" v-on:click="toggleTabs(1)" v-bind:class="{'text-gray-800 bg-vkbody': openTab !== 1, 'text-gray-800 bg-gray-300': openTab === 1}">
                <span class="inline-flex items-center">
                  <svg viewBox="0 0 24 24" class="h-7 w-7 fill-current text-blue-600">
                    <path d="M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm16 4V5H4v2h16zm0 2H4v10h16V9z"/>
                  </svg>
                  <span class="ml-4">News</span>
                </span>
                <span class="inline-block w-9 text-center py-1 leading-none text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">12</span>
              </a>
            </li>
            <li>
              <a href="#" class="mt-1 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-300 rounded-lg" v-on:click="toggleTabs(2)" v-bind:class="{'text-gray-600 bg-vkbody': openTab !== 2, 'text-gray-700 bg-gray-300': openTab === 2}">
      <span class="inline-flex items-center">
        <svg viewBox="0 0 24 24" class="h-7 w-7 fill-current text-blue-600">
            <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.56 8.93l6.37-2.12a1 1 0 0 1 1.26 1.26l-2.12 6.37a1 1 0 0 1-.63.63l-6.37 2.12a1 1 0 0 1-1.26-1.26l2.12-6.37a1 1 0 0 1 .63-.63zm-.22 5.73l4-1.33 1.32-4-4 1.34-1.32 4z"/>
        </svg>
        <span class="ml-4 text-gray-800">Recommended</span>
      </span>
                <span class="inline-block w-9 text-center py-1 leading-none text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">25</span>
              </a>
            </li>
            <li>
              <a href="#" class="mt-1 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-300 rounded-lg" v-on:click="toggleTabs(3)" v-bind:class="{'text-gray-600 bg-vkbody': openTab !== 3, 'text-gray-700 bg-gray-300': openTab === 3}">
      <span class="inline-flex items-center">
        <svg viewBox="0 0 24 24" class="h-7 w-7 fill-current text-blue-600">
            <path d="M15 19a3 3 0 0 1-6 0H4a1 1 0 0 1 0-2h1v-6a7 7 0 0 1 4.02-6.34 3 3 0 0 1 5.96 0A7 7 0 0 1 19 11v6h1a1 1 0 0 1 0 2h-5zm-4 0a1 1 0 0 0 2 0h-2zm0-12.9A5 5 0 0 0 7 11v6h10v-6a5 5 0 0 0-4-4.9V5a1 1 0 0 0-2 0v1.1z"/>
        </svg>
        <span class="ml-4 text-gray-800">Notifications</span>
      </span>
                <span class="inline-block w-9 text-center py-1 leading-none text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">6</span>
              </a>
            </li>
            <li>
              <a href="#" class="mt-1 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-300 rounded-lg" v-on:click="toggleTabs(4)" v-bind:class="{'text-gray-600 bg-vkbody': openTab !== 4, 'text-gray-700 bg-gray-300': openTab === 4}">
      <span class="inline-flex items-center">
        <svg viewBox="0 0 24 24" class="h-7 w-7 fill-current text-blue-500">
          <path d="M2 15V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v15a1 1 0 0 1-1.7.7L16.58 17H4a2 2 0 0 1-2-2zM20 5H4v10h13a1 1 0 0 1 .7.3l2.3 2.29V5z"/>
        </svg>
        <span class="ml-4 text-gray-800">Messages</span>
      </span>
                <span class="inline-block w-9 text-center py-1 leading-none text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">1
      </span>
              </a>
            </li>
            <li>
              <a href="#" class="mt-1 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-300 rounded-lg" v-on:click="toggleTabs(5)" v-bind:class="{'text-gray-600 bg-vkbody': openTab !== 5, 'text-gray-700 bg-gray-300': openTab === 5}">
      <span class="inline-flex items-center">
        <svg viewBox="0 0 24 24" class="h-7 w-7 fill-current text-blue-500">
          <path d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"/>
        </svg>
        <span class="ml-4 text-gray-800">Friends</span>
      </span>
              </a>
            </li>
            <li>
              <a href="#" class="mt-1 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-300 rounded-lg" v-on:click="toggleTabs(6)" v-bind:class="{'text-gray-600 bg-vkbody': openTab !== 6, 'text-gray-700 bg-gray-300': openTab === 6}">
      <span class="inline-flex items-center">
        <svg viewBox="0 0 24 24" class="h-7 w-7 fill-current text-blue-500">
          <path d="M9 12A5 5 0 1 1 9 2a5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2zm1-5a1 1 0 0 1 0-2 5 5 0 0 1 5 5v2a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3zm-2-4a1 1 0 0 1 0-2 3 3 0 0 0 0-6 1 1 0 0 1 0-2 5 5 0 0 1 0 10z"/>
        </svg>
        <span class="ml-4 text-gray-800">Communities</span>
      </span>
              </a>
            </li>
            <li>
              <a href="#" class="mt-1 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-300 rounded-lg" v-on:click="toggleTabs(7)" v-bind:class="{'text-gray-600 bg-vkbody': openTab !== 7, 'text-gray-700 bg-gray-300': openTab === 7}">
                <span class="inline-flex items-center">
                  <svg viewBox="0 0 24 24" class="h-7 w-7 fill-current text-blue-500">
                    <path d="M5 3h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v4h4V5H5zm10-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v4h4V5h-4zM5 13h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4c0-1.1.9-2 2-2zm0 2v4h4v-4H5zm10-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4c0-1.1.9-2 2-2zm0 2v4h4v-4h-4z"/>
                  </svg>
                  <span class="ml-4 text-gray-800">Media</span>
                </span>
              </a>
            </li>
            <li>
              <a href="#" class="mt-1 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-300 rounded-lg" v-on:click="toggleTabs(8)" v-bind:class="{'text-gray-600 bg-vkbody': openTab !== 8, 'text-gray-700 bg-gray-300': openTab === 8}">
                <span class="inline-flex items-center">
                  <svg viewBox="0 0 24 24" class="h-7 w-7 fill-current text-blue-500">
                    <path d="M8 14.54V6a1 1 0 0 1 .76-.97l12-3A1 1 0 0 1 22 3v12a4 4 0 1 1-2-3.46V4.28l-10 2.5V18a4 4 0 1 1-2-3.46zM6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm12-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                  </svg>
                  <span class="ml-4 text-gray-800">Music</span>
                </span>
              </a>
            </li>
            <li>
              <a href="#" class="mt-1 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-300 rounded-lg" v-on:click="toggleTabs(9)" v-bind:class="{'text-gray-600 bg-vkbody': openTab !== 9, 'text-gray-700 bg-gray-300': openTab === 9}">
      <span class="inline-flex items-center">
        <svg viewBox="0 0 24 24" class="h-7 w-7 fill-current text-blue-500">
          <path d="M6 2h9a1 1 0 0 1 .7.3l4 4a1 1 0 0 1 .3.7v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm9 2.41V7h2.59L15 4.41zM18 9h-3a2 2 0 0 1-2-2V4H6v16h12V9z"/>
        </svg>
        <span class="ml-4 text-gray-800">Documents</span>
      </span>
              </a>
            </li>
            <li>
              <a href="#" class="mt-1 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-300 rounded-lg" v-on:click="toggleTabs(10)" v-bind:class="{'text-gray-600 bg-vkbody': openTab !== 10, 'text-gray-700 bg-gray-300': openTab === 10}">
                <span class="inline-flex items-center">
                  <svg viewBox="0 0 24 24" class="h-7 w-7 fill-current text-blue-500">
                    <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"/>
                  </svg>
                  <span class="ml-4 text-gray-800">Liked</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full mx-auto md:w-3/4 xl:pl-4">
        <div class="flex flex-wrap">
          <div class="w-full">
            <div class="relative flex flex-col w-full min-w-0 mb-6 break-words">
              <div class="flex-auto">
                <div class="tab-content tab-space">
                  <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                  </div>
                  <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                  </div>
                  <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
                  </div>
                  <div v-bind:class="{'hidden': openTab !== 4, 'block': openTab === 4}">
                  </div>
                  <div v-bind:class="{'hidden': openTab !== 5, 'block': openTab === 5}">
                  </div>
                  <div v-bind:class="{'hidden': openTab !== 6, 'block': openTab === 6}">
                  </div>
                  <div v-bind:class="{'hidden': openTab !== 7, 'block': openTab === 7}">
                  </div>
                  <div v-bind:class="{'hidden': openTab !== 8, 'block': openTab === 8}">
                  </div>
                  <div v-bind:class="{'hidden': openTab !== 9, 'block': openTab === 9}">
                  </div>
                  <div v-bind:class="{'hidden': openTab !== 10, 'block': openTab === 10}">
                  </div>
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
import Top from '../components/vk/Top.vue';

export default {
  name: 'Inbox',
  components: {
    Top,
  },
  data() {
    return {
      openTab: 1,
    };
  },
  methods: {
    toggleTabs(tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>

<style scoped>

</style>
