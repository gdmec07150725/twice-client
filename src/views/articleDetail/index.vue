<template>
  <div class="welcome-context">
    <context-left class="ql-snow content-wrapper">
      <article slot="leftContent" class="article">
        <div class="author-info-block">
          <a href="#" target="_blank" class="avatar-link">
            <div class="avatar"></div>
          </a>
          <div class="author-info-box">
            <a target="_blank" class="username ellipsis">Tony</a>
            <div class="meta-box">
              <time class="time">2020年03月09日</time>
              <span class="views-count">阅读 100</span>
            </div>
          </div>
        </div>
        <div class="lazy article-hero thumb" v-if="articleDetail.image">
          <img :src="articleDetail.image" width="100%" height="auto" />
        </div>
        <h1 class="article-title">
          {{ articleDetail.title }}
        </h1>
        <div
          v-html="articleDetail.content"
          class="ql-editor article-content"
        ></div>
      </article>
    </context-left>
    <context-right />
  </div>
</template>
<script>
import contextLeft from '@/components/context/contextLeft.vue';
import contextRight from '@/components/context/contextRight.vue';
import { mapActions } from 'vuex';
export default {
  name: 'articleDetail',
  components: {
    contextLeft,
    contextRight,
  },
  data() {
    return {
      articleDetail: {
        content: '',
        title: '',
        image: '',
      },
    };
  },
  methods: {
    ...mapActions(['getArticleDetail']),
    async handleGetArticleDetail(articleId) {
      try {
        const res = await this.getArticleDetail(articleId);
        if (res) {
          this.articleDetail = { ...res };
          console.log(this.articleDetail);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    const {
      query: { id },
    } = this.$route;
    if (id) {
      this.handleGetArticleDetail(id);
    }
  },
};
</script>
<style lang="less" scoped>
.welcome-context {
  margin-top: 15px;
  .content-wrapper {
    position: relative;
    width: 700px;
    max-width: 100%;
    margin-bottom: 1.5rem;
    padding: 0 2rem;
    background-color: #fff;
    border-radius: 2px;
    box-sizing: border-box;
    .article {
      margin-bottom: 36px;
      padding: 24px 0 0;
    }
  }
  .author-info-block {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    .avatar-link {
      font-size: 0;
    }
    .avatar {
      flex: 0 0 auto;
      margin-right: 12px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-image: url(https://mirror-gold-cdn.xitu.io/168e0858b6ccfd57fe5?imageView2/1/w/100/h/100/q/85/format/webp/in);
    }
  }
  .author-info-box {
    min-width: 0;
    flex-grow: 1;
    .username {
      display: inline-block;
      max-width: 100%;
      font-size: 15px;
      font-weight: 700;
      color: #333;
    }
    .ellipsis {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .meta-box {
      font-size: 13px;
      color: #909090;
    }
    .time {
      letter-spacing: 1px;
    }
    .views-count {
      margin-left: 6px;
    }
  }
  .article-hero {
    margin-bottom: 24px;
    width: 100%;
  }
  .article-title {
    margin: 8px 0;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.5;
  }
}
.article-content {
  width: 100%;
  word-break: break-word;
  line-height: 1.75;
  font-weight: 400;
  font-size: 15px;
  overflow-x: hidden;
}
</style>
