import React from 'react';
import '../styles/Projects.css';
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
            title: "Clothes Store", 
            img: clothestoreImg, 
            description: "E-commerce Mobile for clothing store",
            githubLink: "https://github.com/zakyyl/hakara-clothes.git"
        },
        { 
            title: "Keluh-Prov", 
            img: keluhprovImg, 
            description: "Platform for reporting provincial issues",
            githubLink: "https://github.com/Capstone-Project-Alterra-Kelompok-8/e-complaint-mobile.git"
        },
        { 
            title: "E-Commerce", 
            img: ecomImg, 
            description: "Mobile Online store for electronics",
            githubLink: "https://github.com/zakyyl/flutter-ui-e-commerce.git"
        },
        { 
            title: "Komi Dentist", 
            img: komidentistImg, 
            description: "Mobile for dental clinic management",
            githubLink: "https://github.com/zakyyl/Flutter_Komi_Dentist_MiniProject.git"
        },
        { 
            title: "PMB Acai", 
            img: pmbacaiImg, 
            description: "PM Bacai website for educational services",
            githubLink: "https://github.com/zakyyl/project_pmb_acai.git"
        },
        { 
            title: "Hakara Clothes", 
            img: HclothesImg, 
            description: "Website for Clothes Store",
            githubLink: "https://github.com/zakyyl/hakara-clothes.git"
        },
        { 
            title: "Hospitality Website", 
            img: HospitalImg, 
            description: "Hospital website for Hospitality",
            githubLink: "https://github.com/zakyyl/project_hospital.git"
        },
        { 
            title: "Webnime", 
            img: WebnimeImg, 
            description: "Website for List Watching Anime",
            githubLink: "https://github.com/zakyyl/Jikan-Moe.git"
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
                            <a 
                                href={project.githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="github-link"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
