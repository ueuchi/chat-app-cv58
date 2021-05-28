import React from 'react';
import MessageList from '../components/MessageList';
import PostForm from '../components/PostForm';

const Room = () => {
  return (
    <div>
      <h1>Chat Room</h1>
      <PostForm />
      <MessageList />
    </div>
  );
};

export default Room;
