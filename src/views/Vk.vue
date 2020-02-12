<template>
  <!-- eslint-disable max-len -->
  <div class="min-h-screen flex flex-col bg-vkbody">
<!-- header s -->
    <Top />
<!-- header e -->
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
    return {};
  },
  methods: {},
};
</script>

<style scoped>

</style>
