import { useState, useEffect } from 'react';
import logo from '../images/mb-logo-black.png';

function NavBar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10);
        });
    }, []);
    return(
        <>
        <nav className={"w-full bg-gray-50 bg-opacity-70 transition-all duration-150 ease-in" + (scroll ? ' bg-gray-400 bg-opacity-90 ' : '')}>
            <div className="w-full flex flex-wrap items-center justify-between">
                <div className={"w-full relative flex justify-between md:w-auto md:static md:bloc" + (navbarOpen ? " border-b border-gray-800 border-opacity-50" : "")} >
                    <a
                      href="#home" 
                      className="font-bold uppercase leading-relaxed inline-block whitespace-nowrap mr-4 py-2">
                          <img src={logo} alt="Logo accueil" className="w-24 ml-10 md:ml-20"></img>
                    </a>
                    <button 
                      aria-label="Bouton menu"
                      type="button"
                      onClick={() => setNavbarOpen(!navbarOpen)}
                      className="cursor-pointer leading-none md:hidden mr-10 md:mr-20"
                    >
                        <i className="fas fa-bars fa-2x"></i>
                    </button>
                </div>
                <div 
                  id="navbar"
                  className={" md:flex items-center justify-center" + (navbarOpen ? " flex animate-slide-in-left" : " hidden")}>
                
                <ul className="w-full flex flex-col md:flex-row md:mr-20 list-none ml-8 tracking-widest">
                    <li className="nav-item active inline-flex items-center ">
                        <a  
                          href="#home"
                          className="uppercase font-bold leading-snug hover:text-red-700 active:text-red-700 px-3 py-4">
                            <i className="fas fa-home fa-lg"></i>
                            <span className="sr-only">Retour accueil</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a  
                          onClick={() => setNavbarOpen(false)}
                          href="#projects"
                          className="flex items-center uppercase font-bold leading-snug hover:text-red-700 px-3 py-4">
                            Projets
                        </a>
                    </li>
                    <li className="nav-item">
                        <a  
                          onClick={() => setNavbarOpen(false)}
                          href="#skills"
                          className="flex items-center uppercase font-bold leading-snug hover:text-red-700 px-3 py-4">
                            Comp??tences
                        </a>
                    </li>
                    <li className="nav-item">
                        <a  
                          href="#contact"
                          onClick={() => setNavbarOpen(false)}
                          className="flex items-center uppercase font-bold leading-snug hover:text-red-700 px-3 py-4">
                            Contact
                        </a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    );
}

export default NavBar;