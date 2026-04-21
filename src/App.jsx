import { useEffect } from 'react'
import { socket } from './socket';
import './App.css'
import MyForm from './components/MyForm';
import ManageConnection from './components/ManageConnection';
import Channels from './components/Channels';
import Chats from './components/Chats';
import Users from './components/Users';

function App() {

  useEffect(() => {
    const onConnect = () => {
      console.log('Conectado');
    };
    socket.on('connect', onConnect);
    return () => {
      socket.off('disconnect');
      socket.off('connect', onConnect);
    };
  }, []);

  return (
    <div className="the-container">
      <div className="title-container">
        <h1>Chatify</h1>
        <ManageConnection />
        <MyForm />
      </div>
      <div className="content-container">
        <Channels />
        <Chats />
        <Users />
      </div>
    </div>
  )
}

export default App