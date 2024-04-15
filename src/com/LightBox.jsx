import React, { useEffect, useState } from "react";
import {
  imageproduct1,
  imageproduct2,
  imageproduct3,
  imageproduct4,
  imageproduct1Galerie,
  imageproduct2Galerie,
  imageproduct3Galerie,
  imageproduct4Galerie,
  iconprevious,
  iconnext,
  iconclose,
} from "../public/images/assets";
const LightBox = ({ click }) => {
  const [imgSelected, changeImageSelected] = useState(imageproduct1);
  const [numberImg, setNumberImg] = useState(1);
  useEffect(() => {
    switch (numberImg) {
      case 1:
        changeImageSelected(imageproduct1);
        break;
      case 2:
        changeImageSelected(imageproduct2);
        break;
      case 3:
        changeImageSelected(imageproduct3);
        break;
      case 4:
        changeImageSelected(imageproduct4);
    }
  }, [numberImg]);
  return (
    <div className="lightbox absolute top-0 left-0 w-full h-full z-20 flex-center">
      <div className="w-[450px] h-full flex flex-col">
        <div className="flex justify-between absolute w-[500px] xm:w-[360px] top-1/2 left-1/2 -translate-y-16 -translate-x-1/2 xm:translate-y-3 ">
          <img
            src={iconprevious}
            alt="buttons"
            className="rounded-circle p-5 bg-white"
            onClick={() => setNumberImg((curr) => (curr <= 1 ? 4 : curr - 1))}
          />
          <img
            src={iconnext}
            alt="buttons"
            className="rounded-circle p-5 bg-white"
            onClick={() => setNumberImg((curr) => (curr >= 4 ? 1 : curr + 1))}
          />
        </div>
        <img
          src={iconclose}
          alt="close icon"
          className="my-5 ml-auto cursor-pointer"
          onClick={click}
        />
        <img
          src={imgSelected}
          alt="selected img"
          className="w-[450px] rounded-md mx-auto mb-5 xm:w-[350px] xm:my-auto"
        />
        <div className="bg-black flex justify-evenly">
          <img
            src={imageproduct1Galerie}
            alt="galerie imgs"
            className={`w-1/5 h-full rounded duration-300 hover:opacity-70 cursor-pointer xm:hidden ${
              imgSelected === imageproduct1 ? "galerie-images active" : ""
            }`}
            onClick={() => setNumberImg(1)}
          />
          <img
            src={imageproduct2Galerie}
            alt="galerie imgs"
            className={`w-1/5 h-full rounded duration-300 hover:opacity-70 cursor-pointer xm:hidden ${
              imgSelected === imageproduct2 ? "galerie-images active" : ""
            }`}
            onClick={() => setNumberImg(2)}
          />
          <img
            src={imageproduct3Galerie}
            alt="galerie imgs"
            className={`w-1/5 h-full rounded duration-300 hover:opacity-70 cursor-pointer xm:hidden ${
              imgSelected === imageproduct3 ? "galerie-images active" : ""
            }`}
            onClick={() => setNumberImg(3)}
          />
          <img
            src={imageproduct4Galerie}
            alt="galerie imgs"
            className={`w-1/5 h-full rounded duration-300 hover:opacity-70 cursor-pointer xm:hidden ${
              imgSelected === imageproduct4 ? "galerie-images active" : ""
            }`}
            onClick={() => setNumberImg(4)}
          />
        </div>
      </div>
    </div>
  );
};
export default LightBox;
