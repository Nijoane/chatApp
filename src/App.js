import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css'; 

const App  = () => {
  return(
    <ChatEngine
      height='100vh'
      projectID='722f9cdf-af63-45a3-ac4c-51c595386a2e'
      userName='Nica'
      userSecret='354115'
      renderChatFeed={(chatAppProps) => 
        <ChatFeed {...chatAppProps} />
      }
    />
  );
}
export default App;