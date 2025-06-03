import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser = useLoaderData();
    console.log(loadedUser);
    return (
        <div>
            <h2>Update User info: {loadedUser.name}</h2>
        </div>
    );
};

export default Update;