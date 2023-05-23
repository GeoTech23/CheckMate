import React from 'react';

function Message({ message }) {


  return (
    <>
      <div>
        <h4>{message.date}</h4>
        {/* <h1>{props.rating}</h1> */}
        <p>{message.message}</p>
      </div>
    </>
    
  );
}

export default Message;