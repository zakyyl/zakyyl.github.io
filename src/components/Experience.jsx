import React from 'react';
import '../styles/Experience.css';

// Import images from the src folder
import platinumImg from '../assets/images/experience/platinum.png';
import aslabImg from '../assets/images/experience/aslab.png';
import wisudaImg from '../assets/images/experience/wisuda.png';
import stupenImg from '../assets/images/experience/stupen.png';

const Experience = () => {
    const experiences = [
        { 
            title: "Job Title 1", 
            company: "Company 1", 
            duration: "2023 - Present", 
            description: "Short description of the experience", 
            img: platinumImg 
        },
        { 
            title: "Job Title 2", 
            company: "Company 2", 
            duration: "2022 - 2023", 
            description: "Short description of the experience", 
            img: aslabImg 
        },
        { 
            title: "Job Title 3", 
            company: "Company 3", 
            duration: "2021 - 2022", 
            description: "Short description of the experience", 
            img: wisudaImg 
        },
        { 
            title: "Job Title 3", 
            company: "Company 3", 
            duration: "2021 - 2022", 
            description: "Short description of the experience", 
            img: stupenImg 
        }
    ];

    return (
        <section id="experience" className="experience">
            <h2>My Experience</h2>
            <div className="experience-grid">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-card">
                        <img src={exp.img} alt={exp.title} className="experience-img"/>
                        <div className="experience-info">
                            <h3>{exp.title}</h3>
                            <h4>{exp.company}</h4>
                            <p className="duration">{exp.duration}</p>
                            <p>{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
