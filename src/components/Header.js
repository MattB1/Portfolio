import React from 'react'
import PropTypes from 'prop-types'
import TextLoop from 'react-text-loop'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faCode } from '@fortawesome/free-solid-svg-icons'

// Adding Icons from FontAwesome
library.add(faCode, faIgloo)

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <FontAwesomeIcon icon="code" size="2x" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Hello! I'm Matt</h1>
        <h3>
          I'm a{' '}
          <span>
            <TextLoop
              children={[
                'Front-end Developer',
                'Musican ',
                'FullStack Developer',
                'Perpetual Learner',
              ]}
              interval={3000}
            />
          </span>{' '}
        </h3>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('skills')
            }}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('projects')
            }}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('music')
            }}
          >
            Music
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
