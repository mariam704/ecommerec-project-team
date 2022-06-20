import "./Cart.css";
import { useCartContext } from "../../hooks/useCartContext";
import { useState } from "react";
import { Navigate } from "react-router";
import Checkout from "../checkout/checkout";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart } = useCartContext();
  const [total_price, setTotalPrice] = useState(0);
  var t_p = 0;
  var t_tax = 0;

  for (let i = 0; i < cart.length; i++) {
    t_p = t_p + cart[i].price * cart[i].ordQty;
    t_tax = t_tax + cart[i].price * cart[i].ordQty * 0.14;
    console.log(t_p);
  }

  console.log(cart);
  return (
    <div className="outerContainer">
      <div  className="mainContainer">
        <div
          style={{
            backgroundColor: "#000",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 10,
          }}
          className="header"
        >
          <h3 style={{ color: "#eee" }}>Cart</h3>
        </div>
        <div className="cartScroll">
          {cart.map((ordItem, index) => (
            <>
              <div key={index} className="innerContainer">
                <div>
                  <h4>{ordItem.sku} </h4>
                  <em>
                    ({ordItem.ordQty}x) ${ordItem.price}
                  </em>
                </div>

                <div className="price">
                  <p>${ordItem.ordQty * ordItem.price}</p>
                </div>
              </div>
              <hr />
            </>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h4>Total Price</h4>
            <p>${t_p.toFixed(2)}</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <h4>Total Tax</h4>
            <p>${t_tax.toFixed(2)}</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <h4>NetPrice</h4>
            <p>${t_p - t_tax}</p>
          </div>
        </div>
        {cart.length > 0 && (
          <Link to="/checkout">
            <div className="btnContainer">
              <button className="btn btn-outline-dark ">Checkout</button>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Cart;
