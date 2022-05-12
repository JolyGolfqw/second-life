import style from "./helpSheltersCard.module.css";
import donateImage from "../../assets/vector.png";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const HelpSheltersCard = () => {
  const container = useRef(null);
  const containerTwo = useRef(null);

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/donationbox.json"),
    });
    return () => instance.destroy();
  }, []);

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: containerTwo.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/donats.json"),
    });

    return () => instance.destroy();
  }, []);

  return (
    <div className={style.helpShelterCardPosition}>
      <div className={style.infoContent}>
        <div className={style.circleContent}></div>
        <div className={style.containerLottie} ref={containerTwo}></div>
          <div className={style.containerLottieTwo} ref={container}></div>
        <div className={style.textContent}>
          <div className={style.titleContent}>Меняй мир к лучшему</div>
          <div className={style.subtitleContent}>Время донатить</div>
          <div className={style.discriptionContent}>
            Выберите любой приют, кому вы хотите
            <br />
            задонатить. В настоящее время мы на работаем более
            <br /> чем с 5 приютами, в которых в общей сложности
            <br /> проживают более 100 питомцев.
          </div>
        </div>
        <div className={style.containerImages}>
          <img
            src={donateImage}
            alt="donateImg"
            className={style.donateImageContent}
          />
        </div>
      </div>
    </div>
  );
};

export default HelpSheltersCard;
