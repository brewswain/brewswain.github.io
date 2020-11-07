import React, { useState, useEffect } from "react";

import "./ImageLoader.style.scss";

const ImageLoader = ({ className, src }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  console.log(isLoaded);

  useEffect(() => {
    src && setIsLoaded(true);
  }, [src]);

  return (
    <img
      src={src}
      alt="Loading Higher Order Component"
      className={`${
        isLoaded ? "image--loaded" : "image--loading"
      } ${className}`}
    />
  );
};

export default ImageLoader;
