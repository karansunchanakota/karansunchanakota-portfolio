import React from 'react'
import './CareerTimeline.css'
import rocket from '../../images/rocket.svg'
import fiiLogo from '../../images/fiiLogo.png'
import edwiselyLogo from '../../images/edwiselyLogo.png'
import amazonLogo from '../../images/amazonLogo.png'
import mtuLogo from '../../images/michiganTechLogo.png'
import cvrLogo from '../../images/cvrLogo.jpg'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from '@material-ui/lab'
import { Paper } from '@material-ui/core'

const CareerTimeline = () => {
    return (
        <section className="career__timeline" id="timeline">
            <div className="main__heading">
                <h2>TIMELINE</h2>
                <div className="career__timeline__underline"></div>
            </div>
            <Timeline align="alternate" className="timeline">
                <TimelineItem>
                    <TimelineOppositeContent className="timeline__opposite__content">
                        <i>
                            June 2020 - Present
                        </i>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                            <img src={rocket}  style={{width:"2rem"}}/>
                        </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className="timeline__content">
                        <Paper className="timeline__paper">
                            <img style={{width:"6rem", padding:"0.75rem"}} src={fiiLogo}/>
                            <div className="job__info">
                                <h6>Software Engineer</h6>
                                <span>Foxconn Industrial Internet</span>
                            </div>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent className="timeline__opposite__content">
                        <i>
                            September 2018 - April 2020
                        </i>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                            <img src={rocket}  style={{width:"2rem"}}/>
                        </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className="timeline__content">
                        <Paper className="timeline__paper__reverse">
                            <img style={{width:"5rem", padding:"0.75rem"}} src={mtuLogo}/>
                            <div className="degree__info">
                                <h6>Masters in Computer Science</h6>
                                <span>Michigan Technological University</span>
                            </div>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent className="timeline__opposite__content">
                        <i>
                            June 2019 - August 2019
                        </i>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                            <img src={rocket}  style={{width:"2rem"}}/>
                        </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className="timeline__content">
                        <Paper className="timeline__paper">
                            <img style={{width:"5rem", padding:"0.75rem"}} src={edwiselyLogo}/>
                            <div className="job__info">
                                <h6>Web Developer Intern</h6>
                                <span>Edwisely</span>
                            </div>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent className="timeline__opposite__content">
                        <i>
                            September 2013 - April 2017
                        </i>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                            <img src={rocket}  style={{width:"2rem"}}/>
                        </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className="timeline__content">
                        <Paper className="timeline__paper__reverse">
                            <img style={{width:"5rem", padding:"0.75rem"}} src={cvrLogo}/>
                            <div className="degree__info">
                                <h6>Bachelor of Technology</h6>
                                <span>CVR College of Engineering</span><br></br>
                                <span>Jawaharlal Nehru Technological University</span>
                            </div>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent className="timeline__opposite__content">
                        <i>
                            August 2017 - July 2018
                        </i>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                            <img src={rocket}  style={{width:"2rem"}}/>
                        </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className="timeline__content">
                        <Paper className="timeline__paper">
                            <img style={{width:"5rem", padding:"0.75rem"}} src={amazonLogo}/>
                            <div className="job__info">
                                <h6>Process Associate</h6>
                                <span>Amazon</span>
                            </div>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </section>
    )
}
export default CareerTimeline;