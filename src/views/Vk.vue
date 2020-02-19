<template>
  <!-- eslint-disable max-len -->
  <div class="flex flex-col min-h-screen bg-vkbody">
    <!-- header s -->
    <Top />
    <!-- header e -->
    <div class="container flex mx-auto max-w-screen-lg md:px-6 lg:px-12 xl:px-18">
      <div class="hidden lg:block lg:w-1/4">
        <div class="hidden lg:block fixed w-48 mt-2 md:mt-0">
          <ul>
            <li>
              <div class="mt-1 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-300 rounded-lg" v-on:click="toggleTabs(1)" v-bind:class="{'text-gray-800 bg-vkbody': openTab !== 1, 'text-gray-800 bg-gray-300': openTab === 1}">
                <span class="inline-flex items-center">
                  <svg viewBox="0 0 24 24" class="h-7 w-7 fill-current text-blue-600">
                    <path d="M13 20v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.59l-.3.3a1 1 0 1 1-1.4-1.42l9-9a1 1 0 0 1 1.4 0l9 9a1 1 0 0 1-1.4 1.42l-.3-.3V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5h3z"/>
                  </svg>
                  <a class="ml-4 hover:underline">My Profile</a>
                </span>
              </div>
            </li>
            <li>
              <div class="mt-1 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-300 rounded-lg" v-on:click="toggleTabs(4)" v-bind:class="{'text-gray-600 bg-vkbody': openTab !== 4, 'text-gray-700 bg-gray-300': openTab === 4}">
                <span class="inline-flex items-center">
                  <svg viewBox="0 0 24 24" class="h-7 w-7 fill-current text-blue-500">
                    <path d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"/>
                  </svg>
                  <span class="ml-4 text-gray-800">Friends</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full mx-auto md:w-3/4 xl:pl-4">
        <div class="flex flex-wrap">
          <div class="w-full">
            <div class="relative flex flex-col w-full min-w-0 md:mb-6 break-words">
              <div class="flex-auto">
                <div class="tab-content tab-space">
                  <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                    <Vkprofile />
                  </div>
                  <div v-bind:class="{'hidden': openTab !== 4, 'block': openTab === 4}">
                    <Vkfriends />
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
import Vkprofile from './Vk/Vkprofile.vue';
import Vkfriends from './Vk/Vkfriends.vue';

export default {
  name: 'Inbox',
  components: {
    Vkfriends,
    Vkprofile,
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
