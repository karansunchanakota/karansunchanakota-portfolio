import React from 'react'
import './Projects.css'
import { Container, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from '@material-ui/core'
import rocket from '../../images/rocket.svg'

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="main__heading">
                <h2>PROJECTS</h2>
                <div className="projects__underline"></div>
            </div>
            <Container>
                <div className="projects__cards">
                    <Card className="projects__card">
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={rocket}
                            title="Contemplative Reptile"
                            />
                            <CardContent className="projects__card__content">
                                <h4>Phishing Website Detection</h4>
                                <p>
                                    Phishing Website detection web application which gives accuracy
                                    of large datasets of phishing links using random forest classifier
                                    done using Python Flask and Anaconda
                                </p>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Github
                            </Button>
                        </CardActions>
                    </Card>
                    <Card className="projects__card">
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={rocket}
                            title="Contemplative Reptile"
                            />
                            <CardContent className="projects__card__content">
                                <h4>Netflix Clone</h4>
                                <p>
                                    Netflix Clone using React.js
                                </p>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Github
                            </Button>
                        </CardActions>
                    </Card>
                    <Card className="projects__card">
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={rocket}
                            title="Contemplative Reptile"
                            />
                            <CardContent className="projects__card__content">
                                <h4>Wiki Style Articles Application</h4>
                                <p>
                                    Ruby on Rails Application which performs CRUD Operations, includes User Authorization. - Team Project
                                </p>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Github
                            </Button>
                        </CardActions>
                    </Card>
                    <Card className="projects__card">
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={rocket}
                            title="Contemplative Reptile"
                            />
                            <CardContent className="projects__card__content">
                                <h4>Recipe Box</h4>
                                <p>
                                    Ruby on Rails Application which performs CRUD Operations for updating food recipes.
                                </p>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Github
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </Container>
        </section>
    )
}
export default Projects;
