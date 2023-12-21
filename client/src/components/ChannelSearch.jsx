import React, { useState, useEffect } from 'react';
import { useChatContext } from 'stream-chat-react';

import SearchIcon from '../assets/loupe.png';

const ChannelSearch = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const getChannels = async(text) => {
        try {
            //TODO: fetch channels
        } catch (error) {
            setQuery('')
        }
    };

    const onSearch = (e) => {
        e.preventDefault();
        
        setLoading(true);
        setQuery(e.target.value);
        getChannels(e.target.value);
    };

    return (
        <div className='channel-search__container'>
            <div className='channel-search__input__wrapper'>
                <div className='channel-search__input__icon'>
                    <img src={SearchIcon} alt='searchicon' width='20'/>
                </div>
                <input 
                className='channel-search__input__text' 
                placeholder='Search' 
                type='text' 
                value={query}
                onChange={onSearch}
                />
            </div>
        </div>
    );
};

export default ChannelSearch;