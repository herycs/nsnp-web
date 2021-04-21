import React from 'react';
import { useState } from 'react';
import { Input, Cell, Icon, FilePicker } from 'zarm';
import './index.scss'

function PushArticle() {
  const [content, setContent] = useState('');
  const [files, setFiles] = useState([]);

  const onSelect = (file) => {
    console.log(file);
    const newFiles = files.concat(file);
    setFiles(newFiles);
  };

  return (
    <div className='push-article' style={{ marginTop: 20 }}>
      <Cell
        title='标题'
        // help={
        //   <Message
        //     theme='danger'
        //     icon={<Icon type='warning-round' size='sm' />}
        //   >
        //     标题不能为空
        //   </Message>
        // }
      >
        <Input type='text' placeholder='请输入标题' />
      </Cell>
      <Cell title='分享新鲜事' style={{ marginTop: 10, }}>
        <Input
          type='text'
          rows={5}
          placeholder='请输入内容'
          value={content}
          onChange={setContent}
        />
      </Cell>
      <Cell  style={{ marginTop: 10 ,paddingTop:10,paddingBottom:10}}>
        <div className='file-picker-wrapper'>
          <FilePicker className='file-picker-btn' onChange={onSelect}>
            <Icon type='add' size='lg' />
          </FilePicker>
        </div>
      </Cell>
    </div>
  );
}

export default PushArticle;
