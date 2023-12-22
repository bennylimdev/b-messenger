import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import BIcon from '../assets/b.png'
import LogoutIcon from '../assets/logout.png'

const SideBar = () => (
    <div className='channel-list__sidebar'>
        <div className='channel-list__sidebar__icon1'>
            <div className='icon1__inner'>
                <img src={BIcon} alt='logo' width='30'/>
            </div>
        </div>
        <div className='channel-list__sidebar__icon2'>
            <div className='icon1__inner'>
                <img src={LogoutIcon} alt='logouticon' width='30'/>
            </div>
        </div>
    </div>
);

const Header = () => (
    <div className='channel-list__header'>
        <p className='channel-list__header__text'>Channel 1</p>
    </div>
);

const ChannelListContainer = () => {
  return (
    //fragment
    <>
        <SideBar />
        <div className='channel-list__list__wrapper'>
            <Header />
            <ChannelSearch />
            <ChannelList 
                filters={{}}
                channelRenderFilterFn={() => {}}
                List={(listProps) => (
                    <TeamChannelList
                        {...listProps}
                        type='team'
                    />
                )}
                Preview={(previewProps) => (
                    <TeamChannelPreview 
                        {...previewProps}
                        type='team'
                    />
                )}
            />
            <ChannelList 
            filters={{}}
            channelRenderFilterFn={() => {}}
            List={(listProps) => (
                <TeamChannelList
                    {...listProps}
                    type='messaging'
                />
            )}
            Preview={(previewProps) => (
                <TeamChannelPreview 
                    {...previewProps}
                    type='messaging'
                />
            )}
        />
        </div>
    </>
  );
};

export default ChannelListContainer;