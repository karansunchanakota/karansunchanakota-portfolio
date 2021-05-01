import React from 'react'
import './Contact.css'
import { Container, Card } from '@material-ui/core'
import rocket from '../../images/rocket.svg'
import gmail from '../../images/contact/gmail.png'
import github from '../../images/contact/github.png'
import linkedin from '../../images/contact/linkedin.png'

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div style={{height:"0.75rem"}}>
            </div>
            <div className="contact__container">
                <div className="main__heading">
                    <h2>CONTACT</h2>
                    <div className="contact__underline"></div>
                </div>
                <Card className="contact__card">
                    <ul>
                        <li>
                            <a href="mailto:sunchanakotakaran@gmail.com">
                                <img src={gmail}/>
                                sunchanakotakaran@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="http://github.com/karansunchanakota" target="_blank">
                                <img src={github}/>
                                github.com/karansunchanakota
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/karan-sunchanakota-708b4417a/" target="_blank">
                                <img src={linkedin}/>
                                linkedin.com/in/karan-sunchanakota
                            </a>
                        </li>
                    </ul>
                </Card>
            </div>
            <div style={{height:"0.75rem"}}>
            </div>
        </section>
    )
}
export default Contact;