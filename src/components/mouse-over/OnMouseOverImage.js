import React, { useRef } from "react";

const OnMouseOverImage = ({ primaryImg, secondaryImg }) => {
    const imageRef = useRef(null);
    return (
        <img
            ref={imageRef}
            src={primaryImg}
            onMouseOver={() => imageRef.current.src = secondaryImg}
            onMouseOut={() => imageRef.current.src = primaryImg}
            alt=""
        />
    );
};

export default OnMouseOverImage;
