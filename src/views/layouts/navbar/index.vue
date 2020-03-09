<template>
  <div class="main-header-box">
    <header class="main-header">
      <div class="container">
        <a class="logo">
          <img />
        </a>
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
                  <a>财商</a>
                </li>
                <li class="nav-item link-item company">
                  <a>公司</a>
                </li>
              </ul>
            </li>
            <li class="nav-item search">
              <form class="search-form">
                <input
                  type="search"
                  maxlength="320"
                  placeholder="搜索掘金"
                  class="search-input"
                />
                <img
                  src="https://b-gold-cdn.xitu.io/v3/static/img/juejin-search-icon.6f8ba1b.svg"
                  alt="搜索"
                  class="search-icon"
                />
              </form>
            </li>
            <li class="nav-item add">
              <div class="add-group">
                <button class="add-btn" @click="handleWriteArticle">
                  写文章
                </button>
                <div class="more" @click="e => handleMoreClick(e)">
                  <i class="more-icon ion-android-arrow-dropdown"></i>
                </div>
                <ul class="more-list" v-if="toggleShowAddList">
                  <li class="item">发布沸点</li>
                </ul>
              </div>
            </li>
            <li class="nav-item notification">
              <a class="app-link" href="/" target="_blank">
                <icon-font icon="icontongzhi" :size="24" />
              </a>
            </li>
            <li class="nav-item menu" @click="e => handleAvatarClick(e)">
              <avatar-navigation />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import avatarNavigation from '@/components/avatarNavigation';
export default {
  name: 'navbar',
  components: {
    avatarNavigation,
  },
  computed: {
    ...mapState({
      toggleShowAddList: state => state.toggleShowAddList,
    }),
  },
  methods: {
    ...mapMutations(['CHANGESHOWADDLIST', 'CHANGESHOWUSERDROPDOWN']),
    handleMoreClick(e) {
      e.stopPropagation();
      this.CHANGESHOWADDLIST();
    },
    handleAvatarClick(e) {
      e.stopPropagation();
      this.CHANGESHOWUSERDROPDOWN();
    },
    handleWriteArticle() {
      this.$router.push({ name: 'publishArticle' });
    },
  },
};
</script>
<style lang="less">
@import '~@/assets/styles/navbar';
</style>
