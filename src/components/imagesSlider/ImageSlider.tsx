import React, { useEffect, useState } from "react";
import "./imageSlider.css";

type ImageMap = Record<string, { default: string }>;
const images: ImageMap = import.meta.glob(
  "/public/assets/background-images/*.jpg",
  {
    eager: true,
  }
);

const ImageSlider: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<string>(
    images[Object.keys(images)[0]]?.default
  );
  const [preloadedImages, setPreloadedImages] = useState<HTMLImageElement[]>(
    []
  );

  useEffect(() => {
    const loadedImages = Object.keys(images).map((key) => {
      const img = new Image();
      img.src = images[key].default;
      return img;
    });
    setPreloadedImages(loadedImages);
  }, []);

  useEffect(() => {
    if (preloadedImages.length === 0) return;

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * preloadedImages.length);
      setCurrentImage(preloadedImages[randomIndex].src);
    }, 5000);

    return () => clearInterval(interval);
  }, [preloadedImages]);

  return (
    <div
      className="image-slider"
      style={{
        backgroundImage: `url(${currentImage})`,
      }}
    ></div>
  );
};

export default ImageSlider;
