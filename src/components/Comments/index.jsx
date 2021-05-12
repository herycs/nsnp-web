import React, { useState } from "react";
import "./index.scss";
import { Input, Button } from "zarm";
import { addComment, baseUrl } from "../../request";

function Comments({ item, data, id, handleRender }) {
  const [close, setClose] = useState(true);
  const [content, setContent] = useState("");
  const handleSubmit = () => {
    console.log(id);
    addComment({ content: content, articleid: id }).then((res) => {
      if (res.code === 20000) {
        handleRender();
      }
    });
  };
  return (
    <div className="comments-wrapper" style={{ paddingBottom: 100 }}>
      <div className="header">
        <span>评论</span>
        <span>排序方式</span>
      </div>
      {Array.isArray(data) &&
        data.map((item, index) => {
          const { userInfo = {}, comment = {} } = item;

          return (
            <div key={index}>
              <div className="content">
                <div className="left">
                  <img src={baseUrl + userInfo.avatar} alt="" />
                </div>
                <div className="right">
                  <span className="name">{userInfo.name}</span>
                  <span className="time">{comment.ctime}</span>
                  <span className="content1">{comment.content}</span>
                </div>
                <div
                  className="close"
                  onClick={() => {
                    setClose(true);
                  }}
                >
                  *
                </div>
              </div>
              <div className={close ? "list list-close" : "list"}>
                <div className="zw"></div>
                <div className="p-wrapper">
                  <p>
                    <span>张三</span>
                    <span>回复</span>
                    <span>李四</span>
                    <span>今天天气真好</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      <div
        style={{
          position: "fixed",
          bottom: 1,
          background: "#fff",

          width: "100vw",
          left: "50%",
          transform: "translateX(-50%)",
          // marginLeft: -20,
          // border:'5px solid #ccc'
        }}
      >
        <div
          style={{
            width: "85%",
            display: "flex",
            alignItems: "center",
            margin: "0 auto",

            borderRadius: 15,
          }}
        >
          <Input
            style={{
              // display: 'flex',
              // alignItems: 'center',
              // margin: '0 auto',
              background: "#f4f4f4",
              padding: "13px 0 15px 13px",
              borderRadius: 15,
            }}
            value={content}
            onChange={setContent}
            placeholder="发一条友善的评论"
          ></Input>
          <Button
            size="sm"
            style={{
              width: 80,
              padding: "1px 0",
            }}
            onClick={handleSubmit}
          >
            提交
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Comments;
