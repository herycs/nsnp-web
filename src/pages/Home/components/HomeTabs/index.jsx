import { useEffect, useState } from 'react';
import { Tabs, Loading } from 'zarm';

const { Panel } = Tabs;

const HomeTabs = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <Tabs
      value={value}
      onChange={(e) => {
        setValue(e);
        Loading.show();
        setTimeout(() => {
          Loading.hide();
        }, 1200);
      }}
    >
      <Panel title='推荐'></Panel>
      <Panel title='娱乐'></Panel>
      <Panel title='热点'></Panel>
    </Tabs>
  );
};
export default HomeTabs;
