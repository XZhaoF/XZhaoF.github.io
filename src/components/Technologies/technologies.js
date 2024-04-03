import React from 'react';
import './technologies.css';

import C from "../../assets/C_icon.png";
import C_plusplus from "../../assets/C++_icon.png";
import CSS from "../../assets/CSS_icon.png";
import HTML from "../../assets/HTML_icon.svg";
import Java from "../../assets/java_icon.png";
import Javascript from "../../assets/javascript_icon.png";
import Python from "../../assets/python_icon.svg";
import R from "../../assets/R_icon.svg";
import Risc_V from "../../assets/RISCV_icon.png";
import Rust from "../../assets/Rust_icon.png";
import SQL from "../../assets/sql_icon.png";
import ASM from "../../assets/x86ASM_icon.png";

import Docker from "../../assets/docker_icon.png";
import GCP from "../../assets/GCP_icon.png";
import JUnit from "../../assets/junit_icon.png";
import Jupyter from "../../assets/JUPYTER_icon.png";
import Logism from "../../assets/logism_icon.png";
import Matplot from "../../assets/matplot_icon.png";
import NumPy from "../../assets/NUMPY_icon.png";
import ReactIcon from "../../assets/REACT_icon.png";
import Scikit from "../../assets/scikit_icon.png";
import Pandas from "../../assets/Pandas_icon.png";



export const Technologies = () => {
  return (
    <section id="technologies">
        <h2 className="techTitle">Technologies</h2>
        <span className="techDescription">Here are the languages and tools I'm familiar with</span>
        <span className="LanguagesTitle">Languages</span>
        
        <div className="techBoxes">
            <div className="techBox">
                <img src={Java} alt= "Java" className="techImg" />
                <h2>Java</h2>
            </div>

            <div className="techBox">
                <img src={Javascript} alt= "Javascript" className="techImg" />
                <h2>Javascript</h2>
            </div>

            <div className="techBox">
                <img src={Python} alt= "Python" className="techImg" />
                <h2>Python</h2>
            </div>

            <div className="techBox">
                <img src={C} alt= "C" className="techImg" />
                <h2>C</h2>
            </div>

            <div className="techBox">
                <img src={R} alt= "R" className="techImg" />
                <h2>R</h2>
            </div>

            <div className="techBox">
                <img src={Rust} alt= "Rust" className="techImg" />
                <h2>Rust</h2>
            </div>

            <div className="techBox">
                <img src={C_plusplus} alt= "C++" className="techImg" />
                <h2>C++</h2>
            </div>

            <div className="techBox">
                <img src={Risc_V} alt= "Risc V" className="techImg" />
                <h2>Risc V</h2>
            </div>

            <div className="techBox">
                <img src={SQL} alt= "Sql" className="techImg" />
                <h2>SQL</h2>
            </div>

            <div className="techBox">
                <img src={ASM} alt= "Assembly" className="techImg" />
                <h2>x86 Assembly</h2>
            </div>

            <div className="techBox">
                <img src={HTML} alt= "HTML" className="techImg" />
                <h2>HTML 5</h2>
            </div>

            <div className="techBox">
                <img src={CSS} alt= "CSS" className="techImg" />
                <h2>CSS</h2>
            </div>

        </div>

        <span className="ToolsTitle">Tools</span>


        <div className="toolBoxes">
            <div className="toolBox">
                <img src={ReactIcon} alt= "React" className="toolImg" />
                <h2>React</h2>
            </div>

            <div className="toolBox">
                <img src={Docker} alt= "Docker" className="toolImg" />
                <h2>Docker</h2>
            </div>

            <div className="toolBox">
                <img src={GCP} alt= "GCP" className="toolImg" />
                <h2>Google Cloud Platform</h2>
            </div>
            <div className="toolBox">
                <img src={JUnit} alt= "JUnit" className="toolImg" />
                <h2>JUnit</h2>
            </div>

            <div className="toolBox">
                <img src={Logism} alt= "Logism" className="toolImg" />
                <h2>Logism</h2>
            </div>

            <div className="toolBox">
                <img src={Matplot} alt= "Matplotlib" className="toolImg" />
                <h2>Matplotlib</h2>
            </div>

            <div className="toolBox">
                <img src={NumPy} alt= "NumPy" className="toolImg" />
                <h2>NumPy</h2>
            </div>

            <div className="toolBox">
                <img src={Pandas} alt= "Pandas" className="toolImg" />
                <h2>Pandas</h2>
            </div>

            <div className="toolBox">
                <img src={Scikit} alt= "Scikit" className="toolImg" />
                <h2>Scikit-learn</h2>
            </div>

            <div className="toolBox">
                <img src={Jupyter} alt= "Jupyter" className="toolImg" />
                <h2>Jupyter Notebook</h2>
            </div>

        </div>
    </section>
  );
}

export default Technologies