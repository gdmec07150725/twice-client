import Restful from './restful';
// import { stringify } from 'qs';

class Article {
  /**
   * 新增文章
   * @param {*} params
   */
  async insertArticle(params) {
    return Restful.post(`/user-service/articles`, params);
  }

  /**
   * 获取文章列表
   * @param {*} companyId (后面做好登录之后，不需要传公司id了)
   */
  async getArticleList(companyId) {
    return Restful.get(`/user-service/articles/company/${companyId}`);
  }

  /**
   * 获取文章详情
   * @param {*} companyId (后面做好登录之后，不需要传公司id了)
   */
  async getArticleDetail(articleId) {
    return Restful.get(`/user-service/articles/${articleId}`);
  }
}
export default new Article();
