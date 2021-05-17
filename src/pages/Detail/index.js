import { Collapse } from "zarm";
import Comments from "../../components/Comments";
import TrendCard from "../../components/TrendCard";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator } from "../../store/modules/home";
import { useHistory } from "react-router";
import { useState, useCallback, useEffect } from "react";
import { Popup, Cell, Button, Input } from "zarm";
import "./index.scss";
import { baseUrl, getArticle, getComment, getGroupItem } from "../../request";

const item = {
  id: "2123bsa",
  name: "张三",
  avatar: "https://dummyimage.com/200x200",
  url: "/api/png/plane.jpg",
  desc: "",
  content:
    "今年我们将从全世界招进20-30名天才少年，华为公司未来要拖着这个世界往前走。",
  share: 23,
  like: 99,
  comment: 9,
};

const UserInfo = ({ data }) => {
  return (
    <div className="userinfo">
      <div className="avatar">
        <img src={baseUrl + data.avatar} alt=""></img>
      </div>
      <div className="user">
        <p className="name">{data.nickname}</p>
        <p className="desc">{data.interest.slice(2, 9)}</p>
      </div>
    </div>
  );
};

const GroupBar = ({ id }) => {
  const history = useHistory();
  const [group, setGroup] = useState([]);
  useEffect(() => {
    getGroupItem(id).then((res) => {
      setGroup(res.data);
    });
  }, []);

  return (
    <div className="group-list">
      <div
        className="group-item"
        style={{ backgroundImage: `url(${baseUrl}${group.img})` }}
      >
        <div className="text">
          <p className="name">
            <span>{group.name}</span>
            <span>{group.member}</span>
          </p>
          <p className="summary">{group.summary}</p>
          <p
            className="join-in"
            onClick={() => {
              history.push(`/discuss/${group.id}`);
            }}
          >
            {" "}
            进入
          </p>
        </div>
      </div>
    </div>
  );
};

function Detail(props) {
  const id = props.location.search.slice(4);
  console.log("userinfo", props.userInfo.id);
  const show = useSelector((state) =>
    state.getIn(["home", "showWriteCommnet"])
  );
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const handleChangeWriteModal = useCallback(() => {
    dispatch(actionCreator.changeShowWirteComment(!show));
  }, [show, dispatch]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState({});

  useEffect(() => {
    // console.log(props.location.search.slice(4));
    getArticle(id).then((res) => {
      if (res.code === 20000) {
        setData(res.data);
        setLoading(true);
      }
    });
    getComment(id).then((res) => {
      if (res.code === 20000) {
        setComment(res.data);
      }
    });
  }, [id]);

  const handleRender = useCallback(() => {
    getComment(id).then((res) => {
      if (res.code === 20000) {
        setComment(res.data);
      }
    });
  }, [id]);

  return (
    <div>
      {loading ? (
        <div>
          <Collapse
            disabled
            animated={true}
            multiple={true}
            onChange={(activeKey) => {}}
            defaultActiveKey={["0"]}
          >
            <Collapse.Item
              key="0"
              title={<UserInfo data={data.userInfo} className="88" />}
            >
              <TrendCard
                item={data.articleInfo}
                handleClick={() => {}}
                handleChangeWriteModal={handleChangeWriteModal}
              ></TrendCard>
            </Collapse.Item>
          </Collapse>
          <GroupBar id={data.articleInfo.columnid}></GroupBar>
          <Comments
            id={id}
            item={item}
            data={comment}
            handleRender={handleRender}
          ></Comments>
          <Popup
            visible={show}
            direction="bottom"
            onMaskClick={() => handleChangeWriteModal()}
            // afterOpen={() => console.log('打开')}
            // afterClose={() => console.log('关闭')}
            destroy={false}
            mountContainer={() => document.body}
          >
            <div className="popup-box">
              {/* 输入框 */}

              <Cell title="回复">
                <Input
                  autoHeight
                  showLength
                  maxLength={200}
                  type="text"
                  rows={3}
                  placeholder="请输入"
                  value={value}
                  onChange={setValue}
                />
              </Cell>
              <Cell className="button-wrapper">
                <div className="zhanwei"></div>
                <Button
                  size="xs"
                  theme="primary"
                  onClick={() => {
                    console.log("submit");
                    handleChangeWriteModal();
                  }}
                >
                  提交
                </Button>
              </Cell>
            </div>
          </Popup>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Detail;
