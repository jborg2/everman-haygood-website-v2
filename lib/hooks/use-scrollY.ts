import { useState, useEffect } from 'react';

const useScrollY = () => {
    const [scrollY, setScrollY] = useState(0);
    const [scrollYPercent, setScrollYPercent] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
        setScrollYPercent(window.scrollY / (window.innerHeight));
    };

    const handleResize = () => {
        setScrollY(window.scrollY / window.innerHeight);
    };

    // set initial scroll position on mount
    useEffect(() => {
        handleScroll();
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return { scrollY, scrollYPercent }
};

export default useScrollY;