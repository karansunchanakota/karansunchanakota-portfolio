import React, { useEffect } from 'react'
import './Main.css'
import About from '../../views/About/About'
import Contact from '../../views/Contact/Contact'
import Timeline from '../../views/Timeline/Timeline'
import Experience from '../../views/Experience/Experience'
import Projects from '../../views/Projects/Projects'
import Skills from '../../views/Skills/Skills'
import $ from 'jquery'
const Main = () => {
    useEffect(() => {
        ($(".navbar__brand")).click(function() {
            var destination = $(this).attr('dest');
            $('html, body').animate(
                {
                  scrollTop: $('#' + destination).offset().top
                },
                500
            );
        });

        ($(".navbar__items")).click(function() {
            var destination = $(this).attr('dest');
            $('html, body').animate(
                {
                  scrollTop: $('#' + destination).offset().top
                },
                500
            );
        });
    },[])
    return (
        <div className="main">
            <div className="main__home" id="home">
                <h3>Home</h3>
                <a dest="about" className="navbar__items">Know more about my work</a>
            </div>
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Timeline />
            <Contact />
        </div>
    )
}

export default Main;
