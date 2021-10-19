import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0); // index state value
    const {name, job, image, text} = people[index]; // access properties from specific person from people[index]

    // checkNumber function - allows number to iterate back
    const checkNumber = (number) => {
        if(number > people.length - 1) {
            return 0;
        }
        if (number < 0){
            return people.length - 1;
        } else {
            return number;
        }
    };

    // nextPerson function
    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };
    // prevPerson function
    const prevPerson = () => {
        setIndex(() => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };

    // randomPerson function
    const randomPerson = () => {
    
        let randomIndex = Math.floor(Math.random() * people.length);
        if (randomIndex === index){ // if statement - not to select current index
            randomIndex = index + 1;
        }
        setIndex(checkNumber(randomIndex));
        
    };

    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img'/>
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className='prev-btn' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className='next-btn' onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button className='random-btn' onClick={randomPerson}>
                    Random
                </button>

        </article>
    );
};

export default Review;