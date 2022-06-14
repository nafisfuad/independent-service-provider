import React, { useRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    let errorMessage;

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if (loading || updating) {
        return <Loading></Loading>;
    }

    if (user) {
        navigate('/');
    }

    const register = async event => {
        event.preventDefault();
        const displayName = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
    }

    if (error) {
        errorMessage = `<p>${error?.message}</p>`;
    }

    return (
        <Container className='text-start mt-3'>
            <Row>
                <Col sm={12} lg={6}>

                    <h2>Please Register</h2>
                    <Form onSubmit={register} className="my-3">
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control ref={nameRef} type="text" placeholder="Enter name" required />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                        </Form.Group>
                        {errorMessage}
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                    <p>Already an user? Please <Link className='text-decoration-none' to='/login'>Login</Link></p>
                </Col>
                <Col sm={12} lg={{ span: 5, offset: 1 }}>
                    <h2>Or Register With</h2>
                    <SocialLogin></SocialLogin>
                </Col>
            </Row>

        </Container>
    );
};

export default Register;