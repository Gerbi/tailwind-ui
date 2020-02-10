<template>
  <!-- eslint-disable max-len -->
  <div class="bg-sbase h-screen antialiased leading-none">
    <div class="border-b border-surface bg-overdark shadow">
      <div class="container mx-auto flex items-center justify-between px-4 py-3">
        <router-link to="/" class="navbar-logo block items-center text-xl text-gray-800 font-semibold flex text-left">
          <svg class="h-8 w-auto fill-current text-blue-600 mr-3" viewBox="0 0 24 24">
            <path d="M9 20v-1.7l.01-.24L15.07 12h2.94c1.1 0 1.99.89 1.99 2v4a2 2 0 0 1-2 2H9zm0-3.34V5.34l2.08-2.07a1.99 1.99 0 0 1 2.82 0l2.83 2.83a2 2 0 0 1 0 2.82L9 16.66zM0 1.99C0 .9.89 0 2 0h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zM4 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
        </router-link>
        <div>
          <router-link to="/" class="text-tgtblue hover:underline font-medium">Home</router-link>
        </div>
      </div>
    </div>
    <a class="flex items-center justify-center py-2 bg-tgblue text-white hidden" href="//telegram.org/dl?tme=f0e39e4b18cd74bc75_7700227613531071351">
      Don't have <strong class="px-1">Telegram</strong> yet? Try it now!<i class="ml-1 fas fa-angle-right"></i>
    </a>
    <div class="relative text-center mt-12">
      <!--  Profile Image  -->
            <div class="mb-4 flex justify-center">
              <a href="https://t.me/gerbi" class="text-blue-600">
                <img class="h-122 w-122 bg-cover rounded-full text-center" src="../assets/img/profile.jpg">
              </a>
            </div>
      <div class="text-center text-2xl font-semibold text-white mb-3">Gerbi</div>
      <div class="text-center text-gray-600 font-medium text-sm mb-3">
        @gerbi
      </div>
      <div class="text-center text-gray-400 font-normal">Keep calm and make epic shit!</div>
      <div class="mt-10 flex justify-center">
        <a class="transition duration-500 ease-in-out px-5 py-3 rounded-tg bg-overdark hover:bg-overlight transform hover:-translate-y-1 hover:scale-110 text-sm text-white font-normal leading-none uppercase" href="tg://resolve?domain=gerbi">
          <p>Send Message</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Gerbi',
};
</script>

<style scoped>

</style>
