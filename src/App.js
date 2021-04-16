import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed.jsx'
import LoginForm from './components/LoginForm.jsx'
import './App.css';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height="100vh"
            projectID="d25bab58-afbe-4135-ba60-5cdae52160fa"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;