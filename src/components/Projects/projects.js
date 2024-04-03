import React from 'react'
import './projects.css'
import DiscordBot from '../../assets/discordbot.svg'
import Gitlet from '../../assets/gitlet.png'
import Pacman from '../../assets/pacman1.png'
import Pintos from '../../assets/pintos.png'

const about_DiscordBot = "A Discord Bot that helps planning events for the game Destiny 2. Users request to send embeds that other users can join, and the bot will message each user once that event reaches the required participants. Originally created for personal use in a friend's server to streamline event management, but now used by 700 servers."
const about_DiscordBot_tech = "Python, Discord API, Asyncio, Google Cloud Platform"

const about_Pintos = "Worked on a Pintos file system and kernel. Utilities implemented: user threads implementation, user-level synchronization, multithreading, priority scheduling, kernel switches, buffer caches, file directories."
const about_Pintos_tech = "C, x86 Assembly, Operating System (Concepts, Design, Implementation)"

const about_Pacman = "Created an AI agent for Pac-Man that navigates mazes and scores points. Initially, the agent used state-space search algorithms, but later incorporated probabilistic techniques for localization and mapping; trained using reinforcement learning."
const about_Pacman_tech = "Python, Artificial Intelligence Concepts (CSP, MDP, Reinforcement Learning, Bayes Net, Decision Networks, Markov Models, Neural Networks)"

const about_Gitlet = "Implemented a version-control system that had the basic features of Git (init, add, commit, remove, log, find, branch, statuses, rm-branch, reset, merge). Files were saved using cryptographic functions (SHA, Object Serialization). Metadata, file history and commits, and references were accessed and saved with graph traversal techniques."
const about_Gitlet_tech = "Java, Object Serialization, SHA Hashes, Graph Traversals, JUnit Unit and Integration Tests"

const Projects = () => {
    return (
        <section id="projects">
            <h2 className="title">Projects</h2>
            <span className="titleDesc">Here are some of the projects I've done</span>
            <div className="projectBars">

                <div className="projectBar">
                    <img src={DiscordBot} alt= "DiscordBot" className="projectBarImg" />
                    <div className="projectBarText">
                        <h2>Game Event Planner</h2>
                        <p>{about_DiscordBot}</p>
                        <br></br>
                        <div className="projectBarText_tech">
                            <p>{about_DiscordBot_tech}</p>
                        </div>
                    </div>
                </div>

                <div className="projectBar">
                    <img src={Pintos} alt= "Pintos" className="projectBarImg" />
                    <div className="projectBarText">
                        <h2>Pintos</h2>
                        <p>{about_Pintos}</p>
                        <br></br>
                        <div className="projectBarText_tech">
                            <p>{about_Pintos_tech}</p>
                        </div>
                    </div>
                </div>

                <div className="projectBar">
                    <img src={Pacman} alt= "PacmanAI" className="projectBarImg" />
                    <div className="projectBarText">
                        <h2>Pacman AI</h2>
                        <p>{about_Pacman}</p>
                        <br></br>
                        <div className="projectBarText_tech">
                            <p>{about_Pacman_tech}</p>
                        </div>
                    </div>
                </div>

                <div className="projectBar">
                    <img src={Gitlet} alt= "Gitlet" className="projectBarImg" />
                    <div className="projectBarText">
                        <h2>Gitlet</h2>
                        <p>{about_Gitlet}</p>
                        <br></br>
                        <div className="projectBarText_tech">
                            <p>{about_Gitlet_tech}</p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Projects