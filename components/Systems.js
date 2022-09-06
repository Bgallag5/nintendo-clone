import React from 'react';
import ESRB from './ESRB';
import Image from 'next/image';

export default function Systems() {
  return (
    <div className="systems-container">

  
    <div className='systems'>
        <div className="systems__rating">
            <p>ESRB rating</p>
            <div className="esrb-container">

            <ESRB />
            </div>
        </div>
        <div className="systems__supported">
        <p>Supported play modes</p>
        <div className="modes">
            <div className="mode">
                <div className="mode-img">
                    <Image src={require('../public/images/tv-icon.png')} alt="switch-tv" height={40} width={50}/>
                </div>
                <p>TV</p>
            </div>
            <div className="mode">
                <div className="mode-img">
                    <Image src={require('../public/images/tabletop-icon.png')} alt="switch-tv" height={40} width={50} />
                </div>
                <p>Tabletop</p>
            </div>
            <div className="mode">
                <div className="mode-img">
                    <Image src={require('../public/images/handheld-icon.png')} alt="switch-tv" vheight={30} width={50} />
                </div>
                <p>Handheld</p>
            </div>
        </div>
        </div>
    </div>
      </div>
  )
}
