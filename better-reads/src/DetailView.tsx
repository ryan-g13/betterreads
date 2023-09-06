import React from 'react';

const DetailView = (props:any) => {
    return (
        <div className='detail-view-container'>
            Detailed - Book view {props.id}
        </div>
    )
}

export default DetailView;

/* 
TODO: 
1. Construct interface for a detailed view  
2. Image, title, author, description - long form, like, add to list/ remove from list
3. Design page to fit with nav
*/