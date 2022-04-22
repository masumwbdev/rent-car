import React, { useEffect, useState } from 'react';
import Review from './Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/add-reviews')
        .then(res => res.json())
        .then(data => setReviews(data));
    } , [])
    return (
        <div class="row row-cols-1 row-cols-md-4 width-control g-2 mt-5">
            {
                reviews.map(review => <Review
                    review={review}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;