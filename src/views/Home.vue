<template>
  <div class="home">
    <second-nav>
      <template slot="list">
        <li v-for="item in secondNavList" :key="item.value" class="nav-item">
          <div class="category-popover-box">{{ item.label }}</div>
        </li>
      </template>
    </second-nav>
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
  </div>
</template>

<script>
import secondNav from '@/components/NavBar/secondNav';
import thirdNav from '@/components/NavBar/thirdNav';
export default {
  name: 'Home',
  components: {
    secondNav,
    thirdNav,
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
