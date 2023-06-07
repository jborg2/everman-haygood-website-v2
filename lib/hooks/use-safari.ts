import { useState, useEffect } from 'react';

const useSafari = () => {
    const [isSafari, setIsSafari] = useState(false);

    useEffect(() => {
        const checkSafari = () => {
            const userAgent = window.navigator.userAgent;
            const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
            setIsSafari(isSafari);
        };

        checkSafari();
    }, []);

    return isSafari;
};

export default useSafari;