import { useState } from 'react';
import { Tabs } from 'zarm';

const { Panel } = Tabs;

const HomeTabs = () => {
  const [value, setValue] = useState(0);

  return (
    <Tabs value={value} onChange={setValue}>
      <Panel title='推荐'></Panel>
      <Panel title='娱乐'></Panel>
      <Panel title='热点'></Panel>
    </Tabs>
  );
};
export default HomeTabs;
