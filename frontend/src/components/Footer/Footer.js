import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faAngellist } from '@fortawesome/free-brands-svg-icons'

import './Footer.css'

const person = {
  name: 'Clinton Hill',
  gitHub: 'https://github.com/clintonhill',
  linkedIn: 'https://www.linkedin.com/in/clinton-hill-4438a0205/',
  angelList: 'https://angel.co/u/clinton-hill'
}

export default function Footer() {
  return (
    <div className="footer__container">
      <div className='footer__contents'>
        <div>Application by Clinton Hill</div>
        <div className="footer__connect">
        <a href={person.gitHub}><FontAwesomeIcon icon={faGithub} size='lg'className="connect__button"/></a>
        <a href={person.linkedIn}><FontAwesomeIcon icon={faLinkedin} size='lg'className="connect__button"/></a>
        <a href={person.angelList}><FontAwesomeIcon icon={faAngellist} size='lg'className="connect__button"/></a>
        </div>
      </div>
    </div>
  )
}
