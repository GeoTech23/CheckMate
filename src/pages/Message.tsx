import React from 'react';
import MessageDiv from '../components/styled/MessageDiv';
import MessageTitle from '../components/styled/MessageTitle';

function Message({ message }) {


  return (
    <>
      <MessageDiv>
        <MessageTitle>
          {message.date}
          {message.rating}
        </MessageTitle>
        <div>
          <p>{message.message}</p>
        </div>
      </MessageDiv>
    </>
    
  );
}

export default Message;