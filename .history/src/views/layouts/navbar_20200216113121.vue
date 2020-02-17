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
              <div class="more"></div>
              <ul class="more-list">
                <li class="发布沸点"></li>
              </ul>
            </div>
          </li>
          <li class="nav-item notification">
            <a class="app-link" href="/" target="_blank"></a>
          </li>
          <li class="nav-item menu">
            <div>
              <img
                src="https://user-gold-cdn.xitu.io/2019/7/15/16bf1512a414ba62?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
              />
            </div>
            <ul class="nav-menu user-dropdown-list">
              <div class="nav-menu-item-group">
                <li class="nav-menu-item">
                  <a>
                    <i></i>
                    <span>写文章</span>
                  </a>
                </li>
                <li class="nav-menu-item">
                  <a>
                    <i></i>
                    <span>草稿</span>
                  </a>
                </li>
              </div>
              <div class="nav-menu-item-group">
                <li class="nav-menu-item">
                  <a>
                    <i></i>
                    <span>我的主页</span>
                  </a>
                </li>
                <li class="nav-menu-item">
                  <a>
                    <i></i>
                    <span>我赞过的</span>
                  </a>
                </li>
                <li class="nav-menu-item">
                  <a>
                    <i></i>
                    <span>我的收藏集</span>
                  </a>
                </li>
              </div>
              <div class="nav-menu-item-group">
                <li class="nav-menu-item">
                  <a>
                    <i></i>
                    <span>设置</span>
                  </a>
                </li>
                <li class="nav-menu-item">
                  <a>
                    <i></i>
                    <span>关于</span>
                  </a>
                </li>
              </div>
              <div class="nav-menu-item-group">
                <li class="nav-menu-item">
                  <a>
                    <i></i>
                    <span>设置</span>
                  </a>
                </li>
                <li class="nav-menu-item">
                  <a>
                    <i></i>
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
    display: flex;
    align-items: center;
    border: 1px solid #ff0000;
  }
}
</style>
