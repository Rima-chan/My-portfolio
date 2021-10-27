import { useState, createRef, React } from 'react';

 const Carousel = (props) => {
        const [currentImage, setCurrentImage] = useState(0);
        const refs = props.images.reduce((acc, val, i) => {
            acc[i] = createRef();
            return acc;
        }, {});
        const scrollToImage = i => {
            setCurrentImage(i);
            refs[i].current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'start',
            });
        };
        const totalImages = props.images.length;
        const nextImage = () => {
            if (currentImage >= totalImages - 1) {
                scrollToImage(0);
            } else {
                scrollToImage(currentImage + 1);
            }
        };
        const previousImage = () => {
            if (currentImage === 0) {
                scrollToImage(totalImages - 1);
            } else {
                scrollToImage(currentImage - 1);
            }
        };
        const arrowStyle = 'text-2xl z-10 bg-gray-50 h-10 w-10 absolute rounded-full opacity-75 flex items-center justify-center top-1/2 hover:bg-gray-500 hover:text-white transition-all duration-200 ease-in';
        const sliderButton = type => (
            <i className={`fas fa-chevron-${type === 'right' ? 'right' : 'left'}`}></i>
        )
        const sliderControl = (isLeft) => (
          <button  
           type="button"
           aria-label={isLeft ? 'Défiler les images par la gauches' : 'Défilez les images par la droite'}
           onClick={isLeft ? previousImage : nextImage}
           className={`${arrowStyle} ${isLeft ? ' left-2' : ' right-2'}`}
           >
            <span role="img" aria-label={`Fleche ${isLeft ? 'gauche' : 'droite'}`}>
                { isLeft ? sliderButton('left') : sliderButton('right')}
            </span>
          </button>
        );
        
    return(
        <div className="flex justify-center items-center">
            <div className="relative w-full">
                <div className="carousel">
                  {sliderControl(true)}
                  {props.images.map((img, i) => (
                      <div className="w-full flex-shrink-0 object-cover" key={img} ref={refs[i]}>
                          <img src={img} className="w-full object-contain" alt={img} />
                      </div>
                  ))}
                  {sliderControl()}
                </div>
            </div>

        </div>
    );
}

export default Carousel;