<template>
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
              <button class="add-btn">写文章</button>
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
            <div class="avatar">
              <img
                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3617305860,3974013488&fm=26&gp=0.jpg"
              />
            </div>
            <ul
              class="nav-menu user-dropdown-list"
              v-if="toggleShowUserDropDown"
            >
              <div class="nav-menu-item-group">
                <li class="nav-menu-item">
                  <a>
                    <icon-font
                      icon="iconxiewenzhang"
                      class="nav-menu-item-icon"
                    />
                    <span>写文章</span>
                  </a>
                </li>
                <li class="nav-menu-item">
                  <a>
                    <icon-font icon="iconcaogao" class="nav-menu-item-icon" />
                    <span>草稿</span>
                  </a>
                </li>
              </div>
              <div class="nav-menu-item-group">
                <li class="nav-menu-item">
                  <a>
                    <icon-font
                      icon="iconwodezhuye"
                      class="nav-menu-item-icon"
                    />
                    <span>我的主页</span>
                  </a>
                </li>
                <li class="nav-menu-item">
                  <a>
                    <icon-font icon="icondianzan3" class="nav-menu-item-icon" />
                    <span>我赞过的</span>
                  </a>
                </li>
                <li class="nav-menu-item">
                  <a>
                    <icon-font
                      icon="iconshoucangxuanzhong"
                      class="nav-menu-item-icon"
                    />
                    <span>我的收藏集</span>
                  </a>
                </li>
              </div>
              <div class="nav-menu-item-group">
                <li class="nav-menu-item">
                  <a>
                    <icon-font icon="iconshezhi" class="nav-menu-item-icon" />
                    <span>设置</span>
                  </a>
                </li>
                <li class="nav-menu-item">
                  <a>
                    <icon-font icon="iconguanyu" class="nav-menu-item-icon" />
                    <span>关于</span>
                  </a>
                </li>
              </div>
              <div class="nav-menu-item-group">
                <li class="nav-menu-item">
                  <a>
                    <icon-font icon="icondengchu" class="nav-menu-item-icon" />
                    <span>登出</span>
                  </a>
                </li>
              </div>
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
  data() {
    return {
      toggleShowAddList: false,
      toggleShowUserDropDown: false,
    };
  },
  methods: {
    handleMoreClick(e) {
      e.stopPropagation();
      this.toggleShowAddList = !this.toggleShowAddList;
    },
    handleAvatarClick(e) {
      e.stopPropagation();
      this.toggleShowUserDropDown = !this.toggleShowUserDropDown;
    },
  },
};
</script>
<style lang="less" scoped>
@import '~@/assets/styles/navbar';
</style>
