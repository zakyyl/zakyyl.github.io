import React from 'react';
import '../styles/About.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import profileImage from '../assets/images/propil.png';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="about-text">
                    <p className="greeting">Hi I'am</p>
                    <h1>Zaky Ramadhakara</h1>
                    <p className="description">
                    "I am a 7th-semester student with a background in Computer Science, specializing in web and mobile development. Passionate about coding and building user-friendly applications, I aim to create innovative solutions that enhance the digital experience."
                    </p>
                    <div className="buttons">
                        <a 
                            href="https://www.linkedin.com/in/zaky-ramadhakara/" 
                            className="btn-linkedin" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin />
                            LinkedIn
                        </a>
                        <a 
                            href="https://github.com/zakyyl" 
                            className="btn-github" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            GitHub
                        </a>
                    </div>
                </div>
                <div className="about-image">
                    <img src={profileImage} alt="My profile" className="profile-img"/>
                </div>
            </div>
        </section>
    );
};

export default About;
