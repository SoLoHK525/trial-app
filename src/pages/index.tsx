import { Button } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function IndexPage() {
    const navigate = useNavigate();

    const navigateToAboutUs = () => {
        navigate('/about');
    }

    return (
      <div>
        <h1>Hello, Welcome to my app!</h1>
        <Button variant="contained" onClick={navigateToAboutUs}>
          About us
        </Button>
      </div>
    );
}

export default IndexPage;