import React from 'react'
import './Skills.css'
import { Card, Container, CardHeader, CardBody } from 'reactstrap'
import defaultIcon from '../../images/rocket.svg'

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <h2>Skills</h2>
            <Container className="skills__container">
                <Card className="skills__card">
                    <CardHeader className="skills__card__header">
                        Web Technologies
                    </CardHeader>
                    <CardBody className="skills__card__body">
                        <div className="skills_single">
                            <img className="skills_icons" src={defaultIcon} />
                            <span>HTML</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={defaultIcon} />
                            <span>JSX</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={defaultIcon} />
                            <span>CSS</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={defaultIcon} />
                            <span>Bootstrap</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={defaultIcon} />
                            <span>Materialize</span>
                        </div>
                    </CardBody>
                    <CardBody className="skills__card__body">
                        <div className="skills_single">
                            <img className="skills_icons" src={defaultIcon} />
                            <span>Javascript</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={defaultIcon} />
                            <span>jQuery</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={defaultIcon} />
                            <span>Node</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={defaultIcon} />
                            <span>JSON</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={defaultIcon} />
                            <span>React</span>
                        </div>
                    </CardBody>
                    <CardBody className="skills__card__body">
                        <div className="skills_single">
                            <img className="skills_icons" src={defaultIcon} />
                            <span>Ruby on Rails</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={defaultIcon} />
                            <span>Angular</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={defaultIcon} />
                            <span>Flask</span>
                        </div>
                    </CardBody>
                </Card>
                <Card className="skills__card">
                    <CardHeader className="skills__card__header">
                        Database Management
                    </CardHeader>
                    <CardBody className="skills__card__body">
                        <div className="skills_single">
                            <img className="skills_icons" src={defaultIcon} />
                            <span>Mysql</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={defaultIcon} />
                            <span>Rails</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={defaultIcon} />
                            <span>MongoDB</span>
                        </div>
                    </CardBody>
                </Card>
                <Card className="skills__card">
                    <CardHeader className="skills__card__header">
                        Programming Languages
                    </CardHeader>
                    <CardBody className="skills__card__body">
                        <div className="skills_single">
                            <img className="skills_icons" src={defaultIcon} />
                            <span>Java</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={defaultIcon} />
                            <span>C</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={defaultIcon} />
                            <span>C++</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={defaultIcon} />
                            <span>Python 3</span>
                        </div>
                    </CardBody>
                </Card>
                <Card className="skills__card">
                    <CardHeader className="skills__card__header">
                        Other
                    </CardHeader>
                    <CardBody className="skills__card__body">
                        <div className="skills_single">
                            <img className="skills_icons" src={defaultIcon} />
                            <span>Git</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={defaultIcon} />
                            <span>SVN</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={defaultIcon} />
                            <span>Logic Pro X</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={defaultIcon} />
                            <span>Final Cut Pro</span>
                        </div>
                    </CardBody>
                </Card>
            </Container>
        </section>
    )
}
export default Skills;