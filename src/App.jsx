import './App.css';
import About from './components/About';
import Certificate from './components/Certificate';
import Education from './components/Education';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skill from './components/Skill';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

function App(){

    const [showButton, setShowButton] = useState(false);

        const scrollToTop = () =>{
            window.scrollTo({
                top: 0, 
                behavior: 'smooth'
            });
        };
    

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 300){
                setShowButton(true);
            }
            else{
                setShowButton(false);
            }
        };
        
 

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
},[]);


    return(
        <div className="main-container">
            <Navbar/>
            <Header/>
            <About/>
            <Education/>
            <Skill/>
            <Projects/>
            <Certificate/>
            <ContactForm/>
            <Footer/>
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className='scroll-top-button'
                    aria-label='Scroll to top'>
                    <ArrowUp/>
                </button>
            )}
        </div>
    );
};

export default App;