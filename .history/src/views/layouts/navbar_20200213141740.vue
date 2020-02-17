<template>
  <header class="main-header">
    <div class="container">

    </div>
  </header>
</template>
<script>
export default {
  name: 'navbar',
};
</script>
<style lang="less" scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  color: #909090;
  .container {
    max-width: 960px;
    height: 100%;
    margin: auto;
    border: 1px solid #FF0000;
  }
}
</style>
