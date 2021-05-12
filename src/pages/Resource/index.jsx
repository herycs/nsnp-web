import "./index.scss";
import { Input } from "zarm";
import { useHistory } from "react-router";
import React, { useEffect, useState } from "react";
import { getResourceList, findSourceList } from "../../request";

function SearchSource(name, setSourceList) {
  findSourceList(name).then((res) => {
    if (res.code === 20000) {
      setSourceList(res.data);
    } else if (res.code === 20001) {
      setSourceList(null);
    }
  });
}

function Resource({ handleSetHeader }) {
  const history = useHistory();

  const [sourceList, setSourceList] = useState([]);
  const [name, setName] = useState([]);

  useEffect(() => {
    handleSetHeader("资源", true);
  });

  useEffect(() => {
    getResourceList().then((res) => {
      if (res.code === 20000) {
        console.log(res.data);
        setSourceList(res.data);
      }
    });
  }, []);

  return (
    <div className="source-wrapper">
      <div className="search">
        <Input
          clearable
          type="text"
          placeholder="输入资源名称"
          value={name}
          onChange={setName}
        />
        <div
          className="button"
          onClick={() => {
            SearchSource(name, setSourceList);
          }}
        >
          检索
        </div>
        <div
          className="push"
          onClick={() => {
            console.log(111);
            history.push("/upload_resource");
          }}
        >
          发布
        </div>
      </div>
      {!sourceList || sourceList.length == 0 ? (
        <div className="notice">
          <div className="no-resource-toast">未找到您需要的资源哦~</div>
        </div>
      ) : (
        sourceList.map((item, index) => {
          return (
            <div key={index} className="source">
              <div className="title">{item.name}</div>
              <div className="detail">
                <div className="upload-time">上传时间：{item.uploadtime}</div>
                <div className="update-time">更新时间: {item.updatetime}</div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Resource;
