<template>
  <div class="view welcome-view">
    <second-nav>
      <template slot="list">
        <li
          :class="[
            'nav-item',
            secondItemActive === -1 ? 'nav-item-active' : '',
          ]"
          @click="() => handleSecondNavClick(-1)"
        >
          <div class="category-popover-box">推荐</div>
        </li>
        <li
          :class="['nav-item', secondItemActive === 0 ? 'nav-item-active' : '']"
          @click="() => handleSecondNavClick(0)"
        >
          <div class="category-popover-box">关注</div>
        </li>
        <li
          v-for="item in categoryList"
          :key="item.id"
          :class="[
            'nav-item',
            secondItemActive === item.id ? 'nav-item-active' : '',
          ]"
          @click="() => handleSecondNavClick(item.id)"
        >
          <div class="category-popover-box">{{ item.name }}</div>
        </li>
      </template>
    </second-nav>
    <div class="timeline-container" v-if="childCategory.length > 0">
      <third-nav>
        <template slot="list">
          <li
            :class="['nav-item', 'tag', thirdItemActive === 0 ? 'active' : '']"
            @click="() => handleThirdNavClick(0)"
          >
            <a>全部</a>
          </li>
          <li
            v-for="item in childCategory"
            :key="item.id"
            :class="[
              'nav-item',
              'tag',
              thirdItemActive === item.id ? 'active' : '',
            ]"
            @click="() => handleThirdNavClick(item.id)"
          >
            <a>{{ item.name }}</a>
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
          <ul
            class="context-list"
            :canScroll="canScroll"
            v-scroll-to-load="queryListData"
          >
            <li
              class="context-item"
              v-for="item in articleList"
              :key="item.id"
              @click="() => handleReadDetail(item)"
            >
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
                          >{{ item.title }}</router-link
                        >
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
                    <div data-src class="lazy thumb" v-if="item.image">
                      <img :src="item.image" width="100%" height="100%" />
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
import { mapState, mapActions } from 'vuex';

export default {
  name: 'home',
  components: {
    secondNav,
    thirdNav,
    contextLeft,
    contextRight,
  },
  computed: {
    ...mapState({
      articleList: state => state.article.articleList,
      categoryList: state => state.article.categoryList,
      childCategory: state => state.article.childCategory,
    }),
  },
  data() {
    return {
      secondItemActive: '',
      thirdItemActive: '',
      canScroll: true,
    };
  },
  methods: {
    ...mapActions(['getArticleList', 'getCategoryList', 'getChildCategory']),
    handleSecondNavClick(id) {
      this.secondItemActive = id;
      // 请求二级分类
      this.getChildCategory(id);
    },
    handleThirdNavClick(id) {
      this.thirdItemActive = id;
      // 请求文章数据
    },
    async queryListData() {
      try {
        this.canScroll = false;
        await this.getArticleList(1);
        this.canScroll = true;
      } catch (error) {
        console.log(error);
      }
    },
    handleReadDetail(item) {
      const { id } = item;
      if (id) {
        this.$router.replace({ name: 'articleDetail', query: { id } });
      }
    },
    queryCategoryList() {
      const params = {
        companyId: 1,
      };
      this.getCategoryList(params);
    },
  },
  created() {
    this.queryListData();
    this.queryCategoryList();
  },
};
</script>
<style lang="less" scoped>
@import './index.less';
</style>
