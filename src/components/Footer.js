import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
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
    <p className="copyright">&copy; Matthew Bubb</p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
