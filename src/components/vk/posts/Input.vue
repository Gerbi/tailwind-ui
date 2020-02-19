<template>
<!-- eslint-disable max-len -->
  <div>
    <div class="mt-2 md:mt-0 border md:block py-4 bg-white md:rounded-md">
      <div class="mx-4 flex">
        <div class="flex justify-between w-full">
          <button class="flex cursor-auto items-start text-xs font-semibold text-gray-600 focus:outline-none">
            <img
              src="../../../assets/img/perfil2-750.jpg"
              alt="" class="h-10 w-10 rounded-full object-cover mr-5">
          </button>
          <textarea @click="controlShow = true" class="block w-full border border-transparent bg-gray-200 focus:outline-none focus:bg-white focus:border-gray-300 text-gray-600 rounded-lg pl-4 py-2 leading-none"
                    placeholder="Write something here..."
                    rows="1">
        </textarea>
        </div>
      </div>
      <div v-if="controlShow" class="flex justify-between px-4 mt-4">
        <div class="flex justify-between items-center">
          <button class="inline-flex items-center mr-2 focus:outline-none">
            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current text-blue-500">
              <path d="M20 7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h2.38l1.73-3.45A1 1 0 0 1 9 3h6a1 1 0 0 1 .9.55L17.61 7H20zM9.62 5L7.89 8.45A1 1 0 0 1 7 9H4v10h16V9h-3a1 1 0 0 1-.9-.55L14.39 5H9.62zM12 17a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
            </svg>
          </button>
          <button class="inline-flex items-center mx-2 focus:outline-none">
            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current text-blue-500">
              <path d="M16 8.38l4.55-2.27A1 1 0 0 1 22 7v10a1 1 0 0 1-1.45.9L16 15.61V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v1.38zm0 2.24v2.76l4 2V8.62l-4 2zM14 17V7H4v10h10z"/>
            </svg>
          </button>
          <button class="inline-flex items-center mx-2 focus:outline-none">
            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current text-blue-500">
              <path d="M8 14.54V6a1 1 0 0 1 .76-.97l12-3A1 1 0 0 1 22 3v12a4 4 0 1 1-2-3.46V4.28l-10 2.5V18a4 4 0 1 1-2-3.46zM6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm12-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
            </svg>
          </button>
          <button class="inline-flex items-center mx-2 focus:outline-none">
            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current text-blue-500">
              <path d="M4 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
            </svg>
          </button>
        </div>
        <div class="flex justify-between items-center">
        <span class="inline-flex items-center cursor-pointer">
          <svg viewBox="0 0 24 24" class="h-7 w-7 fill-current text-blue-500">
            <path d="M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v.58a8 8 0 0 1 1.92 1.11l.5-.29a2 2 0 0 1 2.74.73l1 1.74a2 2 0 0 1-.73 2.73l-.5.29a8.06 8.06 0 0 1 0 2.22l.5.3a2 2 0 0 1 .73 2.72l-1 1.74a2 2 0 0 1-2.73.73l-.5-.3A8 8 0 0 1 15 19.43V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.58a8 8 0 0 1-1.92-1.11l-.5.29a2 2 0 0 1-2.74-.73l-1-1.74a2 2 0 0 1 .73-2.73l.5-.29a8.06 8.06 0 0 1 0-2.22l-.5-.3a2 2 0 0 1-.73-2.72l1-1.74a2 2 0 0 1 2.73-.73l.5.3A8 8 0 0 1 9 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 0 0 0 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 0 0 2.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 0 0 2.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 0 0 0-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 0 0-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 0 0-2.41 1.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
          </svg>
        </span>
          <button class="bg-blue-500 text-white text-sm px-4 py-2 rounded-lg ml-3 leading-none focus:outline-none">Post</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Input',
  components: {},
  data() {
    return {
      controlShow: false,
    };
  },
};
</script>
<style scoped></style>
