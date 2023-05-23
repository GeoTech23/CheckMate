import React from 'react';
import MessageDiv from '../components/styled/MessageDiv';
import MessageTitle from '../components/styled/MessageTitle';
import MessageContainerDiv from '../components/styled/MessageContainerDiv';

function Message({ message }) {


  return (
    <>
        <MessageDiv>
          <div>
            <MessageTitle>
              {message.date}
              {message.rating}
            </MessageTitle>
          </div>
          <p>{message.message}</p>
       </MessageDiv>
    </>
  );
}

export default Message;