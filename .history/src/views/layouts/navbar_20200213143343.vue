<template>
  <header class="main-header">
    <div class="container">
      <a class="logo"></a>
      <nav class="main-nav">
        <ul class="nav-list">
          <li class="main-nav-list">
            <ul class="phone-hide">
              <li class="nav-item link-item route-active home">
                <a>首页</a>
              </li>
              <li class="nav-item link-item boilingPoint">
                <a>沸点</a>
              </li>
              <li class="nav-item link-item lookBack">
                <a>书评</a>
              </li>
              <li class="nav-item link-item company">
                <a>公司</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
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
