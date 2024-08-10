import React from 'react';
import { useLocation } from 'react-router-dom';
import Details from './Details';

const DetailsWrapper = () => {
    const location = useLocation();
    const id = location.pathname.split('/').pop(); // Extract the ID from the pathname
    return <Details id={id} />;
};

export default DetailsWrapper;
