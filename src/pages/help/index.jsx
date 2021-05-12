import "./index.scss";
import React, { useEffect } from "react";

const QAMap = [
  {
    q: "密码忘记怎么找回？",
    a: "点击我的 -> 右上角可以找到设置 -> 账号安全",
  },
  {
    q: "怎么看到我的历史记录？",
    a: "点击我的，在用户模块有可以查看历史记录的地方",
  },
  {
    q: "怎么加入圈子？",
    a:
      "文章详情顶部有圈子按钮，可以点击，探索模块也对可能感兴趣的圈子有记录, 点击加入即可",
  },
];

function Help({ handleSetHeader }) {
  useEffect(() => {
    handleSetHeader("帮助反馈", true);
  });

  return (
    <div className="help-wrapper">
      <div className="qa-wrapper">
        {QAMap.map((item, index) => {
          return (
            <div>
              <div key={index} className="question-wrapper">
                <div className="q-title">提问：</div>
                <div className="q-content">{item.q}</div>
              </div>
              <div className="answer-wrapper">
                <div className="a-title">回答：</div>
                <div className="a-content">{item.a}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Help;
