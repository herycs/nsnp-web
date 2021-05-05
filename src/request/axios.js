import axios from 'axios';
import { Toast } from 'zarm';

const axiosInstance = axios.create({
  // baseURL: 'http://192.168.43.172:9004/',
  // baseURL: 'http://192.168.76.172:9004/',
  baseURL: 'http://localhost:9004/',
  timeout: 2500,
  // headers: {'X-Custom-Header': 'foobar'}
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
