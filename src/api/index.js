import axios from "axios";

const headers = {
  "app-id": "613a7d5c257b3bb444e4e5ba",
  "Content-Type": "application/json",
  Accept: `application/vnd.iman.v1+json, application/json, text/plain, */*`,
  "Access-Control-Allow-Origin": "*",
  "Cache-Control": "no-store, no-cache, must-revalidate",
  Pragma: "no-cache",
};

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
instance.defaults.timeout = 10200;

async function sendInformation(url, options) {
  let response = await instance.request({
    url: url,
    data: options.data,
    method: options.method,
    headers: { ...headers, ...options.headers },
    ...options,
  });
  return response;
}

export const get = async (url, options = {}) => {
  return await sendInformation(url, {
    method: "get",
    ...options,
  });
};

export const post = async (url, options = {}) => {
  return await sendInformation(url, {
    method: "post",
    data: options.data,
    ...options,
  });
};

export const put = async (url, options = {}) => {
  return await sendInformation(url, {
    method: "put",
    data: options.data,
    ...options,
  });
};

export const del = async (url, options = {}) => {
  return await sendInformation(url, {
    method: "delete",
    data: options.data,
    ...options,
  });
};
