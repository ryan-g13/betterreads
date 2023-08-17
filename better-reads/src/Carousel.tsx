import React from 'react';

const Carousel = () => {
    const top5Data = [{
        title: 'Red Rising',
        author: 'Pierce Brown',
        img: 'some img link'
    }]

    const top5 = top5Data.map(ele => {
        return <div className='carousel-card'>
            <img src={ele.img} className='carousel-img'/>
            <div>{ele.title}</div>
            <div>{ele.author}</div>
        </div>
    })

    return (
        <div className='carousel'>
            {top5}   
        </div>
    )
}

export default Carousel