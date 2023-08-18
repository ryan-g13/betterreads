import React from 'react';
import './Header.css';

interface iHeader {
    title: string
}

export default function Header({title}:iHeader) {
    return (
        <div className='header'>
            <div>{title}</div>
        </div>
    )
}