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
              <div class="more">
                <i class="more-icon ion-android-arrow-dropdown"></i>
              </div>
              <ul class="more-list">
                <li class="item">发布沸点</li>
              </ul>
            </div>
          </li>
          <li class="nav-item notification">
            <a class="app-link" href="/" target="_blank">
              <icon-font icon="icontongzhi" :size="24" />
            </a>
          </li>
          <li class="nav-item menu">
            <div class="avatar">
              <img
                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3617305860,3974013488&fm=26&gp=0.jpg"
              />
            </div>
            <ul class="nav-menu user-dropdown-list">
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
    .logo {
      min-width: 98px;
      margin-right: 24px;
    }
    .main-nav {
      height: 100%;
      flex: 1 0 auto;
      .nav-list {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        position: relative;
        height: 100%;
        margin: 0;
      }
    }
  }
  .main-nav-list {
    display: flex;
    .phone-hide {
      display: flex;
    }
    .nav-item.link-item {
      padding: 0 18px;
      height: 60px;
    }
  }
  .nav-item.search {
    flex: 1 1 auto;
    justify-content: flex-end;
    cursor: auto;
    .search-form {
      border: 1px solid hsla(0, 0%, 59.2%, 0.2);
      background-color: rgba(227, 231, 236, 0.2);
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 2px;
      .search-input {
        border: none;
        width: 156px;
        padding: 7px 12px;
        box-shadow: none;
        outline: none;
        font-size: 13px;
        color: #666;
        background-color: transparent;
      }
      .search-icon {
        padding: 0 6px;
        cursor: pointer;
      }
    }
  }
  .nav-item.add {
    .add-group {
      display: flex;
      align-items: center;
      position: relative;
      height: 32px;
      cursor: pointer;
      .add-btn,
      .more {
        height: 100%;
        color: #fff;
        background-color: #007fff;
        border-radius: 3px;
      }
      .add-btn {
        padding: 0 11px;
        font-size: 14px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        cursor: pointer;
      }
      .more {
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12px;
        border-left: 1px solid hsla(0, 0%, 100%, 0.1);
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        .ion-android-arrow-dropdown {
          font-size: 12px;
          font-style: italic;
          color: #fff;
        }
        .ion-android-arrow-dropdown:before {
          content: '\f35f';
        }
      }
      .more-list {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        padding: 5px 0;
        font-size: 14px;
        color: #3b76c5;
        background-color: #fff;
        border: 1px solid #ebebeb;
        border-radius: 2px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        z-index: 1;
        .item {
          padding: 0 0 0 10px;
          line-height: 1.9;
        }
      }
    }
  }
  .nav-item.notification {
    position: relative;
    a:hover {
      color: #007fff;
    }
  }
  .nav-item.menu {
    position: relative;
    .avatar {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      position: relative;
      img {
        display: inline-block;
        width: 100%;
        height: 100%;
      }
    }
    .nav-menu {
      position: absolute;
      top: 100%;
      margin: 0;
      padding: 0;
      background-color: #fff;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(177, 180, 185, 0.45);
      border-radius: 4px;
      font-size: 14px;
      .nav-menu-item-group {
        padding: 12px 0;
      }
      .nav-menu-item-group:not(:last-child) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.04);
      }
      .nav-menu-item {
        font-size: 16px;
        cursor: pointer;
        a {
          display: flex;
          align-items: center;
          padding: 6px 12px;
          color: #71777c;
          .nav-menu-item-icon {
            display: inline-block;
            margin-right: 10px;
            vertical-align: middle;
            color: #b2bac2;
          }
        }
      }
    }
    .nav-menu.user-dropdown-list {
      width: 157px;
      right: 0;
      left: auto;
    }
  }
  .nav-item {
    color: #71777c;
    padding: 0 15px;
    font-size: 16px;
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>
