import { postRequest } from "../apiConfig.js";

const LOGIN_URL = "/login";
export const loginRequest = (data, onPost, onFinally) => {
  console.log(2);
  return postRequest({
    url: LOGIN_URL,
    data,
    onPost,
    onFinally,
  });
};
