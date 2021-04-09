import React from 'react'
import './Skills.css'
import { Card, Container, CardHeader, CardBody } from 'reactstrap'
import defaultIcon from '../../images/rocket.svg'
import angularJS from '../../images/skills/angularJS.svg'
import bootstrap from '../../images/skills/bootstrap-4.svg'
import cProgram from '../../images/skills/c-program.svg'
import cpp from '../../images/skills/cpp.svg'
import css from '../../images/skills/css-5.svg'
import finalCut from '../../images/skills/final-cut-pro.png'
import flask from '../../images/skills/flask.svg'
import git from '../../images/skills/git-icon.svg'
import html from '../../images/skills/html5.svg'
import java from '../../images/skills/java-4.svg'
import jquery from '../../images/skills/jquery-1.svg'
import logicPro from '../../images/skills/logic-pro-x.png'
import javascript from '../../images/skills/logo-javascript.svg'
import json from '../../images/skills/json.svg'
import materialize from '../../images/skills/materialize.svg'
import mongodb from '../../images/skills/mongodb.svg'
import mysql from '../../images/skills/mysql-5.svg'
import nodejs from '../../images/skills/nodejs-1.svg'
import python from '../../images/skills/python-5.svg'
import rails from '../../images/skills/rails-1.svg'
import reactIcon from '../../images/skills/react-2.svg'
import subversion from '../../images/skills/subversion.svg'

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="main__heading">
                <h2>SKILLS</h2>
                <div className="skills__underline"></div>
            </div>
            <Container className="skills__container">
                <Card className="skills__card">
                    <CardHeader className="skills__card__header">
                        Web Technologies
                    </CardHeader>
                    <CardBody className="skills__card__body">
                        <div className="skills_single">
                            <img className="skills_icons" src={html} />
                            <span>HTML</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={css} />
                            <span>CSS</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={bootstrap} />
                            <span>Bootstrap</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={materialize} />
                            <span>Materialize</span>
                        </div>
                        <div className="skills_single">
                            <img className="skills_icons" src={javascript} />
                            <span>Javascript</span>
                        </div>
                    </CardBody>
                    <CardBody className="skills__card__body">
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={reactIcon} />
                            <span>React</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={jquery} />
                            <span>jQuery</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={nodejs} />
                            <span>Node</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={json} />
                            <span>JSON</span>
                        </div>
                        <div className="skills_single">
                            <img className="skills_icons" src={rails} />
                            <span>Ruby on Rails</span>
                        </div>
                    </CardBody>
                    <CardBody className="skills__card__body">
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={angularJS} />
                            <span>Angular</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={flask} />
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
                            <img className="skills_icons" src={mysql} />
                            <span>Mysql</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={mongodb} />
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
                            <img className="skills_icons" src={java} />
                            <span>Java</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={cProgram} />
                            <span>C</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={cpp} />
                            <span>C++</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={python} />
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
                            <img className="skills_icons" src={git} />
                            <span>Git</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={subversion} />
                            <span>SVN</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={logicPro} />
                            <span>Logic Pro X</span>
                        </div>
                        <div className="skills_single d-flex flex-column">
                            <img className="skills_icons" src={finalCut} />
                            <span>Final Cut Pro</span>
                        </div>
                    </CardBody>
                </Card>
            </Container>
        </section>
    )
}
export default Skills;