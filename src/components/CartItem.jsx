import { useDispatch } from "react-redux";
import { decrement, increment, removeItem } from "../features/cart/cartSlice";

const CartItem = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <img className="w-[100px]" src={img} alt="" />
        <div className="space-y-1">
          <h1 className="tracking-wider font-bold text-2xl">{title}</h1>
          <p className="text-slate-400 font-semibold tracking-wider">
            ${price}
          </p>
          <button
            onClick={() => dispatch(removeItem(id))}
            className="font-bold text-blue-400 tracking-wider"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <svg
          onClick={() => dispatch(increment(id))}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-6 h-6 text-blue-400 font-bold cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
        <h2 className="text-xl font-semibold">{amount}</h2>
        <svg
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrement(id));
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-6 h-6 text-blue-400 font-bold cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default CartItem;
