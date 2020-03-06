<template>
  <!-- eslint-disable max-len -->
  <div class="bg-sbase h-screen antialiased leading-none">
    <div class="border-b border-surface bg-overdark shadow">
      <div class="container mx-auto flex items-center justify-between px-4 py-3">
        <router-link to="/" class="navbar-logo block items-center text-xl text-gray-800 font-semibold flex text-left focus:outline-none">
          <svg class="h-10 w-10 fill-current text-blue-600" viewBox="0 0 20 20">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.955 3.447C5.154 1.79 7.403 0 7.895 0c.493 0 2.742 1.791 3.942 3.447.984 1.359 1.31 2.375 1.78 3.842l.19.59c.55 1.685.985 4.43.985 4.43s.296 1.35 0 1.478l-5.911 3.939c-.723.368-1.155.362-1.97 0-.812-.54-1.762-1.155-2.66-1.737-1.659-1.073-3.142-2.032-3.252-2.202-.128-.198-.063-.822-.023-1.203.013-.127.023-.226.023-.274-.002-.193.435-2.746.985-4.432l.19-.589c.47-1.467.796-2.483 1.78-3.842zM6.91 8.863s.555.492.986.492c.43 0 .985-.492.985-.492s.809-.803 1.478-.985c.556-.152.956-.247 1.478 0 .591.28.75.761.949 1.368l.036.11c.397 1.196-.193 2.043-.867 3.012-.204.293-.416.598-.611.926-.177.3-.327.595-.47.878-.478.943-.886 1.748-1.993 2.076-.738.219-1.233.219-1.97 0-1.108-.328-1.516-1.133-1.994-2.076-.143-.283-.293-.579-.47-.878a14.933 14.933 0 00-.61-.926c-.675-.969-1.264-1.816-.868-3.013l.036-.109c.2-.607.358-1.088.95-1.368.521-.247.92-.152 1.477 0 .67.182 1.478.985 1.478.985zm.986 5.908c1.088 0 1.97-.661 1.97-1.477 0-.816-.882-1.477-1.97-1.477-1.089 0-1.97.661-1.97 1.477 0 .816.881 1.477 1.97 1.477z"/>
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
