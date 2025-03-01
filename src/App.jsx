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

function App(){

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
        </div>
    );
};

export default App;