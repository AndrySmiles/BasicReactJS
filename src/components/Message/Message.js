import React from 'react';
import './Message.css';

const Message = ({ text }) => {

    return (
        <div className='message_style'>
            <span>{text}</span>
        </div>
    )
}

export { Message };