import axiosInstance from './axios';

const userid = localStorage.getItem('userid');

export const login = (data) => axiosInstance.post('user/user/login', data);
export const register = (data) =>
  axiosInstance.post(`user/user/register/${data.code}`, data);
export const getAllArticle = () => axiosInstance.get('article/article');
export const uploadFile = (data) =>
  axiosInstance.post('/article/resource/upload', data);
export const getChannel = () => axiosInstance.get('article/channel');
export const addChannel = (data) => axiosInstance.post('article/channel', data);
export const addArticle = (data) =>
  axiosInstance.post('article/article', { ...data, userid });
