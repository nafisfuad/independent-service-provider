import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const SocialLogin = () => {
    return (
        <ButtonGroup aria-label="Basic example">
            <Button variant="success">Google</Button>
            <Button variant="primary">Facebook</Button>
            <Button variant="dark">GitHub</Button>
        </ButtonGroup>
    );
};

export default SocialLogin;