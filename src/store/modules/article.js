import articleMock from '@/lib/articleMock';
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
  // 获取文章列表数据
  getArticleList({ commit }) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
        commit('SAVE_ARTICLE_LIST', articleMock);
      }, 200);
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
