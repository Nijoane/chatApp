import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

const MenssageForm = (props) => {
  const [value, setValue] = useState('');
  const{ chatId, creds } = props;

  const handleSubmit = (event) => {
    event.preventDefault()
    const text =  value.trim();
    console.log(text)
    if(text.length > 0)
    sendMessage(creds, chatId, { text })
  }
  const handleChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId)
  }
  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' })
  }

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="message-input"
        placeholder="Send a message..."
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor='upload-button'>
        <span className='images-button'>
          <PictureOutlined className='pciture-icon' />
        </span>
      </label>
      <input 
        type="file"
        multiple={false}
        id='upload-button'
        style={{ display: 'none' }}
        onChange={handleUpload}
      />
      <button type='submit' className='send-button'> 
        <SendOutlined className='send-icon' />
      </button>
    </form>
  );
}

export default MenssageForm;