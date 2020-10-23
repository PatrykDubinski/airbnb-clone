import React from 'react'
import './SearchPage.css';
import { Button } from '@material-ui/core';

import SearchResult from './SearchResult';

const SearchPage = () => {
    return (
        <div className='searchPage'>
            <div className="searchPage__info">
                <p>62 stays &middot; 26 august to 30 august &middot; 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant='outlined'>Cancellation Flexibility</Button>
                <Button variant='outlined'>Type of place</Button>
                <Button variant='outlined'>Price</Button>
                <Button variant='outlined'>Rooms and beds</Button>
                <Button variant='outlined'>More filters</Button>
            </div>
            <SearchResult 
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU'
                location='Private room in center of London'
                title='Stay at this spacious Edwardian House'
                desc='1 guest &middot; 1 bedroom &middot; 1 bed &middot; 1.5 shared bathrooms &middot; Wifi &middot; Kitchen &middot; Free parking &middot; Washing Machine'
                star={4.73}
                price='£30 / night'
                total='£117 total' />
            <SearchResult 
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU'
                location='Private room in center of London'
                title='Stay at this spacious Edwardian House'
                desc='1 guest &middot; 1 bedroom &middot; 1 bed &middot; 1.5 shared bathrooms &middot; Wifi &middot; Kitchen &middot; Free parking &middot; Washing Machine'
                star={4.73}
                price='£30 / night'
                total='£117 total' />
        </div>
    )
}

export default SearchPage
