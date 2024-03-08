import { postRequest } from "../apiConfig.js";

const LOGIN_URL = "/login";
const REGISTER_URL = "http://localhost:8001";
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
