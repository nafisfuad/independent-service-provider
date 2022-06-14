import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container>
            <h2>Blogs</h2>
            <Row sm={1} lg={3} className='g-4'>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Q: Difference between authorization and authentication?</Card.Title>
                            <Card.Text>A: </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Q: Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
                            <Card.Text>A: </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Q: What other services does firebase provide other than authentication?</Card.Title>
                            <Card.Text>A: </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Blogs;