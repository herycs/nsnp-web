import { useState } from 'react';
import { Tabs } from 'zarm';

const { Panel } = Tabs;

const HomeTabs = () => {
  const [value, setValue] = useState(0);

  return (
    <Tabs value={value} onChange={setValue}>
      <Panel title='推荐'>
        {/* <div className='content'>选项卡1内容</div> */}
      </Panel>
      <Panel title='娱乐'>
        {/* <div className='content'>选项卡2内容</div> */}
      </Panel>
      <Panel title='热点'>
        {/* <div className='content'>选项卡2内容</div> */}
      </Panel>
    </Tabs>
  );
};
export default HomeTabs;
