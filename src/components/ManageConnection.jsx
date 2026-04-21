import React from 'react';
import { socket } from '../../socket';

const ManageConnection = () => {

  /*const onConnect = () => {
    console.log('Conectado');
  };
    
  const onDisconnect = () => {
    console.log('Desconectado');
  };*/

  const handleConnection = (con) => {
    console.log({ con });
    switch (con) {
      case 'on':
        /*socket.on('connect', onConnect);*/
        socket.connect();
        break;
      case 'off':
        /*socket.on('disconnect', onDisconnect);*/
        socket.disconnect();
        break;
      default:
        break;
    };
  };

  /*const handleDisconnect = (con) => {
    socket.on('disconnect', onDisconnect);
  };*/

  return (
    <div>
      <button onClick={() => handleConnection('on')}>Connect</button>
      <button onClick={() => handleConnection('off')}>Disconnect</button>
    </div>
  );
};

export default ManageConnection;