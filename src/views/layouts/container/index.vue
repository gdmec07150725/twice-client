<template>
  <main class="main-container">
    <second-nav>
      <template slot="list">
        <li v-for="item in secondNavList" :key="item.value" class="nav-item">
          <div class="category-popover-box">{{ item.label }}</div>
        </li>
      </template>
    </second-nav>
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
  </main>
</template>
<script>
import secondNav from '@/components/NavBar/secondNav';
export default {
  name: 'container',
  components: {
    secondNav,
  },
  data() {
    return {
      secondNavList: [
        {
          label: '推荐',
          value: 1,
        },
        {
          label: '关注',
          value: 2,
        },
        {
          label: '前端',
          value: 3,
        },
        {
          label: '后端',
          value: 4,
        },
        {
          label: 'Android',
          value: 5,
        },
        {
          label: 'ios',
          value: 6,
        },
        {
          label: '人工智能',
          value: 7,
        },
        {
          label: '开发工具',
          value: 8,
        },
        {
          label: '代码人生',
          value: 9,
        },
        {
          label: '阅读',
          value: 10,
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.main-container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
}
.main-container > .view {
  margin-top: 62px;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
