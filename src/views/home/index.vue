<template>
  <div class="view welcome-view">
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
    <!-- 列表 -->
    <div class="welcome-context">
      <context-left>
        <div slot="leftContent">
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
            <li class="context-item" v-for="item in articleList" :key="item.id">
              <div class="context">
                <a class="context-link">
                  <div class="context-detail">
                    <div class="context-info">
                      <div class="meta-row">
                        <ul class="meta-list">
                          <li class="item post">专栏</li>
                          <li class="item username">
                            <div class="user-popover-box">
                              <a href="#">Tony</a>
                            </div>
                          </li>
                          <li class="item time">5分钟前</li>
                          <li class="item tag">
                            <a href="#" class="tag">JavaScript</a>
                          </li>
                        </ul>
                      </div>
                      <div class="title-row">
                        <router-link
                          :to="{ name: 'articleDetail' }"
                          class="title"
                        >
                          {{ item.title }}
                        </router-link>
                      </div>
                      <div class="action-row">
                        <ul class="action-list">
                          <li class="item like">
                            <a class="title-box">
                              <img
                                src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg"
                                class="icon"
                              />
                              <span class="count">10</span>
                            </a>
                          </li>
                          <li class="item comment">
                            <a class="title-box">
                              <img
                                src="https://b-gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg"
                                class="icon"
                              />
                              <span class="count">23</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div data-src="" class="lazy thumb">
                      <img
                        src="https://user-gold-cdn.xitu.io/2020/3/7/170b306a69d3fd1c?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1"
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </context-left>
      <context-right />
    </div>
  </div>
</template>

<script>
import secondNav from '@/components/NavBar/secondNav';
import thirdNav from '@/components/NavBar/thirdNav';
import contextLeft from '@/components/context/contextLeft.vue';
import contextRight from '@/components/context/contextRight.vue';
import scrollToLoad from '@/mixin/scrollToLoad.js';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'home',
  mixins: [scrollToLoad],
  components: {
    secondNav,
    thirdNav,
    contextLeft,
    contextRight,
  },
  computed: {
    ...mapState({
      articleList: state => state.article.articleList,
    }),
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
  methods: {
    ...mapActions(['getArticleList']),
    async queryListData() {
      try {
        this.isScroll = false;
        await this.getArticleList();
        this.isScroll = true;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.queryListData();
  },
};
</script>
<style lang="less" scoped>
/* @import './index.less'; */
@import '~@/views/home/index.less';
</style>
