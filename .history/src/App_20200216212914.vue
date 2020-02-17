<template>
  <div id="app" @click="handleAppClick">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'app',
  methods: {
    handleAppClick() {
      console.log('点击了');
    },
  },
};
</script>
