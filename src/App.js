import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css'; 

const App  = () => {
  if(!localStorage.getItem('username')) 
  return <LoginForm />

  return(
    <ChatEngine
      height='100vh'
      projectID='722f9cdf-af63-45a3-ac4c-51c595386a2e'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => 
        <ChatFeed {...chatAppProps} />
      }
    />
  );
}
export default App;