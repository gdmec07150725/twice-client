/* eslint-disable no-unused-vars */
import article from '@/api/article';
const defaultPagination = {
  page: 1,
  rows: 10,
  total: 0,
};

const state = {
  articleList: [],
  pagination: { ...defaultPagination },
};
const mutations = {
  SAVE_ARTICLE_LIST(state, data) {
    // const { pagination } = state;
    let { articleList } = state;
    // pagination.page = data.currentPage;
    // pagination.total = data.total;
    // state.pagination = { ...pagination };
    state.articleList = [...articleList, ...data];
  },
};
const actions = {
  // 新增文章
  insertArticle({ commit }, params) {
    return new Promise((resolve, reject) => {
      article
        .insertArticle(params)
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  // 获取文章列表数据
  getArticleList({ commit }, companyId) {
    return new Promise((resolve, reject) => {
      article
        .getArticleList(companyId)
        .then(res => {
          commit('SAVE_ARTICLE_LIST', res);
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  // 获取文章详情
  getArticleDetail({ commit }, articleId) {
    return new Promise((resolve, reject) => {
      article
        .getArticleDetail(articleId)
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
