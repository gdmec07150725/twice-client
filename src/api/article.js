import Restful from './restful';
import { stringify } from 'qs';

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
   * @param {*} params
   */
  async getArticleList(params) {
    return Restful.get(
      `/user-service/articles/company/${params.companyId}?${stringify(params)}`
    );
  }

  /**
   * 获取文章详情
   * @param {*} companyId (后面做好登录之后，不需要传公司id了)
   */
  async getArticleDetail(articleId) {
    return Restful.get(`/user-service/articles/${articleId}`);
  }

  /**
   * 获取分类数据
   * @param {*} params
   */
  async getCategoryList(params) {
    return Restful.get(`/user-service/categories/company?${stringify(params)}`);
  }

  /**
   * 获取二级分类
   * @param {*} id
   */
  async getChildCategory(id) {
    return Restful.get(`/user-service/categories/first/${id}`);
  }
}
export default new Article();
