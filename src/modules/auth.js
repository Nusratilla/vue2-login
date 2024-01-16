import AuthService from "@/service/sauth";

const state = {
  isLoading: false,
};

const mutations = {
  registerStart(state) {
    state.isLoading = true;
  },
  registerSuccess(state) {
    state.isLoading = false;
  },
  registerFailure(state) {
    state.isLoading = false;
  },
};
const actions = {
  register(context, user) {
    return new Promise(() => {
      AuthService.register(user)
        .then((response) => {
          console.log("Response", response);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    });
  },
};
export default {
  state,
  mutations,
  actions,
};
