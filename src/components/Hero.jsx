import bgImage from '../images/bg-pc-coffe.jpg';

function Hero() {
    return(
        <div className="bg-cover bg-fixed w-screen h-full z-0"
            style={{ backgroundImage: `url(${bgImage})`}}
        >
        <div className="text-white text-center pb-32 pt-48">
            <p className="uppercase tracking-wider text-xl pb-8">Marie Beaujeu</p>
            <h1 className="uppercase tracking-widest text-3xl md:text-5xl font-bold px-2">Développement web</h1>
        </div>
        </div>
    )
}

export default Hero;