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
              @click="handleToggleCoverImage"
            ></div>
            <div class="panel" v-if="toggleCoverImage">
              <div class="title">添加封面大图</div>
              <template v-if="!richForm.coverImage">
                <button class="select-btn" @click="handleUpload">
                  点击此处添加图片
                </button>
              </template>
              <template v-else>
                <img
                  :src="richForm.coverImage"
                  width="240"
                  @click="handleUpload"
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
            <div class="toggle-btn">
              <span class="title" @click="handleInsertArticle">发布</span>
              <icon-font icon="icondaosanjiao" />
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
    };
  },
  methods: {
    ...mapActions(['insertArticle']),
    ...mapMutations(['CHANGESHOWUSERDROPDOWN']),
    handleToggleCoverImage() {
      this.toggleCoverImage = !this.toggleCoverImage;
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
