import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import asteroids from '../images/asteroids.png'
import candy from '../images/candy.png'
import clean from '../images/clean.png'
import yelpcamp from '../images/yelpcamp.jpg'
import portfolioSite from '../images/portfolioSite.jpg'

let myStyle = {
  letterSpacing: '0.1rem',
  textAlign: 'center',
  backgroundColor: 'rgba(115, 193, 241, 0.7)',
  marginBottom: '0',
}

let noMarginTop = {
  marginTop: '0',
  marginBottom: '0',
}

let pStyle = {
  paddingBottom: '1.5rem',
  paddingTop: '0.5rem',
}

const Projects = props => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2 style={myStyle}>
              Portfolio Site: React
              <br />
            </h2>
            <span className="image main" style={noMarginTop}>
              <a href="https://enigmatic-mountain-22596.herokuapp.com/">
                <img src={portfolioSite} alt="portfolio site" />
              </a>
            </span>
            <span>
              <h2 style={myStyle}>
                <a
                  href=" https://enigmatic-mountain-22596.herokuapp.com/"
                  className="icon fas fa-desktop"
                >
                  {' '}
                  Demo
                  <span className="label">Demo</span>
                </a>{' '}
                <a href="#" className="icon fa-github">
                  {' '}
                  GitHub
                  <span className="label">GitHub</span>
                </a>
              </h2>
            </span>

            <p style={pStyle}>
              This site was created using ReactJS, HTML, CSS, NodeJS, Git,
              Heroku. It is built from a Gatsby Starter template as I wanted to
              jump into a larger React code base than I was use to. <br />I
              added new react components to get used to the way they are handled
              in React and deployed using Heroku. Through this project I've
              started thinking about how I approach frontend differently using a
              modern framework such as React.
            </p>
          </Col>
          <Col>
            <h2 style={myStyle}>
              YelpCamp: FullStack <br />
            </h2>
            <span className="image main" style={noMarginTop}>
              <img src={yelpcamp} alt="" />
            </span>
            <span>
              <h2 style={myStyle}>
                <a
                  href=" https://damp-ridge-34083.herokuapp.com/"
                  className="icon fas fa-desktop"
                >
                  {' '}
                  Demo
                  <span className="label">Demo</span>
                </a>{' '}
                <a
                  href="https://github.com/MattB1/YelpCamp"
                  className="icon fa-github"
                >
                  {' '}
                  GitHub
                  <span className="label">GitHub</span>
                </a>
              </h2>
            </span>

            <p style={pStyle}>
              This was created using NodeJS, Express, MongoDB, MLab, Mongoose,
              HTML, CSS, Bootstrap. It was the major project that I worked on
              for The Web Developer Bootcamp (Colt Steele)
            </p>
          </Col>
          <Col>
            <h2 style={myStyle}>
              Asteroids Clone: Game
              <br />{' '}
            </h2>
            <span className="image main" style={noMarginTop}>
              <img src={asteroids} alt="" />
            </span>
            <span>
              <h2 style={myStyle}>
                <a
                  href="https://github.com/MattB1/Processing/blob/master/BabyAsteroids/a3FINAL.pde"
                  className="icon fa-github"
                >
                  {' '}
                  GitHub
                  <span className="label">GitHub</span>
                </a>
              </h2>
            </span>
            <p style={pStyle}>
              This was created using the Processing programming language, as a
              group of 3 our task was to recreate a basic version of the classic
              game Asteroids. It was the group task for COSC110 - Software
              Development Studio.
            </p>
          </Col>
          <Col>
            <h2 style={myStyle}>Candy Store: Design, Bootstrap</h2>
            <span className="smaller">
              <span className="image main" style={noMarginTop}>
                <img src={candy} alt="" />
              </span>
            </span>

            <p style={pStyle}>
              This was created as part of The Web Developer Bootcamp, the idea
              was to create a page with bootstrap that didn't have the
              charicteristics of a typical bootstrap site.
            </p>
          </Col>
          <Col>
            <h2 style={myStyle}>Cleanlines Rater: Python </h2>
            <span className="smaller">
              <span className="image main" style={noMarginTop}>
                <img src={clean} alt="" />
              </span>
            </span>
            <span>
              <h2 style={myStyle}>
                {' '}
                <a
                  href="https://github.com/MattB1Python/blob/master/cleanlinessrater/clean.py"
                  className="icon fa-github"
                >
                  GitHub
                  <span className="label">GitHub</span>
                </a>
              </h2>
            </span>

            <p style={pStyle}>
              The task was to create a simple GUI application that would
              calculate the average cleanliness rating for a bathroom in the
              fictional 'CodeTown'. Created for COSC101 - Intro to Programming
              and UNIX
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Projects
