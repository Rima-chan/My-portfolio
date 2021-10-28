import { useEffect, useState } from "react";

function ScrollButton() {
    const [isVisible, setIsVisible] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, []);
    return(
        <div className="fixed bottom-5 right-5">
            {isVisible && (
                <button 
                type="button"
                aria-label="Retourner en haut de page"
                className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-50 bg-opacity-60"
                onClick={scrollToTop}
                  >
                    <i className="fas fa-chevron-up"></i>
                </button>
            )}
        </div>
    );
}

export default ScrollButton;