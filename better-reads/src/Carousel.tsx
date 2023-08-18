import React from 'react';
import Card from './Card';

const Carousel = () => {
    const top5Data = [{
        title: 'Red Rising',
        author: 'Pierce Brown',
        img: 'https://placehold.co/150x250',
        description: 'The reds rise up!',
    }]

    const top5 = top5Data.map(ele => {
        return <Card title={ele.title} author={ele.author} img={ele.img} description={ele.description} />
    })

    return (
        <div className='carousel'>
            {top5}   
        </div>
    )
}

export default Carousel;