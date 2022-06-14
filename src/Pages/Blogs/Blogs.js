import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container className='mt-5'>
            <h2>Blogs</h2>
            <Row sm={1} lg={3} className='g-4'>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Q: Difference between authorization and authentication?</Card.Title>
                            <Card.Text>A: Authentification is the process of identifying, on the other hand authorization is about allowing to do something.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Q: Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
                            <Card.Text>A: I'm using Firebase because of this course recommends me to and it's really easy to use. There are plenty of alternatives to Firebase Authentication. We can take Auth0, Okta, MongoDB as example.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Q: What other services does firebase provide other than authentication?</Card.Title>
                            <Card.Text>A: Firebase provides services like Database (Firestore, Realtime), Storage, Hosting, Machine Learning etc. except Authentication. </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Blogs;