import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import './GiveReview.css'

const GiveReview = () => {
    const {user} = useAuth();
    const {register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/add-reviews', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Rating added successfully');
                reset();
            }
        })
    }
    return (
        <div>
            <div className="review-form-container">
            <h3 className="text-center mt-5">Add Review</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 100 })} defaultValue={user.displayName} placeholder="Name" />
                <input type="number" min='0' max='5' {...register("rating", { required: true, maxLength: 5 })} placeholder="Rating" />
                <textarea {...register("description", { required: true })} placeholder="Description" />
                <input className="submit" type="submit" />
            </form>
        </div>
        </div>
    );
};

export default GiveReview;