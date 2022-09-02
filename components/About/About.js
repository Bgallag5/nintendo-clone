import React, {useRef, useEffect} from "react";
import Image from "next/image";

export default function About() {

    const checkboxRef = useRef();
    const textboxRef = useRef();
    const blocktextRef = useRef();

    function handleReadMore(){
        console.log(checkboxRef.current.checked );

        if (checkboxRef.current.checked){
            blocktextRef.current.classList.remove('block-with-text');
            textboxRef.current.style.height = 'auto';
        } else if (!checkboxRef.current.checked){

            textboxRef.current.style.height = '20rem';
            blocktextRef.current.classList.add('block-with-text');
        }

    }

  return (
    <div className="about-container ">
      <div className="about ">
        <div className="about__info">
            <div ref={textboxRef} className="about__text ">
          <p>
            You’ve inherited your grandfather’s old farm plot in Stardew Valley.
            Armed with hand-me-down tools and a few coins, you set out to begin
            your new life. Can you learn to live off the land and turn these
            overgrown fields into a thriving home? It won’t be easy. Ever since
            Joja Corporation came to town, the old ways of life have all but
            disappeared. The community center, once the town’s most vibrant hub
            of activity, now lies in shambles. But the valley seems full of
            opportunity. With a little dedication, you might just be the one to
            restore Stardew Valley to greatness!
          </p>
          <p ref={blocktextRef} className="block-with-text">
            Now with Multiplayer! Invite 1-3 players to join you in the valley!
            Players can work together to build a thriving farm, share resources,
            and build relationships with townspeople or each other. As more
            hands are better than one, players have the option to scale profit
            margin on produce sold for a more challenging experience.
          </p>
          <div className="btn-container btn-container--about">
          <button className="about--btn btn__download text-header">
            Explore this game&apos;s official website
          </button>
          </div>
            </div>
          <div className="read-more">
            <input onChange={() => handleReadMore()} ref={checkboxRef} type={"checkbox"} className="checkbox" />
            <p className="read-more--text">Read More</p>
          </div>
        </div>
        <div className="about__photo">
            <Image className="img" src={require('../../public/images/steward-valley-hero.avif')} alt="stardew valley" layout="fill" />
        </div>
      </div>
    </div>
  );
}
