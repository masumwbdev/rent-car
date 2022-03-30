import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProducts.css'

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('User added successfully');
                    reset();
                }
            })
    }
    return (
        <div className='width-control text-center mt-2 mb-5'>
            <h4>Add products</h4>
            <form className='add-products-form' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("carName", { required: true })} placeholder="Car Name" />
                <input type="number" {...register("door", { required: true })} placeholder="Total door" />
                <input type="text" {...register("aircondition")} defaultValue="Air Conditioning" />
                <input type="number" {...register("largeSuitcases", { required: true })} placeholder="Large Suitcases" />
                <input type="number" {...register("smallSuitcases", { required: true })} placeholder="Small Suitcases" />
                <input type="number" {...register("passengers", { required: true })} placeholder="Passengers" />
                <input type="number" {...register("oil", { required: true })} placeholder='Oil liter per km' />
                <input type="number" {...register("cost")} placeholder='Cost (optional)' />
                <input type="number" {...register("regularCost")} placeholder='Regular Cost' />
                <input type="number" {...register("emmissions", { required: true })} placeholder="emmissions" />
                <select {...register("transmission", { required: true })} id="cars">
                    <option value="Automatic" >Automatic</option>
                    <option value="Manual" >Manual</option>
                </select>
                <input {...register("imgURL")} placeholder="Image url" />
                <textarea {...register("description", { required: true })} placeholder='Car description' cols="4" rows="2"></textarea>
                <input className="submit" type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;