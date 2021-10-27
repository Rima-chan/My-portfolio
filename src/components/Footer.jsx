function Footer() {
    return(
        <footer className="w-full flex justify-center items-center bg-gray-800 pt-14 pb-10">
            <div className="flex flex-col justify-center">
                <span className="inline-flex text-white mx-auto pb-10">
                    <a className="border-2 rounded-full flex items-center justify-center h-10 w-10 mx-3 hover:bg-gray-200 hover:text-gray-800 transition-all duration-200 ease-in-out" href="https://github.com/Rima-chan?tab=repositories" arial-label="Visitez mon GitHub" target="_blank" rel="noreferrer">
                        <i className="fab fa-github-alt fa-lg"></i>
                        <span className="sr-only">Visitez mon GitHub</span>
                    </a>
                    <a className="border-2 rounded-full flex items-center justify-center h-10 w-10 mx-3 hover:bg-gray-200 hover:text-gray-800 transition-all duration-200 ease-in-out" href="https://www.linkedin.com/in/marie-beaujeu-965798b2/" arial-label="Visitez mon Linkedin" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin fa-lg"></i>
                        <span className="sr-only">Visitez mon linkedin</span>
                    </a>
                </span>
                <p className="text-white text-center italic text-sm pb-3">&copy; Copyright 2021 - Marie Beaujeu</p>
                <p className="text-white text-center text-sm">Mentions Légales | Politique de confidentialité</p>
            </div>
        </footer>
    );
}

export default Footer;