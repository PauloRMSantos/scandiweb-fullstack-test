import "./Header.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
      <div className="flex relative border-2 justify-around">
        <div className="flex gap-10 mt-7 font-sans">
          <NavLink
            to="/all"
            className={({ isActive }) =>
              isActive
                ? "text-green-500 border-b-2 border-green-500 pb-1 font-semibold"
                : "text-black hover:text-green-500 hover:border-b-2 hover:border-green-500 pb-1 transition-all"
            }
          >
            All
          </NavLink>
          <NavLink
            to="/clothes"
            className={({ isActive }) =>
              isActive
                ? "text-green-500 border-b-2 border-green-500 pb-1 font-semibold"
                : "text-black hover:text-green-500 hover:border-b-2 hover:border-green-500 pb-1 transition-all"
            }
          >
            Clothes
          </NavLink>
          <NavLink
            to="/tech"
            className={({ isActive }) =>
              isActive
                ? "text-green-500 border-b-2 border-green-500 pb-4 font-semibold"
                : "text-black hover:text-green-500 hover:border-b-2 hover:border-green-500 pb-4 transition-all"
            }
          >
            Tech
          </NavLink>
        </div>
        <div className="flex justify-center">
            <a href=""><img src="/src/Assets/a-logo.svg" alt=""/></a>
        </div>
          {/* Ícone do carrinho */}
          <button
            onClick={() => setCartOpen(!cartOpen)}
            className="relative ml-8"
            data-testid="cart-btn"
          >
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </button>

        {/* Carrinho flutuante */}
        {cartOpen && (
          <div className="absolute right-0 top-16 bg-white w-80 shadow-xl rounded-md p-4 z-50">
            <h2 className="font-bold mb-4">My Bag, 3 items</h2>

            {/* Exemplo de item */}
            <div className="flex gap-3 mb-4">
              <img
                src="https://via.placeholder.com/80"
                alt="Item"
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <p className="font-semibold">Running Short</p>
                <p>$50.00</p>
                <p className="text-sm">Size: M</p>
                <p className="text-sm">Color: 🟩</p>
              </div>
              <div className="flex flex-col justify-between items-center">
                <button className="text-xl">+</button>
                <span>1</span>
                <button className="text-xl">−</button>
              </div>
            </div>

            {/* Total + Botão */}
            <div className="flex justify-between font-semibold text-lg mb-3">
              <span>Total</span>
              <span>$200.00</span>
            </div>
            <button className="w-full bg-green-400 text-white py-2 rounded hover:bg-green-500 transition">
              PLACE ORDER
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
