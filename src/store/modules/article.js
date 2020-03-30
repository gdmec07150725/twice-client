/* eslint-disable no-unused-vars */
import article from '@/api/article';
const defaultPagination = {
  page: 1,
  rows: 15,
  total: 0,
  totalPage: 0,
};

const state = {
  articleList: [],
  pagination: { ...defaultPagination },
  categoryList: [],
  childCategory: [],
  secondItem: '', // 选中的一级分类
  thirdItem: '', // 选中的二级分类
};
const mutations = {
  SAVE_ARTICLE_LIST(state, data) {
    const { pagination } = state;
    let { articleList } = state;
    pagination.page = data.currentPage;
    pagination.total = data.total;
    pagination.totalPage = data.totalPage;
    state.pagination = { ...pagination };
    state.articleList = [...articleList, ...data.result];
  },
  REST_ARTICLE_LIST(state) {
    state.articleList = [];
  },
  SAVE_CATEGORY_LIST(state, data) {
    let { categoryList } = state;
    categoryList = [...data];
    state.categoryList = categoryList;
  },
  SAVE_CHILD_CATEGORY(state, data) {
    let { childCategory } = state;
    childCategory = [...data];
    state.childCategory = childCategory;
  },
  SET_CATEGORY(state, params) {
    const { target, value } = params;
    if (target) {
      state[target] = value;
    }
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
  getArticleList({ commit }, params) {
    return new Promise((resolve, reject) => {
      article
        .getArticleList(params)
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
  // 获取分类数据
  getCategoryList({ commit }, params) {
    return new Promise((resolve, reject) => {
      article.getCategoryList(params).then(res => {
        commit('SAVE_CATEGORY_LIST', res);
        resolve(res);
      });
    });
  },

  // 通过一级分类查询二级分类
  getChildCategory({ commit }, id) {
    return new Promise((resolve, reject) => {
      article.getChildCategory(id).then(res => {
        commit('SAVE_CHILD_CATEGORY', res);
        resolve(res);
      });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
