<template>
  <!-- eslint-disable max-len -->
  <div>
    <div class="py-2 -mx-4 border-t border-gray-300">
      <div class="flex items-center justify-between mx-4">
        <div class="flex -mx-3">
          <div class="flex items-center mx-3 text-red-600 cursor-pointer">
            <svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"/>
            </svg>
            <span class="ml-1 text-xs font-semibold text-red-600">1.7K</span>
          </div>
          <div class="flex items-center mx-3 cursor-pointer" @click="showComments = true">
            <svg class="w-5 h-5 text-gray-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path class="heroicon-ui" d="M2 15V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v15a1 1 0 0 1-1.7.7L16.58 17H4a2 2 0 0 1-2-2zM20 5H4v10h13a1 1 0 0 1 .7.3l2.3 2.29V5z"/>
            </svg>
            <span class="ml-1 text-xs font-semibold text-gray-600">21</span>
          </div>
        </div>
        <div class="flex items-center">
          <svg class="w-4 h-4 text-gray-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M17.56 17.66a8 8 0 0 1-11.32 0L1.3 12.7a1 1 0 0 1 0-1.42l4.95-4.95a8 8 0 0 1 11.32 0l4.95 4.95a1 1 0 0 1 0 1.42l-4.95 4.95zm-9.9-1.42a6 6 0 0 0 8.48 0L20.38 12l-4.24-4.24a6 6 0 0 0-8.48 0L3.4 12l4.25 4.24zM11.9 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
          </svg>
          <span class="ml-2 text-xs text-gray-600">45K</span>
        </div>
      </div>
    </div>
    <div v-if="showComments" class="pt-3 -mx-4 border-t border-gray-300 lg:-mx-8 xl:-mx-10">
      <div class="flex items-center justify-between mx-4 lg:mx-8 xl:mx-10">
        <button class="flex items-center w-8 focus:outline-none">
          <img
            src="../../../assets/img/perfil2-750.jpg"
            alt="" class="object-cover rounded-full h-7 w-7">
        </button>
        <div class="relative w-full mx-4">
          <form>
            <div class="absolute inset-y-0 right-0 flex items-center pr-3">
              <div class="ml-1 cursor-pointer">
                <svg class="w-5 h-5 text-gray-500 fill-current hover:text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M20.12 11.95l-6.58 6.59a5 5 0 1 1-7.08-7.07l6.59-6.6a3 3 0 0 1 4.24 4.25l-6.58 6.59a1 1 0 1 1-1.42-1.42l6.59-6.58a1 1 0 0 0-1.42-1.42l-6.58 6.59a3 3 0 0 0 4.24 4.24l6.59-6.58a5 5 0 0 0-7.08-7.08l-6.58 6.6a7 7 0 0 0 9.9 9.9l6.59-6.6a1 1 0 0 0-1.42-1.4z"/>
                </svg>
              </div>
              <div class="ml-1 cursor-pointer">
                <svg class="w-5 h-5 text-gray-500 fill-current hover:text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M20 7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h2.38l1.73-3.45A1 1 0 0 1 9 3h6a1 1 0 0 1 .9.55L17.61 7H20zM9.62 5L7.89 8.45A1 1 0 0 1 7 9H4v10h16V9h-3a1 1 0 0 1-.9-.55L14.39 5H9.62zM12 17a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                </svg>
              </div>
              <div class="ml-1 cursor-pointer">
                <svg class="w-5 h-5 text-gray-500 fill-current hover:text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                </svg>
              </div>
            </div>
            <input class="block w-full px-4 py-2 text-xs text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:bg-white focus:border-gray-300" placeholder="Leave a comment...">
          </form>
        </div>
        <span class="flex items-center w-8 h-8 cursor-pointer">
        <svg class="w-6 h-6 text-gray-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path d="M0 0l20 10L0 20V0zm0 8v4l10-2L0 8z"/>
        </svg>
      </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comments',
  data() {
    return {
      showComments: false,
    };
  },
};
</script>

<style scoped>

</style>
