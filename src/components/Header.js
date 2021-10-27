import bgImage from '../images/bg-pc-coffe.jpg';
import NavBar from './NavBar';

function Header() {
    return(
        <div className="w-full">
            <div
              className="bg-cover bg-fixed"
              style={{ backgroundImage: `url(${bgImage})`}}>
                <NavBar></NavBar>
                <div className="text-white text-center py-32">
                    <p class="uppercase tracking-wider text-2xl pb-8">Marie Beaujeu</p>
                    <h1 class="uppercase tracking-widest text-5xl font-bold">Développement web</h1>
                </div>
            </div>
        </div>
    )
}

export default Header;