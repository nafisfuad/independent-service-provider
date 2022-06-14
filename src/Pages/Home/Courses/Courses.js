import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useCourses from '../../Shared/hooks/useCourses';

const Courses = () => {
    const [courses] = useCourses();
    const navigate = useNavigate();
    return (
        <div className='container mt-5'>
            <h2 className='pb-3'>Services</h2>
            <Row sm={1} lg={3}>
                {
                    courses.map(course => <Col>
                        <Card>
                            <Card.Img variant="top" src={course.img} />
                            <Card.Body>
                                <Card.Title>Course: {course.name}</Card.Title>
                                <Card.Text>Fee: ৳{course.fee}</Card.Text>
                                <Card.Text>Description: {course.description}</Card.Text>
                                <Button onClick={() => { navigate('/checkout') }}>Enroll</Button>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default Courses;