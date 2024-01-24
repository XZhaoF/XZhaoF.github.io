import React from 'react';
import './intro.css';
import me from '../../assets/me.PNG';

const Intro = () => {
  return (
    <section id="intro">

        <div className="introContent">
            <span className="hello">Hey</span>
            <span className="intro-text">My name is <span className = "intro-name">Zhao</span> </span>
            <p className="intro-paragraph">I'm an aspiring Software Developer, and Computer Science student at UC Berkeley</p>
        </div>

        <img src={me} alt="Profile" className="me" />
    </section>
  );
}

export default Intro;