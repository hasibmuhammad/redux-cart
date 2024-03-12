import { useSelector } from "react-redux";

const Footer = () => {
  const { total } = useSelector((state) => state.cart);
  return (
    <div className="flex justify-between">
      <h1 className="font-bold tracking-widest text-md">Total</h1>
      <p className="font-bold tracking-widest text-md">${total.toFixed(2)}</p>
    </div>
  );
};

export default Footer;
