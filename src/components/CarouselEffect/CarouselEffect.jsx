import React from 'react';
import { Carousel } from "react-responsive-carousel";
import { img } from './img/Data'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  classes from "./Carousel.module.css"
const CarouselEffect = () => {
    return (
      <div>
        <Carousel
          autoplay={true}
          infiniteLoop={true}
          ShowIndicators={false}
          showThumbs={false}
        >
          
          {
                    img.map((imageItemLink) => {
                    return <img key={imageItemLink} src={imageItemLink} />;
                    })
                    
                    
        }
                
        </Carousel>
        <div className={classes.hero__img}>

        </div>
        
      </div>
    );
}

export default CarouselEffect;




