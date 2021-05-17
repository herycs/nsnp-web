import { baseUrl, chatUrl } from "./const";

import axiosInstance from "./axios";
//
export { baseUrl, chatUrl };

const userid = localStorage.getItem("userid");

export { userid };

/**
 * 登录注册
 */
export const login = (data) => axiosInstance.post("user/user/login", data);
export const register = (data) =>
  axiosInstance.post(`user/user/register/${data.code}`, data);

/**
 * 文章页
 */
export const collectArticle = (aid) =>
  axiosInstance.get("/article/article/collect/" + aid + "/" + userid);

export const getAllArticle = () =>
  axiosInstance.get("article/article/recommend/" + userid);
export const uploadFile = (data) =>
  axiosInstance.post("/article/resource/upload", data);
export const getChannel = () => axiosInstance.get("article/channel");
export const addChannel = (data) => axiosInstance.post("article/channel", data);
export const addArticle = (data) =>
  axiosInstance.post("/article/article", { ...data, userid });

export const getArticle = (id) =>
  axiosInstance.get("/article/article/" + id + "/" + userid);

export const getComment = (id) =>
  axiosInstance.get("/article/article/comment/" + id);
export const addComment = (data) =>
  axiosInstance.post("/article/article/comment", { ...data, uid: userid });

export const setThumbUp = (id) =>
  axiosInstance.get("/article/article/thumbup/" + id);
export const setThumbDown = (id) =>
  axiosInstance.get("/article/article/thumbdown/" + id);

/**
 * 探索页
 */
export const getGroup = () =>
  axiosInstance.get("/article/column/in/limit/" + userid);
export const getRankList = () => axiosInstance.get("/article/column/hot");
export const getUserInfo = () => axiosInstance.get("/user/user/info/" + userid);

export const getLifeRecommendArticle = (id) =>
  axiosInstance.get(`/article/article/life/${id}` + "/" + userid);

export const getGroupDetail = (id) =>
  axiosInstance.get(`/article/group/${id}/`);

export const getGroupItem = (id) => axiosInstance.get(`/article/column/${id}/`);

export const getUserVisit = () =>
  axiosInstance.get(`/article/column/visit/limit/${userid}`);

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
export const changeUserInfo = (data) =>
  axiosInstance.post("/user/user/update", data);
export const sendCode = (phoneNumber) =>
  axiosInstance.post("/user/user/sendsms/" + phoneNumber);
export const changePassword = ({ code, data }) =>
  axiosInstance.post("/user/user/pass/" + code, data);

// 粉丝 + 关注

//增加好友，移除好友
export const addFriend = (friendId) =>
  axiosInstance.get("/user/friend/add/" + userid + `/${friendId}`);
export const delFriend = (friendId) =>
  axiosInstance.get("/user/friend/del/" + userid + `/${friendId}`);

export const getFriendList = () =>
  axiosInstance.get("/user/friend/friends/" + userid);
export const getFunList = () => axiosInstance.get("/user/friend/fun/" + userid);
export const getLikeList = () =>
  axiosInstance.get("/user/friend/like/" + userid);

// 用户个人发帖

export const getUserHistory = () =>
  axiosInstance.get("/article/article/history/" + userid);

export const getUserArticle = () =>
  axiosInstance.get("/article/article/record/" + userid);

export const getUserLifeRecordList = () =>
  axiosInstance.get("/article/article/life/" + userid);

export const getUserGroupList = () =>
  axiosInstance.get("/article/column/in/" + userid);

export const getCollect = () =>
  axiosInstance.get("/article/article/collect/" + userid);

// 评论列表
export const getCommentList = () =>
  axiosInstance.get("/article/article/rc/" + userid);

// 点赞列表
export const getThumbList = () =>
  axiosInstance.get("/article/article/comm/" + userid);

// 资源管理
export const addResource = (aid) =>
  axiosInstance.get("/resource/source/" + aid + "/" + userid);
export const getResourceList = () =>
  axiosInstance.get("/article/resource/" + userid);
export const updateResourceList = (id, data) =>
  axiosInstance.post("/articel/resource/update/" + id, data);
export const delRessource = (id) =>
  axiosInstance.delete("/articel/resource/del/" + id);
export const findSourceList = (name) =>
  axiosInstance.get(`/article/resource/find/${name}`);
