import {  useState } from "react";
import "./checkout.css";
import { useCartContext } from "../../hooks/useCartContext";
import { useAuthContext } from "./../../hooks/useAuthContext";
import { useNavigate } from "react-router";

const Checkout = () => {
  const [chosenOption, setOption] = useState("");
  const [cop, setCop] = useState("");
  const [phone, setPhone] = useState('')
  const [ship, setShip] = useState('')
  const [bill, setBill] = useState('')



  const [card, setCard] = useState({
    name: "",
    number: "",
  });
  const [error, setError] = useState("");
  const handleChange = (event) => {
    setOption(event.target.value);
    //console.log(event.target.value);
  };
  const { user } = useAuthContext();
  const navigate = useNavigate();



  const { cart, dispatch } = useCartContext();
  var t_p = 0;
  var t_tax = 0;

  for (let i = 0; i < cart.length; i++) {
    t_p = t_p + cart[i].price * cart[i].ordQty;
    t_tax = t_tax + cart[i].price * cart[i].ordQty * 0.14;
    //console.log(t_p);
  }
  // let newCart = {
  //   price: cart[0].price,
  //   qty: cart[0].qty,
  //   color: cart[0].color,
  //   sku: cart[0].sku,
  //   id: cart[0].id,
  //   name: cart[0].sku,
  //   size: cart[0].size,
  // };
  // let newCart = { ...cart, name: cart.sku };
  // let newCart = []
  // cart.forEach((item,i) => {
  //   newCart.push()
  // })
  // console.log(newCart);
  // let cartName = { ...newCart };
  let newCart = [];
  cart.forEach((item) =>
    newCart.push({
      id: item.id,
      name: item.sku,
      sku: item.sku,
      color: item.color,
      price: item.price,
      qty: item.ordQty,
      size: item.size,
    })
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(cart);
    //console.log(newCart);
    let pay;

    // console.log(chosenOption);
    if (chosenOption === "") {
      setError("Choose your payment method first");
      console.log(card);
    } else if (chosenOption === "cash") {
      setError("");
      pay = 1;
      postCheck(cop, pay, phone, ship, bill);
    } else if (chosenOption === "creditCard") {
      if (card.name === "" || card.number === "") {
        setError("this field is required");
      } else {
        pay = 2;
        console.log(user);
        // console.log(t_tax);
        setError("");
        postCheck(cop, pay, phone, ship, bill);
        // console.log(t_p, t)
        // console.log(car);
      }
    }
  };
  const postCheck = async (cop, pay, phone, ship, bill) => {

    console.log("duration : ", 2)
    console.log("total_price : ", t_p)
    console.log("tax : ", t_tax)
    console.log("coupon_code : ", cop)
    console.log("order_states_id : ", 1)
    console.log("order_payment_type_id : ", pay)
    console.log("order_visa_card_id : ", 1)
    console.log("card_number : ", card.number)
    console.log("order_user_id : ", user.userId)
    console.log("order_items : ", newCart)
    console.log("customer_phone : ", phone)
    console.log("shipping_address : ", ship)
    console.log("billing_address : ", bill)

    try {
      await fetch("http://ecommerce-app0040.herokuapp.com/api/order", {
        method: "POST",
        body: JSON.stringify({
          duration: "2",
          total_price: t_p,
          tax: t_tax,
          coupon_code: cop,
          order_states_id: 1,
          order_payment_type_id: pay,
          order_visa_card_id: 1,
          card_number: card.number,
          order_user_id: user.userId,
          order_items: newCart,
          customer_phone: phone,
          shipping_address: ship,
          billing_address: bill
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message.includes("order created successfully")) {
            alert(
              "Order Created sucessffully, please check your email for details"
            );
            setTimeout(() => {
              dispatch({ type: "CLEARE" });
              navigate("/thanks");
            }, [1000]);
          }
        });
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };
  return (



    <div className="main">
      <div className="outerCheckoutContainer">
        {/* <div className="priceContainer">
          <h4>Total Price</h4>
          <p>{t_p}$</p>
        </div> */}

        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "55%" }}>
          <div>
            <span className="textStyle">payment method</span>
          </div>
          <div className="radioContainer form-check">
            <label style={{ marginRight: "5%" }} className="form-check-label textStyle">
              <input
                className="form-check-input"
                type="radio"
                name="choice1"
                value="cash"
                onChange={handleChange}
              />
              Cash
            </label>

            <label className="form-check-label textStyle">
              <input
                type="radio"
                className="form-check-input"
                name="choice1"
                value="creditCard"
                onChange={handleChange}
              />
              Credit Card
            </label>
          </div>
        </div>



        {chosenOption === "creditCard" && (
          <div className="creditContainer">
            <div className="inputs">
              <label>Card Holder Name</label>
              <input
                value={card.name}
                onChange={(e) => {
                  setCard({ ...card, name: e.target.value });
                }}
                type="text"
                required
              />
            </div>
            <div className="inputs">
              <label>Card Number</label>
              <input
                value={card.number}
                onChange={(e) => {
                  setCard({ ...card, number: e.target.value });
                }}
                type="number"
                required
              />
            </div>{" "}
          </div>
        )}

        <div className="inputContainer">
          <form>
            <div className="inputs form-group">
              <label className="input_lable">Name</label>
              <input className="form-control" type="text" placeholder="eg: Jane Doe" />
            </div>
            <div className="inputs form-group">
              <label className="input_lable">Coupon</label>
              <input
                type="text"
                placeholder=""
                className="form-control"
                onChange={(e) => setCop(e.target.value)}
              />
            </div>
            <div className="inputs form-group">
              <label className="input_lable">Phone</label>
              <input className="form-control" type="text" placeholder="eg: 012345678" onChange={e => setPhone(e.target.value)} />
            </div>
            <div className="inputs form-group">
              <label className="input_lable">Shipping Address</label>
              <input className="form-control" type="Address" placeholder="eg: Apt, Building, Street" onChange={e => setShip(e.target.value)} />
            </div>
            <div className="inputs form-group">
              <label className="input_lable">Billing Address</label>
              <input className="form-control" type="Address" placeholder="eg: Apt, Building, Street" onChange={e => setBill(e.target.value)} />
            </div>
          </form>
        </div>
        <button onClick={handleSubmit}>Confirm</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};
export default Checkout;
