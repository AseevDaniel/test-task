import { postRequest } from "../apiConfig.jsx";

const LOGIN_URL = "/login";
const UPDATE_URL = "/update";
const REGISTER_URL = "/register";
export const loginRequest = (requestData) => {
  return postRequest({
    url: LOGIN_URL,
    ...requestData,
  });
};

export const updateRequest = (requestData) => {
  return postRequest({
    url: UPDATE_URL,
    ...requestData,
  });
};

export const registerRequest = (requestData) => {
  return postRequest({
    url: REGISTER_URL,
    ...requestData,
  });
};
