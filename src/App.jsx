import Header from "./components/Header";
import CartItem from "./components/CartItem";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal, clearCart } from "./features/cart/cartSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { cartItems, amount } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <>
      <Header />
      {amount < 1 && (
        <h1 className="flex items-center justify-center translate-y-48 font-bold tracking-widest text-3xl text-slate-400">
          Your cart is empty!
        </h1>
      )}
      {amount >= 1 && (
        <div className="max-w-md mx-auto my-20 space-y-5">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <hr />
          <Footer />
          <div className="flex items-center justify-center">
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-red-400 px-4 py-2 font-bold text-white rounded-lg tracking-widest uppercase"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
