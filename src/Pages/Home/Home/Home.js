import { Button, Carousel, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import physics from '../../../images/physics.jpg';
import chemistry from '../../../images/chemistry.jpg';
import higherMathematics from '../../../images/higherMathematics.jpg';
import useCourses from '../../Shared/hooks/useCourses';

const Home = () => {
    const [courses] = useCourses();
    const navigate = useNavigate();

    return (
        <Container className='text-start mt-3'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={physics}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Physics</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={chemistry}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Chemistry</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={higherMathematics}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Higher Mathematics</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br />
            <Row>
                <Col sm={12} lg={8}>
                    <h1>Get yourself prepared for your next biggest examination with me</h1>
                    <h3>Don't get distracted, stay focused like this website.</h3>
                </Col>
                <Col id='services' sm={12} lg={4}>
                    <h3>Courses:</h3>
                    <ListGroup as="ol" numbered>
                        {
                            courses.map(course => <ListGroup.Item key={course.id}
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{course.name}</div>
                                    <p>Fee: {course.fee}</p>
                                </div>
                                <Button onClick={() => navigate('/checkout')} variant="primary" >
                                    Enroll
                                </Button>
                            </ListGroup.Item>)
                        }
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;