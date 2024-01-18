import AuthServise from "@/service/sauth";

const state = {
  isLoading: false,
  user: null,
  errors: null,
};

const mutations = {
  registerStart(state) {
    state.isLoading = true;
    state.user = null;
    state.error = null;
  },
  registerSuccess(state, payload) {
    state.isLoading = false;
    state.user = payload;
  },
  registerFailure(state, payload) {
    state.isLoading = false;
    state.errors = payload;
  },
};
const actions = {
  register(context, user) {
    return new Promise(() => {
      context.commit("registerStart");
      AuthServise.register(user)
        .then((response) => {
          context.commit("registerSuccess", response.data.user);
          resolve(response.data.user);
        })
        .catch((error) => {
          context.commit("registerFailure", error.response.data);
          reject(error.response.data);
        });
    });
  },
};
export default {
  state,
  mutations,
  actions,
};
