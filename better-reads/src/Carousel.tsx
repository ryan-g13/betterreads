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
            <div><b>{ele.title}</b></div>
            <div>{ele.author}</div>
        </div>
    })

    return (
        <div className='carousel'>
            {top5}   
        </div>
    )
}

export default Carousel;

// .card {
//     /* Add shadows to create the "card" effect */
//     box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
//     transition: 0.3s;
//   }
  
//   /* On mouse-over, add a deeper shadow */
//   .card:hover {
//     box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
//   }
  
//   /* Add some padding inside the card container */
//   .container {
//     padding: 2px 16px;
//   }