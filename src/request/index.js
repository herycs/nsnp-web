import axiosInstance from "./axios";

const IP = "localhost";

const userid = localStorage.getItem("userid");

/**
 * 登录注册
 */
export const login = (data) => axiosInstance.post("user/user/login", data);
export const register = (data) =>
  axiosInstance.post(`user/user/register/${data.code}`, data);

/**
 * 文章页
 */
export const getAllArticle = () => axiosInstance.get("article/article");
export const uploadFile = (data) =>
  axiosInstance.post("/article/resource/upload", data);
export const getChannel = () => axiosInstance.get("article/channel");
export const addChannel = (data) => axiosInstance.post("article/channel", data);
export const addArticle = (data) =>
  axiosInstance.post("article/article", { ...data, userid });
export const getArticle = (id) => axiosInstance.get("article/article/" + id);

export const getComment = (id) =>
  axiosInstance.get("/article/article/comment/" + id);
export const addComment = (data) =>
  axiosInstance.post("/article/article/comment", { ...data, uid: userid });

export const setThumbUp = (id) =>
  axiosInstance.get("/article/article/thumbup/" + id);
export const setThumbDown = (id) =>
  axiosInstance.get("/article/article/thumbdown/" + id);

export const baseUrl = "http://" + IP + ":9004";
export const chatUrl = "http://" + IP + ":8090/nsnp";

/**
 * 探索页
 */
export const getGroup = () =>
  axiosInstance.get("/article/column/in/limit/" + userid);
export const getRankList = () => axiosInstance.get("/article/column/hot");

/**
 * 聊天模块
 */
export const getChatList = () => axiosInstance.get("/user/chat/list/" + userid);
export const getSystemNotice = () =>
  axiosInstance.get("/user/chat/list/notice/" + userid);
export const recordChatHistory = (id) =>
  axiosInstance.get(`/user/chat/record/${userid}/${id}`);

/**
 * 【我的】模块
 */
export const getUserInfo = () => axiosInstance.get("/user/user/info/" + userid);
export const changeUserInfo = (data) =>
  axiosInstance.post("/user/user/update", data);
export const sendCode = (phoneNumber) =>
  axiosInstance.post("/user/user/sendsms/" + phoneNumber);
export const changePassword = ({ code, data }) =>
  axiosInstance.post("/user/user/pass/" + code, data);

// 粉丝 + 关注
export const getFriendList = () =>
  axiosInstance.get("/user/friend/friends/" + userid);
export const getFunList = () => axiosInstance.get("/user/friend/fun/" + userid);
export const getLikeList = () =>
  axiosInstance.get("/user/friend/like/" + userid);

// 用户个人发帖

export const getUserArticle = () =>
  axiosInstance.get("/article/article/record/" + userid);
export const getCollect = () =>
  axiosInstance.get("/article/article/collect/" + userid);
// 评论列表
export const getCommentList = () =>
  axiosInstance.get("/article/article/rc/" + userid);
// 点赞列表
export const getThumbList = () =>
  axiosInstance.get("/article/article/comm/" + userid);

// 资源管理

export const getResourceList = () =>
  axiosInstance.get("/article/resource/" + userid);
export const updateResourceList = (id, data) =>
  axiosInstance.post("/articel/resource/update/" + id, data);
export const delRessource = (id) =>
  axiosInstance.delete("/articel/resource/del/" + id);
