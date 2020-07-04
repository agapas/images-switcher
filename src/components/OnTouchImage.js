import React, { useRef, useState } from "react";

const OnTouchImage = ({ primaryImg, secondaryImg }) => {
    const imageRef = useRef(null);
    const [currentImg, setCurrentImg] = useState(primaryImg);
    return (
        <img
            ref={imageRef}
            current={currentImg}
            src={primaryImg}
            onTouchStart={() => {
                setCurrentImg(secondaryImg);
                imageRef.current.src = secondaryImg;
            }}
            onTouchEnd={() => {
                setCurrentImg(primaryImg);
                imageRef.current.src = primaryImg
            }}
            alt=""
        />
    );
};

export default OnTouchImage;
