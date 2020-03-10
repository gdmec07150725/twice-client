<template>
  <div class="welcome-context">
    <context-left>
      <div
        slot="leftContent"
        v-html="content"
        class="ql-editor article-content"
      ></div>
    </context-left>
    <context-right />
  </div>
</template>
<script>
import contextLeft from '@/components/context/contextLeft.vue';
import contextRight from '@/components/context/contextRight.vue';
export default {
  name: 'articleDetail',
  components: {
    contextLeft,
    contextRight,
  },
  data() {
    return {
      content:
        '<h1>从零到一教你基于vue开发一个组件库</h1><h3>前言</h3><p>Vue是一套用于构建用户界面的渐进式框架,目前有越来越多的开发者在学习和使用.在笔者写完 <a href="https://juejin.im/post/5e4d3a8de51d45270a709954" rel="noopener noreferrer" target="_blank">从0到1教你搭建前端团队的组件系统</a> 之后很多朋友希望了解一下如何搭建基于vue的组件系统,所以作为这篇文章的补充,本文来总结一下如何搭建基于vue的组件库.</p><p>虽然笔者有近2年没有从事vue的开发了,但平时一直在关注vue的更新和发展, 笔者一直认为技术团队的组件化之路重点在于基础架构的搭建以及组件化的设计思想,我们完全可以采用不同的框架实现类似的设计,所以<strong>透过现象看本质,思想才是最重要的</strong>.本文主要教大家通过使用vue-cli3</p><p>一步步搭建一个组件库并发布到npm上,但笔者认为重点不在于实现搭建组件库的具体方式,而在于设计组件库的思想和取舍.</p><p><br></p><p>作者：徐小夕_Lab实验室</p><p>链接：https://juejin.im/post/5e63d1c36fb9a07cb427e2c2</p><p>来源：掘金</p><p>著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p><p><br></p><h2>你将收获</h2><ul><li>使用vue-cli3搭建团队的组件库并发布到npm</li><li>npm发包的常用基础知识</li></ul><p><br></p><h2>相关资料</h2><ul><li><a href="https://juejin.im/post/5e4d3a8de51d45270a709954" rel="noopener noreferrer" target="_blank" style="color: rgb(2, 105, 200);">从0到1教你搭建前端团队的组件系统（高级进阶必备）</a></li><li><a href="https://juejin.im/post/5d1782eaf265da1ba91592fc" rel="noopener noreferrer" target="_blank" style="color: rgb(2, 105, 200);">一张图教你快速玩转vue-cli3</a></li><li><a href="https://juejin.im/user/5b985481f265da0a87264251/posts" rel="noopener noreferrer" target="_blank" style="color: rgb(2, 105, 200);">vue项目实战经验汇总</a></li></ul><p><br></p>',
    };
  },
};
</script>
<style lang="less" scoped>
.article-content {
  word-break: break-word;
  line-height: 1.75;
  font-weight: 400;
  font-size: 15px;
  overflow-x: hidden;
}
</style>
