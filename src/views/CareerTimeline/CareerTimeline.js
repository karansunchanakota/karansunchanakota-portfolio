import React from 'react'
import './CareerTimeline.css'
import rocket from '../../images/rocket.svg'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from '@material-ui/lab'
import { Paper } from '@material-ui/core'

const CareerTimeline = () => {
    return (
        <section id="timeline">
            <h2>Timeline</h2>
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
                            <h6>Software Engineer</h6>
                            <span>Foxconn Industrial Internet</span>
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
                            <h6>Masters in Computer Science</h6>
                            <span>Michigan Technological University</span>
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
                            <h6>Web Developer Intern</h6>
                            <span>Edwisely</span>
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
                        <Paper className="timeline__paper__reverse">
                            <h6>Process Associate</h6>
                            <span>Amazon</span>
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
                        <Paper className="timeline__paper">
                            <h6>Bachelor of Technology</h6>
                            <span>CVR College of Engineering</span><br></br>
                            <span>Jawaharlal Nehru Technological University</span>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </section>
    )
}
export default CareerTimeline;