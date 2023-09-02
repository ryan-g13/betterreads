import React from 'react';
import ListCard from './ListCard';

const List = () => {
    const cardData = [{
        title: 'Red Rising',
        author: 'Pierce Brown',
        img: '/redrising.jpg',
        description: 'The reds rise up!',
    },
    {
      title: 'Golden Son',
      author: 'Pierce Brown',
      img: '/goldenson.jpg',
      description: 'A book that comes second in the series.',
    },
    {
      title: 'Morningstar',
      author: 'Pierce Brown',
      img: '/morningstar.jpg',
      description: 'What should have been the final book in the series but ended up not.',
    },
    {
      title: 'Iron Gold',
      author: 'Pierce Brown',
      img: '/irongold.jpg',
      description: 'This one is a lot of characters in a bad way.',
    },
    {
        title: 'Dark Age',
        author: 'Pierce Brown',
        img: '/darkage.jpg',
        description: 'This one is a the second to the last book.',
      }
];
    
    const list = cardData.map(card => {
        return <ListCard img={card.img} title={card.title} author={card.author} description={card.description}/>
      })
    

    return (
        <div className='list-container'>
            {list}
        </div>
    )
}

export default List;