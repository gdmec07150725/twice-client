<template>
  <nav class="tag-nav tag-navigator">
    <ul class="nav-list tag-list">
      <slot name="list"></slot>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'thirdNav',
};
</script>
<style lang="less" scoped>
.tag-navigator {
  margin-top: 107px;
  .tag-list {
    display: flex;
    flex-wrap: wrap; // 如果一行显示不下，则换行显示
    height: auto;
    .nav-item.tag.active {
      background-color: #007fff;
      color: #fff;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05),
        0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
    .nav-item.tag {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 24px;
      background-color: #fff;
      color: #8a9aa9;
      border-radius: 12px;
      font-size: 13px;
      padding: 10px;
      margin-right: 12px;
      margin-bottom: 12px;
    }
  }
}
</style>
