import React from 'react';
import ListCard from './ListCard';

const List = () => {
    const cardData = [{
        title: 'Red Rising',
        author: 'Pierce Brown',
        img: 'https://placehold.co/75x100',
        description: 'The reds rise up!',
    },
    {
      title: 'Golden Son',
      author: 'Pierce Brown',
      img: 'https://placehold.co/75x100',
      description: 'A book that comes second in the series.',
    },
    {
      title: 'Morningstar',
      author: 'Pierce Brown',
      img: 'https://placehold.co/75x100',
      description: 'What should have been the final book in the series but ended up not.',
    },
    {
      title: 'Iron Gold',
      author: 'Pierce Brown',
      img: 'https://placehold.co/75x100',
      description: 'This one is a lot of characters in a bad way.',
    }];
    
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