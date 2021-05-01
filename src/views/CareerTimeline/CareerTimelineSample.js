import React, { useState } from 'react'
import './CareerTimeline.css'
import rocket from '../../images/rocket.svg'
import fiiLogo from '../../images/fiiLogo.png'
import edwiselyLogo from '../../images/edwiselyLogo.png'
import amazonLogo from '../../images/amazonLogo.png'
import mtuLogo from '../../images/michiganTechLogo.png'
import cvrLogo from '../../images/cvrLogo.jpg'
import educationLogo from '../../images/education.png'
import workLogo from '../../images/workHistory.svg'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from '@material-ui/lab'
import { Modal, Paper } from '@material-ui/core'
import { ModalBody } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'

const CareerTimeline = () => {
    const [fiiModal, setFiiModal] = useState(false);
    return (
        <section className="career__timeline" id="timeline">
            <Modal
                open={fiiModal}
                onClose={()=>setFiiModal(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <ModalBody style={{backgroundColor:"#ffffff", width:"50%", margin:"10rem auto"}}>
                    <div >
                        <div>
                            <img src={fiiLogo} style={{width:"7rem"}} />
                            <h5>Foxconn Industrial Internet</h5>
                        </div>
                        <span>
                            Software Engineer
                        </span>
                    </div>
                </ModalBody>
            </Modal>
            <div style={{height:"0.75rem"}}>
            </div>
            <div className="career__timeline__container">
                <div className="main__heading">
                    <h2>TIMELINE</h2>
                    <div className="career__timeline__underline"></div>
                </div>
                <div className="timeline__list">
                    <Timeline className="timeline">
                        <TimelineItem className="work__history">
                            {/* <TimelineOppositeContent className="timeline__opposite__content">
                            </TimelineOppositeContent> */}
                            <TimelineSeparator>
                                <TimelineDot className="timeline__dot__title">
                                    <img style={{width:"2rem", height:"2rem", padding:"0.5rem"}} src={workLogo}/>
                                </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className="timeline__content__title">
                                <div className="job__info">
                                    <h6>Work Experience</h6>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            {/* <TimelineOppositeContent className="timeline__opposite__content">
                            </TimelineOppositeContent> */}
                            <TimelineSeparator>
                                <TimelineDot className="timeline__dot">
                                    {/* <img style={{width:"2rem", padding:"0.25rem"}} src={fiiLogo}/> */}
                                </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className="timeline__content">
                                <Paper className="timeline__paper">
                                    <div className="job__info">
                                        <h6>Software Engineer</h6>
                                        <span>Foxconn Industrial Internet</span>
                                        <i>June 2020 - Present</i>
                                        {/* <span>
                                            Skills:
                                        </span> */}
                                        <p>
                                            (React.js, jQuery, JSP, JavaScript, HTML5, CSS3,
                                            Bootstrap...)
                                            <button onClick={()=>setFiiModal(true)}>See More</button>
                                        </p>
                                    </div>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            {/* <TimelineOppositeContent className="timeline__opposite__content">
                            </TimelineOppositeContent> */}
                            <TimelineSeparator>
                                <TimelineDot className="timeline__dot">
                                    {/* <img style={{width:"2rem"}} src={edwiselyLogo}/> */}
                                </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className="timeline__content">
                                <Paper className="timeline__paper">
                                    <div className="job__info">
                                        <h6>Web Developer Intern</h6>
                                        <span>Edwisely</span>
                                        <i>
                                            June 2019 - August 2019
                                        </i>
                                    </div>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            {/* <TimelineOppositeContent className="timeline__opposite__content">
                            </TimelineOppositeContent> */}
                            <TimelineSeparator>
                                <TimelineDot className="timeline__dot">
                                    {/* <img src={amazonLogo}  style={{width:"2rem"}}/> */}
                                </TimelineDot>
                            {/* <TimelineConnector /> */}
                            </TimelineSeparator>
                            <TimelineContent className="timeline__content">
                                <Paper className="timeline__paper">
                                    <div className="job__info">
                                        <h6>Process Associate</h6>
                                        <span>Amazon</span>
                                        <i>
                                            August 2017 - July 2018
                                        </i>
                                    </div>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                    <Timeline className="timeline">
                    <TimelineItem>
                            {/* <TimelineOppositeContent className="timeline__opposite__content">
                            </TimelineOppositeContent> */}
                            <TimelineSeparator>
                                <TimelineDot className="timeline__dot__title">
                                    <img style={{width:"2rem", height:"2rem", padding:"0.5rem 0.25rem"}} src={educationLogo}/>
                                </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className="timeline__content__title">
                                <div className="job__info">
                                    <h6>Education</h6>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            {/* <TimelineOppositeContent className="timeline__opposite__content">
                            </TimelineOppositeContent> */}
                            <TimelineSeparator>
                                <TimelineDot className="timeline__dot">
                                    <img src={mtuLogo}  style={{width:"2rem"}}/>
                                </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className="timeline__content">
                                <Paper className="timeline__paper">
                                    <div className="degree__info">
                                        <h6>Masters in Computer Science</h6>
                                        <span>Michigan Technological University</span>
                                        <i>
                                            September 2018 - April 2020
                                        </i>
                                    </div>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            {/* <TimelineOppositeContent className="timeline__opposite__content">
                            </TimelineOppositeContent> */}
                            <TimelineSeparator>
                                <TimelineDot className="timeline__dot">
                                    <img src={cvrLogo}  style={{width:"2rem"}}/>
                                </TimelineDot>
                            {/* <TimelineConnector /> */}
                            </TimelineSeparator>
                            <TimelineContent className="timeline__content">
                                <Paper className="timeline__paper">
                                    <div className="degree__info">
                                        <h6>Bachelors in Information Technology</h6>
                                        <span>CVR College of Engineering - JNTUH</span>
                                        <i>
                                            September 2013 - April 2017
                                        </i>
                                    </div>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
            <div style={{height:"1rem"}}>
            </div>
        </section>
    )
}
export default CareerTimeline;