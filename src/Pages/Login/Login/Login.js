import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Col, Container, Form, Row, Toast } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';


    const login = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email sent.');
        }
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <Container className='text-start mt-3'>
            <Row>
                <Col sm={12} lg={6}>
                    <h2>Please Login</h2>
                    <Form onSubmit={login} className="my-3">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    <p>New to Mentorship? <Link className='text-decoration-none' to='/register'>Register here</Link></p>
                    <p>Forgot password? <Button onClick={resetPassword} className='py-1' variant='primary'>Reset</Button></p>
                    <ToastContainer />
                </Col>
                <Col sm={12} lg={{ span: 5, offset: 1 }}>
                    <h2>Or Login With</h2>
                    <SocialLogin></SocialLogin>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;