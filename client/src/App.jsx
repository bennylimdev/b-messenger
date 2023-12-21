import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Coookies from 'universal-cookie';
 
import { ChannelListContainer, ChannelContainer } from './components'; 
import './App.css';

const apiKey = 'zxdx6vtfksne';

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className='app__container'>
        <Chat client={client} theme='team dark'>
            <ChannelListContainer />
            <ChannelContainer />
        </Chat>
    </div>
  );
};

export default App;