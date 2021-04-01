import React from 'react'
import './About.css'
import { Card, CardBody } from 'reactstrap'

const About = () => {
    return (
        <section className="about" id="about">
            <h2>About</h2>
            <Card>
                <CardBody>
                    <ul>
                        <li>
                            In the process of pursuing my and graduation
                            in Computer Science, I found myself diligent and enjoyed woking
                            on technical and computer driven aspects which lead to follow
                            my true passion for software and full-stack development.
                        </li>
                        <li>
                            Working in a corporate sector of software development, my office
                            has given me a broader perspective of how a software is born from
                            scratch to deployment. And also here is where I got to explore more
                            about Web Development which dragged my interest more towards designing
                            responsive UI Layouts.
                        </li>
                        <li>
                            My UI designs are very fast and intuitive and very easy to use.
                            This portfolio shows my skill and showcases my detailed oriented
                            and organizational skills.
                        </li>
                    </ul>
                </CardBody>
            </Card>
        </section>
    )
}

export default About;


