import { Input } from "zarm";
import React, { useEffect, useState } from "react";

function UploadResoource() {
  const [name, setName] = useState([]);

  return (
    <div className="upload-wrapper">
      <div className="name">
        <span className="notice">资源名称：</span>
        <Input
          className="text"
          clearable
          type="text"
          placeholder="输入资源名称"
          value={name}
          onChange={setName}
        />
      </div>
    </div>
  );
}

export default UploadResoource;
