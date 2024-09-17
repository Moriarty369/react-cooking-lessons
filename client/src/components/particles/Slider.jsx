import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./slider.css"


const Slider = () => {

    // OJO ES NECESARIO AJUSTAR LAS IMÁGENES PNG PARA Q OCUPEN EL ANCHO (TRABAJO DE FOTOGRAFIA 1940*1020px aprox)
  const images = [
    {
      original: "./home/first-slide.png",
    //   lazyLoad: "true"
    //   originalWidth :"100%"
    showPlayButton: "false",
    autoplay: "true" 
    },
    {
      original: "./home/second-slide.png",
    },
    {
      original: "./home/third-slide.png",
    },
  ];
  return (
    <div className="slider-ctn">
    <ImageGallery   className="my-slider" items={images} showPlayButton={false} autoPlay={true} showNav={false} showFullscreenButton={true}/>
    </div>
  );
};

export default Slider;
