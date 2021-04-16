import React, { useRef } from 'react'
import './Skills.css'
import SkillChart from './SkillChart'
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
    var webTechnologies = [
        ["HTML", html],
        ["CSS", css],
        ["Bootstrap", bootstrap],
        ["Materialize", materialize],
        ["Javascript", javascript],
        ["React", reactIcon],
        ["jQuery", jquery],
        ["Node", nodejs],
        ["JSON", json],
        ["Ruby on Rails", rails],
        ["Angular", angularJS],
        ["Flask", flask]
    ];
    var databaseManagement = [
        ["Mysql", mysql],
        ["MongoDB", mongodb]
    ]
    var programmingLanguages = [
        ["Java", java],
        ["C", cProgram],
        ["C++", cpp],
        ["Python 3", python]
    ]
    var otherSkill = [
        ["Git", git],
        ["SVN", subversion],
        ["Logic Pro X", logicPro],
        ["Final Cut Pro", finalCut]
    ]
    
    return (
        <section className="skills" id="skills">
            <div style={{height:"0.75rem"}}>
            </div>
            <Container className="skills__container">
                <div className="main__heading">
                    <h2>SKILLS</h2>
                    <div className="skills__underline"></div>
                </div>
                <Card className="all__skills">
                    <div className="skills__with__graph">
                        <Card className="skills__card">
                            <CardHeader className="skills__card__header">
                                Web Technologies
                            </CardHeader>
                            <CardBody className="skills__card__body">
                                {
                                    webTechnologies.map(element => (
                                        <div className="skills_single">
                                            <Card className="skills_icons_card">
                                                <img className="skills_icons" src={element[1]} />
                                            </Card>
                                            <span>{element[0]}</span>
                                        </div>
                                    ))
                                }
                            </CardBody>
                        </Card>
                        <Card className="skills__card">
                            <CardHeader className="skills__card__header">
                                Web Technologies
                            </CardHeader>
                            <CardBody className="skills__card__body">
                                <SkillChart />
                            </CardBody>
                        </Card>
                    </div>
                    <div className="skills__with__graph">
                        <Card className="skills__card">
                            <CardHeader className="skills__card__header">
                                Database Management
                            </CardHeader>
                            <CardBody className="skills__card__body">
                                {
                                    databaseManagement.map(element => (
                                        <div className="skills_single">
                                            <Card className="skills_icons_card">
                                                <img className="skills_icons" src={element[1]} />
                                            </Card>
                                            <span>{element[0]}</span>
                                        </div>
                                    ))
                                }
                            </CardBody>
                        </Card>
                        <Card className="skills__card">
                            <CardHeader className="skills__card__header">
                                Database Management
                            </CardHeader>
                            <CardBody className="skills__card__body">
                                {
                                    databaseManagement.map(element => (
                                        <div className="skills_single">
                                            <Card className="skills_icons_card">
                                                <img className="skills_icons" src={element[1]} />
                                            </Card>
                                            <span>{element[0]}</span>
                                        </div>
                                    ))
                                }
                            </CardBody>
                        </Card>
                    </div>
                    <div className="skills__with__graph"> 
                        <Card className="skills__card">
                            <CardHeader className="skills__card__header">
                                Programming Languages
                            </CardHeader>
                            <CardBody className="skills__card__body">
                                {
                                    programmingLanguages.map(element => (
                                        <div className="skills_single">
                                            <Card className="skills_icons_card">
                                                <img className="skills_icons" src={element[1]} />
                                            </Card>
                                            <span>{element[0]}</span>
                                        </div>
                                    ))
                                }
                            </CardBody>
                        </Card>
                        <Card className="skills__card">
                            <CardHeader className="skills__card__header">
                                Programming Languages
                            </CardHeader>
                            <CardBody className="skills__card__body">
                                {
                                    programmingLanguages.map(element => (
                                        <div className="skills_single">
                                            <Card className="skills_icons_card">
                                                <img className="skills_icons" src={element[1]} />
                                            </Card>
                                            <span>{element[0]}</span>
                                        </div>
                                    ))
                                }
                            </CardBody>
                        </Card>
                    </div>
                    <div className="skills__with__graph">
                        <Card className="skills__card">
                            <CardHeader className="skills__card__header">
                                Other
                            </CardHeader>
                            <CardBody className="skills__card__body">
                                {
                                    otherSkill.map(element => (
                                        <div className="skills_single">
                                            <Card className="skills_icons_card">
                                                <img className="skills_icons" src={element[1]} />
                                            </Card>
                                            <span>{element[0]}</span>
                                        </div>
                                    ))
                                }
                            </CardBody>
                        </Card>
                        <Card className="skills__card">
                            <CardHeader className="skills__card__header">
                                Other
                            </CardHeader>
                            <CardBody className="skills__card__body">
                                {
                                    otherSkill.map(element => (
                                        <div className="skills_single">
                                            <Card className="skills_icons_card">
                                                <img className="skills_icons" src={element[1]} />
                                            </Card>
                                            <span>{element[0]}</span>
                                        </div>
                                    ))
                                }
                            </CardBody>
                        </Card>
                    </div>
                </Card>
            </Container>
            <div style={{height:"0.75rem"}}>
            </div>
        </section>
    )
}
export default Skills;