import NavBar from './NavBar';

function Header() {
    return(
        <header className="w-full fixed top-0 z-20" role="banner">
            <div
              className="flex flex-wrap items-center"
              >
            <NavBar></NavBar>
            </div>
        </header>
    )
}

export default Header;