import { postRequest } from "../apiConfig.js";

const LOGIN_URL = "/login";
const REGISTER_URL = "/register";
export const loginRequest = (data, onPost, onFinally) => {
  return postRequest({
    url: LOGIN_URL,
    data,
    onPost,
    onFinally,
  });
};

export const registerRequest = (data, onPost, onFinally) => {
  return postRequest({
    url: REGISTER_URL,
    data,
    onPost,
    onFinally,
  });
};
