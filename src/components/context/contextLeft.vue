<template>
  <div class="context-left">
    <nav class="category-nav nav">
      <header class="list-header">
        <nav class="list-nav">
          <ul class="filter-list left">
            <li class="filter-item">
              <a>热门</a>
            </li>
            <li class="filter-item">
              <a>最新</a>
            </li>
            <li class="filter-item">
              <a>热榜</a>
            </li>
          </ul>
        </nav>
      </header>
    </nav>
    <ul class="context-list">
      <li class="context-item">
        <div class="context">
          <a class="context-link">
            <div class="context-detail">
              <div class="context-info"></div>
              <div data-src="" class="lazy thumb"></div>
            </div>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'contextLeft',
};
</script>
<style lang="less" scoped>
.context-left {
  overflow: hidden;
  flex-grow: 1;
}
.category-nav {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  .list-header {
    width: 100%;
    padding: 16px 12px;
    border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
  }
  .list-nav {
    display: flex;
    justify-content: flex-start;
  }
  .filter-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 1;
  }
  .filter-item {
    padding: 0 14px;
    font-size: 14px;
    border-right: 1px solid hsla(0, 0%, 59.2%, 0.2);
    cursor: pointer;
  }
}
.context-list {
  width: 100%;
  background-color: #fff;
  .context-item:not(:last-child) {
    border-bottom: 1px solid rgba(178, 186, 194, 0.15);
  }
  .context-detail {
    display: flex;
    align-items: center;
    padding: 18px 24px;
    .context-info {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-width: 0;
      margin-right: 24px;
      border: 1px solid yellow;
    }
    .thumb {
      flex: 0 0 auto;
      width: 60px;
      height: 60px;
      background-color: #fff;
      border-radius: 2px;
      border: 1px solid #000;
    }
  }
}
</style>
