import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0); // index state value
    const {name, job, image, text} = people[index]; // access properties from specific person from people[index]
    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img'/>
            </div>

        </article>
    );
};

export default Review;