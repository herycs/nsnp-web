import axios from 'axios';
import { Toast } from 'zarm';
import { baseUrl } from './const';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 2500,
});

const token = localStorage.getItem('token');
axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

axiosInstance.interceptors.request.use((res) => {
  // console.log(res, 'res');
  return res;
});
axiosInstance.interceptors.response.use((resp) => {
  // console.log(resp, 'resp');
  if (resp.config.method === 'post' && resp.data.code === 20000) {
    Toast.show({
      content: '操作成功',
    });
  } else if (resp.config.method === 'post') {
    Toast.show({
      content: '操作失败',
      type: 'error',
    });
  }
  return resp.data;
});

export default axiosInstance;
