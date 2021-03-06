import React, { useRef, useEffect, useCallback, useState } from "react";

const OnScrollImage = ({ primaryImg, secondaryImg }) => {
    // using useRef here is just for practicing React Hooks
    const imageRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [inView, setInView] = useState(false);

    const scrollHandler = useCallback(() => {
        setInView(() => {
            return isInView();
        });
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        setInView(isInView());
        setIsLoading(false);
        return (() => {
            window.removeEventListener("scroll", scrollHandler);
        });
    }, [isLoading, scrollHandler]);

    const isInView = () => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
        return false;
    };

    return isLoading ? null : (
        <img
            ref={imageRef}
            src={inView ? secondaryImg : primaryImg}
            alt=""
            style={{ opacity: inView ? 1 : 0.5 }}
        />
    );
};

export default OnScrollImage;
