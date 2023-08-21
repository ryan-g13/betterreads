import React from 'react';
import {iCard} from './iCard';
import './ListCard.css'

const ListCard = ({img, title, author, description}: iCard) => {
    return (
        <div className='list-card'>
            <div className='list-image-container'>
                <img src={img} className='list-img'/>
            </div>
            <div className='list-text-container'>
                <div className='list-card-title'>{title}</div>
                <div className='list-card-text'>{author}</div>
                <div className='list-card-description'>{description}</div>
            </div>
        </div>
    )
}

export default ListCard; 