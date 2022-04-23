import React, {useState} from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdmitSubmit = e => {
        e.preventDefault();
    }
    return (
        <div>
            <h1>Make admin</h1>
            <form onSubmit={handleAdmitSubmit}>
                <input type="email" onBlur={handleOnBlur}/>
                <button type='submit'>Make Admin</button>
            </form>
        </div>
    );
};

export default MakeAdmin;