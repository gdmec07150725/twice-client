<template>
  <div class="editor-wrapper">
    <div class="rich-text-editor">
      <header class="rich-text-editor-header">
        <div class="header-content">
          <div class="logo" @click="handleGoHome"></div>
          <div class="status-text with-padding">
            文章将会自动保存至
            <a>草稿</a>
          </div>
          <div class="main-image-selector with-padding unset">
            <div
              class="toggle-btn"
              :class="{ hasCoverImage: richForm.coverImage ? true : false }"
              @click.stop="handleToggleCoverImage"
            ></div>
            <div
              class="panel"
              v-if="toggleCoverImage"
              v-click-out="handleToggleCoverImage"
            >
              <div class="title">添加封面大图</div>
              <template v-if="!richForm.coverImage">
                <button class="select-btn" @click.stop="handleUpload">
                  点击此处添加图片
                </button>
              </template>
              <template v-else>
                <img
                  :src="richForm.coverImage"
                  width="240"
                  @click.stop="handleUpload"
                  class="coverImage"
                />
              </template>
            </div>
            <customizeUpload
              ref="customizeUpload"
              @onHandleImageUrl="handleImageUrl"
            />
          </div>
          <div class="publish-popup with-padding">
            <div class="toggle-btn" @click.stop="handleTogglePublish">
              <span class="title">
                发布
              </span>
              <icon-font
                :icon="
                  togglePublish ? 'iconsanjiao_up_s' : 'iconsanjiao_down_s'
                "
                :size="18"
              />
            </div>
            <div
              class="panel"
              v-if="togglePublish"
              v-click-out="handleTogglePublish"
            >
              <div class="title">发布文章</div>
              <div class="category-box">
                <div class="sub-title">前端</div>
                <div class="category-list">
                  <div class="item">JavaScript</div>
                  <div class="item">Node.js</div>
                  <div class="item">TypeScript</div>
                  <div class="item">ES6</div>
                  <div class="item">React.js</div>
                  <div class="item">Vue.js</div>
                </div>
              </div>
              <button class="publish-btn">确定并发布</button>
            </div>
          </div>
          <nav
            class="navigator main-navigator with-padding"
            @click="e => handleAvatarClick(e)"
          >
            <avatar-navigation />
          </nav>
        </div>
      </header>
      <main class="rich-text-editor-main">
        <textarea
          placeholder="请输入标题"
          maxlength="80"
          rows="1"
          class="title-input"
          v-model="richForm.title"
        ></textarea>
        <quill-editor
          :value="richForm.content"
          :needReload="false"
          formName="article"
          language="zh_cn"
          defaultHeight="calc(100vh - 61px)"
          @input="value => handleQuillEditorInput(value)"
          class="quillEditor"
        />
      </main>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex';
import avatarNavigation from '@/components/avatarNavigation';
import quillEditor from '_c/quillEditor/quillEditor.vue';
import customizeUpload from '_c/customizeUpload';
export default {
  name: 'articleContent',
  components: {
    avatarNavigation,
    quillEditor,
    customizeUpload,
  },
  data() {
    return {
      richForm: {
        title: '',
        content: '',
        coverImage: '',
      },
      toggleCoverImage: false,
      togglePublish: false,
    };
  },
  methods: {
    ...mapActions(['insertArticle']),
    ...mapMutations(['CHANGESHOWUSERDROPDOWN']),
    handleToggleCoverImage() {
      this.toggleCoverImage = !this.toggleCoverImage;
    },
    handleTogglePublish() {
      this.togglePublish = !this.togglePublish;
    },
    handleQuillEditorInput(value) {
      if (value) {
        console.log(value);
        this.richForm.content = value;
      }
    },
    handleGoHome() {
      this.$router.push({ name: 'home' });
    },
    handleUpload() {
      this.$refs['customizeUpload'] &&
        this.$refs['customizeUpload'].handleUpload();
    },
    handleImageUrl(url) {
      this.richForm.coverImage = url;
    },
    handleAvatarClick(e) {
      e.stopPropagation();
      this.CHANGESHOWUSERDROPDOWN();
    },
    async handleInsertArticle() {
      try {
        const { title, content, coverImage } = this.richForm;
        if (title && content) {
          const params = {
            categoryId: 1,
            companyId: 1,
            userId: 1,
            title,
            content,
            image: coverImage,
          };
          const res = await this.insertArticle(params);
          if (res && res.message) {
            alert(res.message);
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style lang="less" scoped>
@import './index.less';
</style>
