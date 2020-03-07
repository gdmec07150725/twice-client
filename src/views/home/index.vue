<template>
  <div class="view welcome-view">
    <div class="timeline-container">
      <third-nav>
        <template slot="list">
          <li
            v-for="item in threeNavList"
            :key="item.value"
            class="nav-item tag"
          >
            <a>{{ item.label }}</a>
          </li>
        </template>
      </third-nav>
    </div>
    <!-- 列表 -->
    <div class="welcome-context">
      <context-left />
      <context-right />
    </div>
  </div>
</template>

<script>
import thirdNav from '@/components/NavBar/thirdNav';
import contextLeft from '@/components/context/contextLeft.vue';
import contextRight from '@/components/context/contextRight.vue';
export default {
  name: 'home',
  components: {
    thirdNav,
    contextLeft,
    contextRight,
  },
  data() {
    return {
      threeNavList: [
        {
          label: '全部',
          value: 1,
        },
        {
          label: 'JavaScript',
          value: 2,
        },
        {
          label: 'Vue.js',
          value: 3,
        },
        {
          label: 'React.js',
          value: 4,
        },
        {
          label: 'Node.js',
          value: 5,
        },
        {
          label: 'CSS',
          value: 6,
        },
        {
          label: 'Webpack',
          value: 7,
        },
        {
          label: 'TypeScript',
          value: 8,
        },
        {
          label: 'Flutter',
          value: 9,
        },
        {
          label: '微信小程序',
          value: 10,
        },
        {
          label: 'ECMAScript6',
          value: 11,
        },
        {
          label: '性能优化',
          value: 12,
        },
        {
          label: 'HTTP',
          value: 13,
        },
        {
          label: 'HTML',
          value: 13,
        },
      ],
    };
  },
};
</script>
