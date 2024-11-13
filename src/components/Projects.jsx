import React from 'react';
import '../styles/Projects.css';

// Import project images
import clothestoreImg from '../assets/images/project/clothestore.png';
import keluhprovImg from '../assets/images/project/keluhprov.png';
import ecomImg from '../assets/images/project/ecom.png';
import komidentistImg from '../assets/images/project/komidentist.png';
import pmbacaiImg from '../assets/images/project/pmbacai.png';
import HclothesImg from '../assets/images/project/hclothes.png';
import HospitalImg from '../assets/images/project/medilab.png';
import WebnimeImg from '../assets/images/project/webnime.png';

const Projects = () => {
    const projects = [
        { 
            title: "Clothestore", 
            img: clothestoreImg, 
            description: "E-commerce website for clothing store"
        },
        { 
            title: "Keluhprov", 
            img: keluhprovImg, 
            description: "Platform for reporting provincial issues"
        },
        { 
            title: "Ecom", 
            img: ecomImg, 
            description: "Online store for electronics"
        },
        { 
            title: "Komidentist", 
            img: komidentistImg, 
            description: "Website for dental clinic management"
        },
        { 
            title: "PM Bacai", 
            img: pmbacaiImg, 
            description: "PM Bacai website for educational services"
        },
        { 
            title: "Hclothes", 
            img: HclothesImg, 
            description: "PM Bacai website for Clothes Store"
        },
        { 
            title: "Hospital", 
            img: HospitalImg, 
            description: "Hospital website for Hospitality"
        },
        { 
            title: "Webnime", 
            img: WebnimeImg, 
            description: "Anime website for List Watching Anime"
        },

    ];

    return (
        <section id="projects" className="projects">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.img} alt={project.title} className="project-img"/>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
