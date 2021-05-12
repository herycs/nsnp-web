import React, { useEffect } from "react";
import { useState, useCallback } from "react";
import { useHistory } from "react-router";
import {
  Cell,
  FilePicker,
  Icon,
  Toast,
  Badge,
  Input,
  Button,
  Picker,
} from "zarm";
import { getChannel, uploadFile, addChannel, addArticle } from "../../request";
import "./index.scss";

const MAX_FILES_COUNT = 1;

// const SINGLE_DATA = [{ value: '999', label: '添加新标签' }];

const onBeforeSelect = () => {
  // alert('执行 onBeforeSelect 方法');
};

function PushArticle({ handleSetHeader }) {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");
  const [data, setData] = useState("");
  const [newChannel, setNewChannel] = useState("");
  const [showAddChannel, setShowAddChannel] = useState(false);
  const [imgs, setImgs] = useState("");
  const [channel, setChannel] = useState([
    { value: "999", label: "添加新标签" },
  ]);

  const getChannelList = () => {
    getChannel().then((res) => {
      console.log(res);
      setChannel([
        ...channel,
        ...res.data.map((item) => {
          return { value: item.id, label: item.name };
        }),
      ]);
    });
  };
  
  const handleAddChannel = () => {
    let data = { name: newChannel, status: 1 };
    addChannel(data).then((res) => {
      if (res.code === 20000) {
        Toast.show({
          content: "添加成功",
        });
        setShowAddChannel(false);
        setChannel([]);
        setTimeout(() => {
          getChannelList();
        }, 200);
        setValue("");
      }
    });
  };
  useEffect(() => {
    getChannelList();
  }, []);
  const onSelect = (selFiles) => {
    // console.log(selFiles[0]);
    const newFiles = files.concat(selFiles);
    if (newFiles.length > MAX_FILES_COUNT) {
      Toast.show("最多只能选择5张图片");
      return;
    }
    let formData = new FormData();
    // console.log(selFiles);
    formData.append("file", selFiles[0].file);
    uploadFile(formData).then((res) => {
      setImgs(res.data);
    });
    setFiles(newFiles);
  };

  const remove = (index) => {
    const newFiles = [].concat(files);
    newFiles.splice(index, 1);
    setFiles(newFiles);
    Toast.show("删除成功");
  };

  const handleSubmit = () => {
    let data = {
      title,
      content,
      channelid: value[0],
      image: imgs,
      columnid: "",
    };
    addArticle(data).then((res) => {
      if (res.code === 20000) {
        history.push("/home");
      }
    });
  };

  useEffect(() => {
    handleSetHeader("发布动态", true);
  });

  const imgRender = () => {
    return files.map((item, index) => {
      return (
        <Badge
          key={+index}
          className="file-picker-item"
          shape="circle"
          text={
            <span className="file-picker-closebtn">
              <Icon type="wrong" />
            </span>
          }
          onClick={() => remove(index)}
        >
          <div className="file-picker-item-img">
            <a href={item.thumbnail} target="_blank" rel="noopener noreferrer">
              <img src={item.thumbnail} alt="" />
            </a>
          </div>
        </Badge>
      );
    });
  };

  return (
    <div className="push-article" style={{ marginTop: 20 }}>
      <Cell title="标题">
        <Input type="text" onChange={setTitle} placeholder="请输入标题" />
      </Cell>
      <Cell
        description={
          <div className="add-channel">
            {showAddChannel ? (
              <div style={{ display: "flex", marginRight: 20 }}>
                <Input
                  type="text"
                  value={newChannel}
                  onChange={setNewChannel}
                  placeholder="请输入新标签"
                  style={{ marginRight: 20 }}
                />
                <Button
                  size="xs"
                  onClick={handleAddChannel}
                  style={{ width: 50 }}
                >
                  添加
                </Button>
              </div>
            ) : (
              ""
            )}
            {!value || showAddChannel ? (
              <Button size="xs" onClick={() => setVisible(true)}>
                选择
              </Button>
            ) : (
              <span onClick={() => setVisible(true)}>{data}</span>
            )}
          </div>
        }
      >
        标签
      </Cell>
      <Cell title="分享新鲜事" style={{ marginTop: 10 }}>
        <Input
          type="text"
          rows={5}
          placeholder="请输入内容"
          value={content}
          onChange={setContent}
        />
      </Cell>
      <Cell style={{ marginTop: 10, paddingTop: 10, paddingBottom: 10 }}>
        <div className="file-picker-wrapper">
          {imgRender()}
          {files.length < MAX_FILES_COUNT && (
            <FilePicker
              multiple
              className="file-picker-btn"
              accept="image/*"
              onBeforeSelect={onBeforeSelect}
              onChange={onSelect}
            >
              <Icon type="add" size="lg" />
            </FilePicker>
          )}
        </div>
      </Cell>
      <Picker
        visible={visible}
        value={value}
        dataSource={channel}
        defaultValue="0"
        onOk={(selected) => {
          if (+selected[0].value === 999) {
            setShowAddChannel(true);
          }
          // console.log('Single Picker onOk: ', selected[0]);
          // Toast.show(JSON.stringify(selected));
          setValue(selected.map((item) => item.value));
          setData(selected.map((item) => item.label));
          // setValue(
          //   'single',
          //   selected.map((item) => item.value)
          // );

          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      />
      <Button onClick={handleSubmit}>提交</Button>
    </div>
  );
}

export default PushArticle;
