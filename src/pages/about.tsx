import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
    return (
        <div>
            <h1>
                About Us
            </h1>
            <h3>
                This website is created for tutorials.
            </h3>
            <Link to="/">Back to index</Link>
        </div>
    )
}

export default AboutPage;