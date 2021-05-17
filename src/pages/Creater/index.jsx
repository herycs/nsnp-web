import "./index.scss";
import React, { useEffect } from "react";
import { baseUrl } from "../../request";

function Creater({ userInfo, handleSetHeader }) {
  useEffect(() => {
    handleSetHeader(" ", true);
  });

  // const [cur, setCur] = useState(0);

  // useEffect(() => {
  //   getUserArticle().then((res) => {
  //   if (res.code === 20000) {
  // console.log(res);
  // }
  //   });
  // }, [input]);

  return (
    <div className="creater-wrapper">
      <div className="title-wrapper">
        <div className="title">创作者</div>
      </div>

      <div className="user-info-wrapper">
        <div className="user-info">
          <div className="user-wrapper">
            <div className="info-summary">
              <img src={baseUrl + userInfo.avatar} alt="" />
            </div>
            <div className="name-wrapper">
              <div className="user-nickname">{userInfo.nickName}</div>
            </div>
          </div>

          <div className="user-count">
            <div className="user-count-item">帖子数：3</div>
            <div className="user-count-item">浏览量>50:0</div>
            <div className="user-count-item">原创帖：3</div>
          </div>
        </div>
      </div>

      <div className="direction-wrapper">
        <div className="direction-title">什么是创作者？</div>
        <div className="direction-content">
          <div className="direction-item">
            1.主题明确、内容完整、画面清晰、后期制作精良的图片或其他作品
          </div>
          <div className="direction-item">
            2.自己拍摄、绘制对原创文字进行整理的图片
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creater;
