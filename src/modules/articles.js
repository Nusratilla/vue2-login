import ArticleService from "@/service/sarticles";

const state = {
  isLoading: false,
  data: null,
  error: null,
  articleDetaile: null,
};

const mutations = {
  getArticlesStart(state) {
    state.isLoading = true;
    state.data = null;
    state.error = null;
  },
  getArticlesSuccess(state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  getArticlesFailure(state) {
    state.isLoading = false;
  },

  getArticleDetailStart(state) {
    state.isLoading = true;
    state.articleDetaile = null;
    state.error = null;
  },
  getArticleDetailSuccess(state, payload) {
    state.isLoading = false;
    state.articleDetaile = payload;
  },
  getArticleDetailFailure(state) {
    state.isLoading = false;
  },
};

const actions = {
  articles(context) {
    return new Promise((resolve, reject) => {
      context.commit("getArticlesStart");
      ArticleService.articles()
        .then((response) => {
          console.log("RESPONSE", response);
          context.commit("getArticlesSuccess", response.data.articles);
          resolve(response.data.articles);
        })
        .catch(() => context.commit("getArticlesFailure"));
    });
  },
  articleDetaile(context, slug) {
    return new Promise((resolve, reject) => {
      context.commit("getArticleDetailStart");
      ArticleService.articleDetaile(slug)
        .then((response) => {})
        .catch(() => {});
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
