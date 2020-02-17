<template>
  <div class="twice-wrapper">
    <navbar />
    <div class="twice-container">
      <transition name="page" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
import navbar from './navbar';
export default {
  name: 'layouts',
  components: {
    navbar,
  },
};
</script>
<style lang="less" scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
