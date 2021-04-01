import React from 'react'
import './Experience.css'
import { Card, CardHeader, CardBody } from 'reactstrap'

const Experience = () => {
    return (
        <section className="experience" id="experience">
            <h2>Experience</h2>
            <Card className="experience__card">
                <CardHeader>
                    Software Engineer
                </CardHeader>
                <CardBody>
                    <ul>
                        <li>
                            Developed full-stack web application that processes analyze,
                            and renders data that acquires IP Camera information from 
                            NVR (Network Video Recorder) server.
                        </li>
                        <li>
                            Implemented front-end features using JSP, JavaScript, HTML5, CSS3,
                            Bootstrap, jQuery by retrieving JSON data from the NVR server in a
                            Linux environment hosted in VMware () utilizing REST API.
                        </li>
                        <li>
                            Migrated all the whole view pages (UI) from JSP to React.js in order
                            to modernize the UI and technology stack.
                        </li>
                        <li>
                            Designed various APIs in the back end (NVR server) which manages user 
                            information, camera information and performs functionalities that use
                            Onvif (an open-source agent for IP cameras) and uses GStreamer for a live video stream.
                        </li>
                        <li>
                            Coordinated with the front end, back end developers, computer vision
                            engineers, and product manager as needed.
                        </li>
                        <li>
                            Created test cases and plans for testing new features and APIs in the
                            NVR server using POSTMAN and cURL.
                        </li>
                    </ul>
                </CardBody>
            </Card>
            <Card className="experience__card">
                <CardHeader>
                    Web Developer
                </CardHeader>
                <CardBody>
                    <ul>
                        <li>
                            Worked on a website development that is into the E-Learning Platform.
                        </li>
                        <li>
                            Implemented front-end features which utilizes HTML5, CSS3, JavaScript, jQuery and Bootstrap.

                        </li>
                        <li>
                            Assessed UX and UI designs for technical feasibility and collaborated with product team members to implement a new feature
                            developments.
                        </li>
                    </ul>
                </CardBody>
            </Card>
            <Card className="experience__card">
                <CardHeader>
                    Process Associate
                </CardHeader>
                <CardBody>
                    <ul>
                        <li>
                            Presented analysis and insights on different issue segments identified from drivers’ reviews.
                        </li>
                        <li>
                            Conducted root cause analysis, suggested a platform solution for driver’s performance enhancement.
                        </li>
                        <li>
                            Investigated drivers' performance worldwide and collaborated with them regarding their work, paychecks, transactions, etc to summarize the fraudulent activities
                        </li>
                    </ul>
                </CardBody>
            </Card>
        </section>
    )
}
export default Experience;
