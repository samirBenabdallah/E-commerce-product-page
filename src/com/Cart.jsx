import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { icondelete } from "../public/images/assets";
import { deleteCart } from "../rtk/cart";
const Cart = ({ click }) => {
  const { cart } = useSelector((s) => s);
  const info = cart.cartInfo;
  const dispatch = useDispatch();
  return (
    <div className="cart absolute -bottom-5 right-10 translate-y-full w-[18rem] h-40 bg-white z-10 rounded-lg">
      <p className="h-1/4 p-2 font-bold cursor-pointer" onClick={() => click()}>
        Cart
      </p>
      {cart.isEmpty ? (
        <div className="w-full h-3/4 flex-center font-bold text-blue-90 ">
          Your cart is empty.
        </div>
      ) : (
        <div className="p-2 w-full h-3/4">
          <div className="flex items-center h-1/2">
            <img
              src={info.img}
              alt="main img"
              className="h-3/4 mr-2 rounded-lg"
            />
            <div>
              <p className="text-sm text-blue-90">{info.name}</p>
              <p className="text-blue-90">
                {`$${info.price} x ${info.count} `}
                <span className="font-bold text-black">
                  ${info.count * info.price}
                </span>
              </p>
            </div>
            <img
              src={icondelete}
              alt="delete icon"
              className="h-6 ml-auto mr-2 cursor-pointer"
              onClick={() => dispatch(deleteCart())}
            />
          </div>
          <button className="rounded-lg bg-Orange-default text-Orange-pale w-full h-1/2">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
