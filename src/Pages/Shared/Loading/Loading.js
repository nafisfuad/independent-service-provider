import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return <div className='pt-5 mt-5'>
        <Spinner animation="grow" />
    </div>;
};
export default Loading;