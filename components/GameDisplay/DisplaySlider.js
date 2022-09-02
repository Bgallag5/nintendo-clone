import React, {useState, useEffect, useRef} from 'react';
import Image from 'next/image';

export default function DisplaySlider() {
    const containerRef = useRef()
    const sliderRef = useRef()
    /*
    get length of full slider 
    get length of what is being shown - length of container
    lengthRemaining = full length - length shown
    if lengthRemaining > length shown ? translateX 100%
    else if lengthRemaining < shown ? translate only to that point
    */

    const handleSliderMove = (direction) => {

        let shownLengthPx = containerRef.current.getBoundingClientRect().width;
        let fullLengthPx = sliderRef.current.getBoundingClientRect().width;
        // console.log(shownLengthPx);
        // console.log(fullLengthPx);
        let lengthRemaining = Number(fullLengthPx - shownLengthPx).toFixed(2)
            console.log(fullLengthPx);
            console.log(lengthRemaining);
            //get lengthRemaining's percentage of entire length - translate by that much 
            let offset = `${(lengthRemaining / fullLengthPx  ) * 100}`
            console.log(offset);
            sliderRef.current.style.transform = `translateX(-${offset}%)`

    }

    const handleSliderBtnClick = (e) => {
        let direction = e.target.direction;
        handleSliderMove(direction)
    }


  return (
    <div ref={containerRef} className='slider-container'>
        <div ref={sliderRef} className="slider">
            <div className="slide test">
                    <Image className='slide__img'  src={require('../../public/images/sv-game-1.avif')} alt="stardew valley" layout="fill"/>
            </div>
            <div className="slide">
                    <Image className='slide__img'  src={require('../../public/images/sv-game-1.avif')} alt="stardew valley" layout="fill"/>
            </div>
            <div className="slide">
                    <Image className='slide__img'  src={require('../../public/images/sv-game-1.avif')} alt="stardew valley" layout="fill"/>
            </div>
            <div className="slide">
                    <Image className='slide__img'  src={require('../../public/images/sv-game-1.avif')} alt="stardew valley" layout="fill"/>
            </div>
            <div className="slide">
                    <Image className='slide__img'  src={require('../../public/images/sv-game-1.avif')} alt="stardew valley" layout="fill"/>
            </div>
            <div className="slide">
                    <Image className='slide__img'  src={require('../../public/images/sv-game-1.avif')} alt="stardew valley" layout="fill"/>
            </div>
        </div>
        <button direction="left" onClick={(e) => handleSliderBtnClick(e)} className="slider__btn slider__btn--left">{"<"}</button>
        <button direction="right"  onClick={(e) => handleSliderBtnClick(e)} className="slider__btn slider__btn--right">{">"}</button>
    </div>
  )
}
