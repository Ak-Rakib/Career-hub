import React from 'react';

const ShowCategories = ({i}) => {
    const {icon, title, category} = i
    return (
        <div className='bg-base-200 pt-5 pb-5 ps-5 pe-5'>
            <img src={icon} alt="icon" />
            <h1 className='font-bold text-xl'>{category}</h1>
            <p className='text-gray-400 font-normal'>{title}</p>
        </div>
    );
};

export default ShowCategories;