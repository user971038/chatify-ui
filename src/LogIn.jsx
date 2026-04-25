import { useEffect } from 'react'
import { socket } from './socket';
import './LogIn.css'
import MyForm from './components/MyForm';
import ManageConnection from './components/ManageConnection';

function LogIn() {

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
    <>
        <div className="login-container">
                <h2>Please Log In</h2>
                <ManageConnection />
                <MyForm />
            <div className="content-container">
                <Channels />
                <Chats />
                <Users />
            </div>
        </div>
    </>
  )
}

export default LogIn