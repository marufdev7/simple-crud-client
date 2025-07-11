import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = _id => {
        // console.log('delete', _id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE', 
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('Deleted successfully');
                    const remaining = users.filter(user => user._id !== _id)
                    setUsers(remaining);
                }
        })
    }
    return (
        <div>
            <h1>{users.length}</h1>
            <Link to={'/'}>Home</Link>
            {
                users.map(user =>
                    <p key={user._id}>
                        {user.name}
                        :
                        {user.email}
                        <Link to={`/users/${user._id}`}>Update</Link>
                        <button onClick={() => handleDelete(user._id)}>X</button>
                    </p>)
            }
        </div>
    );
};

export default Users;