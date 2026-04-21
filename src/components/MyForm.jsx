import React, { useState } from 'react';
import { socket } from '../socket';

const MyForm = () => {
    const [message, setMessage] = useState('');

    const handleOnChange = (e) => {
        setMessage(e.target.value);
    };
    
    const handleClick = (e) => {
        e.preventDefault()
        socket.emit('chat message', message)
    };

    return (
        <>
            <input
                type="text"
                name="message"
                value={message}
                onChange={handleOnChange}
            />
            <button onClick={handleClick}>Send</button>
        </>
    );
};

export default MyForm;