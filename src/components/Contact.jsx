import React, {} from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import only the relevant icons
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="contact-content">
                <h2>Let’s Talk with Me!</h2>
                <p>I’m open to new opportunities and collaborations. Feel free to reach out!</p>
                
                <div className="social-icons">
                    <a href="https://www.instagram.com/hakarazaky/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/zaky-ramadhakara/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="social-icon" />
                    </a>
                    <a href="https://github.com/zakyyl" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="social-icon" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
