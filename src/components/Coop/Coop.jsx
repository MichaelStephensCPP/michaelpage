import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const coop = () => {
  const { coop } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = coop;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="coop">
      <Container>
        <Title title="CO-OP EXPERIENCE" />
        <Row className="coop-wrapper">
          <Col md={11} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="coop-wrapper__info">
                <p className="coop-wrapper__info-text">
                  {paragraphOne ||
                    "All of my CO-OP expieriences thus far have been through the University of Cinncinnati's EEP program. EEP stands for Experiential Exploration Program. Throughout the program I partook in various online courses."}
                </p>
                <p className="coop-wrapper__info-text">
                  {paragraphTwo ||
                    ''}
                </p>
                <p className="coop-wrapper__info-text">
                  {paragraphThree || ''}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default coop;
