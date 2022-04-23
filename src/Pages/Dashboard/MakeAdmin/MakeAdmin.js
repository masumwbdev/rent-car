import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false)
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdmitSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setSuccess(true)
            }
            else{
                alert('Something went wrong. Please, make sure this email is valid or invalid')
            }
        })
        e.preventDefault();
    }
    return (
        <div>
            <h1>Make admin</h1>
            <form onSubmit={handleAdmitSubmit}>
                <input type="email" onBlur={handleOnBlur} />
                <button type='submit'>Make Admin</button>
            </form>
            {success && <p>Admin successfully added</p>}
        </div>
    );
};

export default MakeAdmin;