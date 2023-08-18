import React from 'react';
import {iCard} from './iCard';
import './Card.css';

const Card = ({img, title, author, description}: iCard) => {
    return (
        <div className='carousel-card'>
            <img src={img} className='carousel-img'/>
            <div className='carousel-card-title'>{title}</div>
            <div className='carousel-card-text'>{author}</div>
            <div className='carousel-card-text'>{description}</div>
        </div>
    )
}


export default Card;