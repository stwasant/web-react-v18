import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';

// Assets
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../../assets/images/header-img.svg';

// Styles
import 'animate.css';
import './banner.css';

const Banner = () => {

    const [text, setText] = useState<string>('');
    //
    const [loopNum, setLoopNum] = useState<number>(0);
    const [delta, setDelta] = useState<number>(300 - Math.random() * 100);
    //
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    //
    const period = 2000;
    const toRotate = ['Web Developer', 'Full Stack Developer', 'MERN'];

    // Functions
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    
    useEffect (() => {

        let ticker = setInterval(() => {
            tick();
        },delta);
    
        return () => { clearInterval(ticker)} 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[text]);

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
          <TrackVisibility>
          {
            ( { isVisible } ) => 
            <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1>{`Hi I'm Webdecoded, `}<span className='wrap'>{text}</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus labore in ab recusandae debitis harum eaque iure.</p>
            <button onClick={() => console.log('Connect')}>
              Let's connect <ArrowRightCircle size={25} />
            </button>

            </div>
          }
        
          </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <TrackVisibility>
          {
            ( { isVisible } ) => 
            <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
              <img src={headerImg} alt='Header Img' />
            </div>
          }
          </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
