import React from 'react';
import Image from 'next/image';

export default function OnlineBanner() {
  return (
    <div className='banner-container'>
        <div className="banner">
            <div className="banner__text">
                <div className="banner__text--online"> <Image src={require('../public/images/tabletop-icon.png')} alt="switch" width={50} height={40} /> <p>Online</p></div>
                <h3 className="banner__text--h3">Play online, access classic NES™ and Super NES™ games, and more with a Nintendo Switch Online membership.</h3>
                <span className='banner__text--supports'>This game supports: <p className='text-red-underline'>Online Play </p><p className='text-red-underline'>Save Data Cloud</p></span>
                <div className="btn-container ">
                <button className='btn__download btn-learn-more text-header'>Learn More</button>
                </div>
            </div>
            <div className="banner__img">
                <Image src={require('../public/images/controller-hands.avif')} alt="controller" layout='fill' />
            </div>
        </div>
    </div>
  )
}
