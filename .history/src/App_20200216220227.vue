<template>
  <div id="app" @click="handleAppClick">
    <router-view />
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  name: 'app',
  methods: {
    ...mapMutations(['CLOSEDROUPDOWN']),
    handleAppClick() {
      this.CLOSEDROUPDOWN();
    },
  },
};
</script>
