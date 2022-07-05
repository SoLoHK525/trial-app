import React from 'react';
import { Link } from 'react-router-dom';

function IndexPage() {
    return (
        <div>
            <h1>
                Hello, Welcome to my app!
            </h1>
            <Link to="/about">About us</Link>
        </div>
    )
}

export default IndexPage;