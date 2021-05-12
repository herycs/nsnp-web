import { useEffect, useState } from "react";
import { Tabs, Loading } from "zarm";

const { Panel } = Tabs;

const HomeTabs = ({ handleChange }) => {
  const [value, setValue] = useState("recommend");
  const [cur, setCur] = useState(0);

  useEffect(() => {
    handleChange("recommend");
  }, []);

  useEffect(() => {
    handleChange(value);
  }, [value]);

  return (
    <Tabs
      value={cur}
      onChange={(e) => {
        setCur(e);
        if (e === 0) {
          setValue("recommend");
        }

        if (e === 1) {
          setValue("happyList");
        }
        if (e === 2) {
          setValue("hotList");
        }
        // setValue(e);
        Loading.show();
        setTimeout(() => {
          Loading.hide();
        }, 1200);
      }}
    >
      <Panel title="推荐"></Panel>
      <Panel title="娱乐"></Panel>
      <Panel title="热点"></Panel>
    </Tabs>
  );
};
export default HomeTabs;
