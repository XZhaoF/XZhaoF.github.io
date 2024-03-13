import React from 'react';
import './about.css';
import about_me from '../../assets/custom_smile.png';

const about_me_paragraph1 = "I am an undergraduate studying Computer Science at UC Berkeley. Currently I'm exploring interests in fields like Artificial Intelligence, Security, and Games. Passionate about tutoring and building technologies that make actual impact on communities.";
const about_me_paragraph2 = "In my downtime, I enjoy video gaming with friends (or just immersing myself in single-player, story rich games) or perhaps coding something up thats related to video games for everyone to use. Oh yeah, I also love Porter Robinson's music : )";

const About = () => {
    return (
        <section id="about">
            <span className="Title">More about me</span>
            <div className="aboutBars">

                <div className="aboutBar">
                    <img src={about_me} alt="about_me" className="aboutBarImage" />
                    <div className="aboutBarText">
                        <p>{about_me_paragraph1}</p>
                        <br></br>
                        <p>{about_me_paragraph2}</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;