import NavBar from './NavBar';

function Header() {
    return(
        <header className="w-full fixed top-0 z-10" id="home" role="banner">
            <div
              className="flex flex-wrap items-center"
              >
            <NavBar></NavBar>
                {/* <div className="text-white text-center py-32">
                    <p className="uppercase tracking-wider text-xl pb-8">Marie Beaujeu</p>
                    <h1 className="uppercase tracking-widest text-3xl md:text-5xl font-bold px-2">Développement web</h1>
                </div> */}
            </div>
        </header>
    )
}

export default Header;