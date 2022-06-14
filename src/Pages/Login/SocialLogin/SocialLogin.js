import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    const handleGoogleSignIn = () => {
        signInWithGoogle();
        navigate('/');
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>{error?.message}</p>
    }
    return (
        <div>
            <ButtonGroup aria-label="Basic example">
                <Button onClick={handleGoogleSignIn} variant="success">Google</Button>
                <Button variant="primary">Facebook</Button>
                <Button variant="dark">GitHub</Button>
            </ButtonGroup>
            {errorElement}
        </div>

    );
};

export default SocialLogin;