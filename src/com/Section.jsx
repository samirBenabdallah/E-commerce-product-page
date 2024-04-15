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
  iconplus,
  iconminus,
  iconCart,
} from "../public/images/assets";
import { useDispatch } from "react-redux";
import { addCart } from "../rtk/cart";
const Section = ({ click }) => {
  const [count, changeCount] = useState(0);
  const [imgSelected, changeImageSelected] = useState(imageproduct1);
  const price = 125;
  const name = "fall limited edition sneakers";
  const [numberImg, setNumberImg] = useState(1);
  const dispatch = useDispatch();
  function sendToCart() {
    const cart = {
      img: imgSelected,
      price,
      count,
      name,
    };
    dispatch(addCart(cart));
  }
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
    <div className="w-full h-[90%] p-5 flex md:flex-col md:items-center mb:px-0">
      <div
        className="galerie w-1/2 h-full grid grid-cols-4 gap-2 grid-rows-5 
    md:w-3/4 mb:block mb:w-full mb:h-[40vh] mb:relative relative z-[-1]"
      >
        {/* mobile button prev/next */}
        <img
          src={iconprevious}
          alt="prev img"
          className="hidden mb:block absolute top-1/2 -translate-y-1/2 left-4 bg-white rounded-circle p-5"
          onClick={() => setNumberImg((curr) => (curr <= 1 ? 4 : curr - 1))}
        />
        <img
          src={iconnext}
          alt="next img"
          className="hidden mb:block absolute top-1/2 -translate-y-1/2 right-4 bg-white rounded-circle p-5"
          onClick={() => setNumberImg((curr) => (curr >= 4 ? 1 : curr + 1))}
        />
        {/* main img selected */}
        <img
          src={imgSelected}
          alt="img selected"
          className="row-span-4 col-span-4 h-full mx-auto rounded mb:w-full mb:h-full cursor-pointer"
          onClick={() => click()}
        />
        {/* desktop galerie */}
        <img
          src={imageproduct1Galerie}
          alt="imgs"
          className={`h-full rounded mx-auto cursor-pointer duration-300 hover:opacity-70 mb:hidden ${
            imgSelected === imageproduct1 ? "galerie-images active" : ""
          }`}
          onClick={(e) => setNumberImg(1)}
        />
        <img
          src={imageproduct2Galerie}
          alt="imgs"
          className={`h-full rounded mx-auto cursor-pointer duration-300 hover:opacity-70 mb:hidden ${
            imgSelected === imageproduct2 ? "galerie-images active" : ""
          }`}
          onClick={(e) => setNumberImg(2)}
        />
        <img
          src={imageproduct3Galerie}
          alt="imgs"
          className={`h-full rounded mx-auto cursor-pointer duration-300 hover:opacity-70 mb:hidden ${
            imgSelected === imageproduct3 ? "galerie-images active" : ""
          }`}
          onClick={(e) => setNumberImg(3)}
        />
        <img
          src={imageproduct4Galerie}
          alt="imgs"
          className={`h-full rounded mx-auto cursor-pointer duration-300 hover:opacity-70 mb:hidden ${
            imgSelected === imageproduct4 ? "galerie-images active" : ""
          }`}
          onClick={(e) => setNumberImg(4)}
        />
      </div>
      <div className="p-5 w-1/2 md:w-3/4 xm:w-full">
        <p className="font-bold uppercase text-Orange-default text-sm mb-4">
          snaker company
        </p>
        <h1 className="text-5xl font-bold capitalize mb-4 xm:text-4xl">
          {name}
        </h1>
        <p className="text-blue-90 mb-4">
          These low-profile sneakers are you perfect casual wear companion.
          Featuring a durable outer sole, they'll withstand everything the
          weather can offer.
        </p>
        <div className="price flex w-40 h-max flex-wrap items-center sm:flex-nowrap sm:w-full">
          <p className="text-3xl font-bold mr-3">$125.00</p>
          <p className="bg-Orange-pale text-Orange-default font-bold p-1 text-sm rounded">
            50%
          </p>
          <p className="text-blue-80 font-bold line-through sm:ml-auto">
            ${price}.00
          </p>
        </div>
        <div className="flex items-center  sm:justify-between mb:flex-col">
          <div
            className="count w-max flex items-center justify-between p-3 mr-3
         bg-blue-70 rounded-md mb:w-full mb:py-4 mb:m-0"
          >
            <img
              src={iconminus}
              alt="minus icon"
              className="mr-4 cursor-pointer"
              onClick={() => changeCount((curr) => (curr <= 0 ? 0 : curr - 1))}
            />
            <p className="w-7 text-center font-medium">{count}</p>
            <img
              src={iconplus}
              alt="plus icon"
              className="ml-4 cursor-pointer"
              onClick={() => changeCount((curr) => curr + 1)}
            />
          </div>
          <button
            className="flex items-center w-max justify-center
         bg-Orange-default px-10 py-2 rounded-md  duration-300 
         hover:opacity-70 mb:w-full mb:hover:opacity-100 mb:py-4 mb:mt-4"
            onClick={() => count !== 0 && sendToCart()}
          >
            <img src={iconCart} alt="cart icon" className="w-4 mr-3 mb:w-6" />
            <span className="text-Orange-pale font-medium text-sm mb:text-md">
              Add to cart
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section;
