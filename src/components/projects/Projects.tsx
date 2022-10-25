import React from 'react';
import { Col, Container, Row, Nav, Tab } from 'react-bootstrap';

// Components
import ProjectCard from '../projectCard/ProjectCard';

// Models
import {projects} from '../../models/projects'
// Assets
import colorSharp2 from '../../assets/images/color-sharp2.png';

// Styles,
import './projects.css';

const Projects = () => {

    return (
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis veniam quisquam, deleniti, maxime blanditiis possimus nostrum dolorum</p>
                        <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                            <Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='second'>Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='third'>Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard    key={index}
                                                                {...project}
                                                                //   title={project.title}
                                                                //   description={project.description}
                                                                //   imgUrl={project.imgUrl}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                {/* <Tab.Pane eventKey='second'>Lorem Ipsum</Tab.Pane>
                                <Tab.Pane eventKey='third'>Lorem Ipsum</Tab.Pane> */}
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt='Imagen' />
        </section>
    )
}

export default Projects;