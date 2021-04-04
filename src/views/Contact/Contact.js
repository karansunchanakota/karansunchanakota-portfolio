import React from 'react'
import './Contact.css'
import { Card } from '@material-ui/core'
import rocket from '../../images/rocket.svg'

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2>Contact</h2>
            <Card>
                <ul>
                    <li>
                        <img src={rocket} style={{width:"3rem"}} />
                        <a href="mailto:sunchanakotakaran@gmail.com">sunchanakotakaran@gmail.com</a>
                    </li>
                    <li>
                        <img src={rocket} style={{width:"3rem"}} href="http://github.com/karansunchanakota" target="_blank" />
                        <a href="http://github.com/karansunchanakota" target="_blank">github.com/karansunchanakota</a>
                    </li>
                    <li>
                        <img src={rocket} style={{width:"3rem"}} href="https://www.linkedin.com/in/karan-sunchanakota-708b4417a/" target="_blank"/>
                        <a href="https://www.linkedin.com/in/karan-sunchanakota-708b4417a/" target="_blank">linkedin.com/in/karan-sunchanakota</a>
                    </li>
                </ul>
            </Card>
        </section>
    )
}
export default Contact;