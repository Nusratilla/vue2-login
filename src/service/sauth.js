import axios from "./axios";

const AuthService = {
  register(user) {
    return axios.post("/user", { user });
  },
};

export default AuthService;
