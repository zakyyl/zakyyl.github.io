// App.jsx
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Experience from './components/Experience';


const App = () => {
    return (
        <div className="App">
            <Header />
            <About />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
