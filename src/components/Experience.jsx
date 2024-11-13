import React from 'react';
import '../styles/Experience.css';
import platinumImg from '../assets/images/experience/platinum.png';
import aslabImg from '../assets/images/experience/aslab.png';
import wisudaImg from '../assets/images/experience/wisuda.png';
import stupenImg from '../assets/images/experience/stupen.png';

const Experience = () => {
    const experiences = [
        { 
            title: "Panitia Ospek", 
            company: "Pelatihan Intelektual Muda UNAMA", 
            duration: "2023 - 2024",  
            img: platinumImg 
        },
        { 
            title: "Asisten Labor", 
            company: "Asisten Labor UNAMA", 
            duration: "2022 - 2024", 
            img: aslabImg 
        },
        { 
            title: "Panitia Wisuda", 
            company: "Panitia Pelaksana Wisuda UNAMA", 
            duration: "2023 - 2024", 
            img: wisudaImg 
        },
        { 
            title: "Study Independen", 
            company: "Program Kampus Merdeka", 
            duration: "2023 - 2023", 
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
