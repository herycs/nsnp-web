import React, { useState } from "react";
import "./index.scss";

// import { useState } from 'react';
import { TabIcon } from "../../assets/icon";
import { baseUrl, collectArticle } from "../../request";

const Options = ({ item, handleChangeWriteModal }) => {
  // console.log(item);
  const [count1] = useState(0);
  const [count2] = useState(0);
  const [count3, setCount3] = useState(0);

  const following = () => {
    collectArticle(item.id).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="options-wrapper">
      <div
        className="options-item"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          following();
          // setCount1((e) => {
          //   return e ? 0 : 1;
          // });
        }}
      >
        <TabIcon type="iconshoucang" 
        onClick={() => {collectArticle(item.id)}}
        />
        <span>{+item.share + count1}</span>
      </div>
      <div
        className="options-item"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleChangeWriteModal();
          // setCount2((e) => {
          //   return e ? 0 : 1;
          // });
        }}
      >
        <TabIcon type="iconpinglun" />
        <span>{+item.comment + count2}</span>
      </div>
      <div
        className="options-item"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setCount3((e) => {
            return e ? 0 : 1;
          });
        }}
      >
        <TabIcon
          type="iconzan"
          style={{ color: count3 ? "rgb(20, 158, 255)" : "" }}
        />
        <span style={{ color: count3 ? "rgb(20, 158, 255)" : "" }}>
          {+item.thumbup + count3}
        </span>
      </div>
    </div>
  );
};

function TrendCard({ item, handleClick, handleChangeWriteModal }) {
  console.log(item);
  return (
    <div className="trend-wrapper" onClick={() => handleClick(item)}>
      {item ? (
        <>
          {/* <p></p> */}
          <div
            dangerouslySetInnerHTML={{
              __html: item.content,
            }}
          ></div>
          <img src={baseUrl + item.image} alt=""></img>
          <Options
            item={item}
            handleChangeWriteModal={handleChangeWriteModal}
          ></Options>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default TrendCard;
