import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser = useLoaderData();
    // console.log(loadedUser);

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        // console.log(name, email);
        const updatedUser = { name, email };

        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('User updated successfully');
                    // form.reset();
                }
            })

    }
    return (
        <div>
            <h2>Update User info: {loadedUser.name}</h2>
            <Link to={'/users'}>Go back to users</Link>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser?.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loadedUser?.email} id="" />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;