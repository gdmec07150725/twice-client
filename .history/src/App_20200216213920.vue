<template>
  <div id="app" @click="handleAppClick">
    <router-view ref="page" />
  </div>
</template>
<script>
export default {
  name: 'app',
  methods: {
    handleAppClick() {
      this.$nextTick(() => {
        if (
          this.$refs['page'] &&
          (this.$refs['page'].toggleShowAddList ||
            this.$refs['page'].toggleShowUserDropDown)
        ) {
          this.$refs['page'].toggleShowAddList = false;
          this.$ref['page'].toggleShowUserDropDown = false;
        }
      });
    },
  },
};
</script>
