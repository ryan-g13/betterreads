import React, { ReactElement } from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const filters = [
        'Art',
        'Biography',
        'Business',
        'Children\'s',
        'Christian',
        'Classics',
        'Comics',
        'Cookbooks',
        'Ebooks',
        'Fantasy',
        'Fiction',
        'Graphic Novels',
        'Historical Fiction',
        'History',
        'Horror',
        'Memoir',
        'Music',
        'Nonfiction',
        'Poetry',
        'Psychology',
        'Romance',
        'Science',
        'Science Fiction',
        'Self Help',
        'Sports',
        'Thriller',
        'Travel',
        'Young Adult',
        'More genres',
    ];

    const filtersList:ReactElement[] = [];
    filters.forEach(filter => {
        filtersList.push(<div>{filter}</div>);
    })
    return (
        <div className='sidebar-container'>
            {filtersList}
        </div>
    )
}

export default Sidebar;