import React from 'react';
import './intro.css';
import me from '../../assets/me.PNG';

const Intro = () => {

  return (
      <section id="intro">
          <div className="introContent">
              <span className="hello">Hey There ~ </span>
              <span className="intro-text">My name is <span className="intro-name">Zhao,</span></span>
              <span className="intro-paragraph">I'm a ...</span>
              <div className="sliding-words">
                  <span className="word1">Software Engineer</span>
                  <span className="word2">Matcha Lover</span>
                  <span className="word3">Gamer</span>
                  <span className="word4">Porter Robinson Fan</span>
              </div>
          </div>

          <img src={me} alt="Profile" className="me" />
      </section>
  );
}

export default Intro;