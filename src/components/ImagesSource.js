import React from 'react';
  
const ImagesSource = ({ source }) => (
    <div className="images-source">
      Source of images:
      <a href={source}>{source}</a>
    </div>
);

export default ImagesSource;
