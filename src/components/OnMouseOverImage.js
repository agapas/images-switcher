import React, { useRef, useState } from "react";

const OnMouseOverImage = ({ primaryImg, secondaryImg }) => {
    const imageRef = useRef(null);
    const [currentImg, setCurrentImg] = useState(primaryImg);
    return (
        <img
            ref={imageRef}
            current={currentImg}
            src={primaryImg}
            onMouseOver={() => {
                setCurrentImg(secondaryImg);
                imageRef.current.src = secondaryImg;
            }}
            onMouseOut={() => {
                setCurrentImg(primaryImg);
                imageRef.current.src = primaryImg
            }}
            alt=""
        />
    );
};

export default OnMouseOverImage;
