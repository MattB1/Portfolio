import React from 'react'
import PropTypes from 'prop-types'
import { Progress } from 'reactstrap'

//import SkillBar from 'react-skillbars'
import Projects from '../components/projects'
import pic from '../images/pic.jpg'
import chamber from '../images/chamber.jpg'

const skills = [
  { type: 'HTML', level: 85 },
  { type: 'CSS', level: 70 },
  { type: 'Javascript', level: 75 },
  { type: 'React', level: 65 },
  { type: 'NodeJS', level: 55 },
  { type: 'Express', level: 55 },
  { type: 'Java', level: 40 },
  { type: 'C', level: 35 },
  { type: 'PHP', level: 50 },
  { type: 'Python', level: 40 },
]
const colors = {
  bar: '#3498db',
  title: {
    text: '#fff',
    background: '#2980b9',
  },
}

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">about</h2>
          <span className="smaller">
            <span className="image main new">
              <img src={pic} alt="" />
            </span>
          </span>

          <p>
            Hello! <br />
            I'm Matt. I’m a driven developer with an enthusiasm for learning and
            creating. Years of performing within the entertainment industry
            readied me for working in high pressure environments, thriving in
            new challenges and maintaining strong relationships with colleagues.
            <br /> I've been working as a professional musician for the last
            decade but discovered my love of programming whilst building some
            small business websites for colleagues. I decided to enroll in a
            Bachelor of Computer Science and have been hooked on all the new
            challenges and opportunities since!
          </p>
          <p>
            I'm currently working with HTML5, CSS3, JavaScript, ReactJS,
            Express, PHP and NodeJS to create my projects.
          </p>
          {close}
        </article>

        <article
          id="skills"
          className={`${this.props.article === 'skills' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>
          <p>
            My abilities have developed through a mixture of both formal
            education and self-taught methods.
            <br />
          </p>
          <strong>Formal:</strong>
          <ul>
            <li>
              Bachelor of Computer Science{' '}
              <a href="https://www.une.edu.au/">(UNE)</a> - completing in 2020
            </li>
          </ul>
          <strong>Self-Study:</strong>
          <ul>
            <li>The Web Development Bootcamp (Colt Steele)</li>
            <li>
              The Advanced Web Development Bootcamp(Colt Steele/Elie
              Schoppik/Tim Garcia/Matt Lane)
            </li>
            <li>Modern React with Redux (Stephen Grider)</li>
            <li>FreeCodeCamp</li>
          </ul>

          {/* <SkillBar
            skills={skills}
            animationDuration={2000}
            colors={colors}
            height="4vh"
          /> */}

          {close}
        </article>

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>

          <Projects />
          {close}
        </article>
        <article
          id="music"
          className={`${this.props.article === 'music' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Music</h2>
          <span className="image main">
            <img src={chamber} alt="" />
          </span>
          {/* <span className="image main">
            <img src={chamber} alt="" />
            <img src={orchestra} alt="" />
          </span> */}
          <p>
            I've been training as an Oboist from a young age. I have a BMus from
            Sydney Conservatorium of Music (USyd). I've performed with Sydney
            Symphony Orchestra, Opera Australia Orchestra (formerly Australian
            Opera and Ballet Orchestra), Sydney Philharmonia Orchestra, Sydney
            Omega Ensemble and The Metropolitan Orchestra Sydney(TMO). Premieres
            for oboe include Eliot Gygers' 'Precipice' and Calagero Panvino's
            'Envy'. A Big Brother Movement travelling scholarship enabled study
            and making connections abroad in 2012.
          </p>
          <p>
            In 2013, with help from the PPCA Performers Trust foundation I
            studied at the Conservatorium of Music in Amsterdam studying modern
            oboe with Ernest Rombout and baroque oboe with Alfredo Bernadini. My
            teachers include Alexandre Oguey, Diana Doherty, Ernest Rombout,
            Ngaire De Korte and Rachel Tolmie. Masterclasses with Francois
            Leleux, Alexei Ogrintchouk, Jacque Tys, Jonathan Kelly and Celia
            Nicklin.
          </p>
          <p>
            Since 2014 I have been a full-time member of the NSW Police Band
            performing in the wind quintet for various state and government
            functions, in addition to the wind ensemble and parade band.
          </p>

          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form
            method="post"
            action="https://formspree.io/mattbubbdev@outlook.com"
          >
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="https://github.com/MattB1" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/MattB12"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

Progress.propTypes = {
  multi: PropTypes.bool,
  bar: PropTypes.bool, // used in combination with multi
  tag: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  animated: PropTypes.bool,
  striped: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  barClassName: PropTypes.string, // used to add class to the inner progress-bar element
}

Progress.defaultProps = {
  tag: 'progress',
  value: 0,
  max: 100,
}

export default Main
