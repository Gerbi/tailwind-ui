<template>
  <!-- eslint-disable max-len -->
  <div class="bg-sbase h-screen antialiased leading-none">
    <div class="border-b border-surface bg-overdark shadow">
      <div class="container mx-auto flex items-center justify-between px-4 py-3">
        <router-link to="/" class="navbar-logo block items-center text-xl text-gray-800 font-semibold flex text-left focus:outline-none">
          <svg class="h-8 w-auto fill-current text-blue-600 mr-3" viewBox="0 0 24 24">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0a6 6 0 00-6 6v10a6 6 0 006 6h10a6 6 0 006-6V6a6 6 0 00-6-6H6zm6.244 16.064c.417-.06.81-.156 1.183-.29.674-.246 1.196-.59 1.565-1.032V10.77h-3.917v1.511h1.866v1.716c-.328.328-.877.492-1.647.492-.766 0-1.347-.266-1.743-.8-.397-.533-.595-1.321-.595-2.365v-.636c.005-1.034.19-1.813.554-2.337.364-.525.895-.787 1.592-.787.547 0 .976.133 1.286.397.314.264.517.681.608 1.25h1.996c-.123-1.075-.517-1.893-1.182-2.453-.608-.516-1.431-.797-2.469-.842a6.38 6.38 0 00-.286-.006h-.014c-.208 0-.41.012-.604.035a3.967 3.967 0 00-1.618.546c-.629.383-1.112.939-1.449 1.668-.333.725-.499 1.584-.499 2.577v.677c.01.966.19 1.807.54 2.522.356.716.857 1.263 1.504 1.641.652.374 1.408.56 2.27.56h.02c.364 0 .71-.024 1.04-.072z"/>
          </svg>
        </router-link>
        <div>
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
        <a class="transition duration-500 ease-in-out px-5 py-3 rounded-tg bg-overdark hover:bg-overlight transform hover:-translate-y-1 hover:scale-110 text-sm text-white font-normal leading-none uppercase focus:outline-none" href="tg://resolve?domain=gerbi">
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
