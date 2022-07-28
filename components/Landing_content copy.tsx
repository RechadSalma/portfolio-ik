// the inital content use will see when they visit the site, so making a big impression & clearly stating who you are is crucial

import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import styles from "../styles/components/Landing_content.module.scss";

import picOfMe from "../public/picOfMe/portfolioPic.jpg";
import Image from "next/image";

// import rss from
// Welcome!
// I’m ilshaad Kheerdali
// Frontend / Full stack developer
// Javascript / React / Typescript / Node.js
// Always follow your heart but remember to bring your brain along.
// <Get in Touch>

type Props = {};

export default function Landing_content({}: Props) {
  const {
    blockquote_p,
    role_h,
    LandingPage_component,
    welcome_h,
    getInTouchButtonContainer,
    name_h,
    specialised_h,
    welcomeName_container,
    picOfMe_img,
  } = styles;

  return (
    <Container fluid className={`${LandingPage_component} p-0`}>
      <Row className={`w-100 mx-auto`}>
        <Col xs={6} sm={7} className={`${welcomeName_container}`}>
          <h4 className={`${welcome_h} fst-italic`}>Welcome!</h4>
          <h1 className={`${name_h} fw-bolder`}>I&#39;m Ilshaad</h1>
        </Col>

        {/* <Col xs={12}></Col> */}

        <Col xs={6} sm={5}>
          <div className={`${picOfMe_img}`}>
            <Image src={picOfMe} alt="photo of ilshaad" />
          </div>
        </Col>

        <Col xs={12} sm={7}>
          <h2 className={`${role_h}`}>Frontend / Full stack developer</h2>
        </Col>

        <Col xs={12}>
          <h3 className={`${specialised_h} fw-light`}>
            Specialised in&#160;<span>Javascript</span> /&#160;
            <span>React</span>
            &#160;/&#160;<span>Typescript</span> /&#160;<span>Node.js</span>
          </h3>
        </Col>

        <Col xs={12}>
          <blockquote className={`${blockquote_p}`}>
            <p>
              &#34;Always follow your heart but remember to bring your brain
              along!&#34;
            </p>
          </blockquote>
        </Col>

        <Col xs={12}>
          <div className={`${getInTouchButtonContainer} text-center`}>
            <Button>Get in touch</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
