import React, { useState } from "react";
import { useAuthContext } from "./../../hooks/useAuthContext";
import { useEffect } from "react";
import "./MyOrders.css";

export default function MyOrders() {
  const { user } = useAuthContext();
  const [orders, setOrders] = useState([]);
  const [delifered, setDelifered] = useState(null);
  const [stat, setStat] = useState(null);
  const id = user.userId;

  console.log(user);
  console.log(delifered);
  useEffect(() => {
    getOrders(id)
  }, [id]);



  const getOrders = async () => {
    await fetch(`http://ecommerce-app0040.herokuapp.com/api/orders/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(orders);
        setOrders(data);
        data.map((stat) => {
          if (stat.order_states_id === 1) {
            setDelifered("in progress");
            setStat("red");
          } else {
            setDelifered("Delifered");
            setStat("green");
          }
        });
      })

  };
  return (
    <div className="containerMyOrder">
      <h3>My Orders</h3>
      {orders &&
        orders.map((item) => (
          <div className="orderState " key={item.id}>

            <div>
              <span>tax: </span>
              <span>{item.tax}</span>
              <span>Total Price: </span>
              <span>{item.total_price}</span>
            </div>
            <div>
              <span style={{ width: 150, bottom: 0, alignSelf: 'flex-end', float: "left" }} className={stat}>{delifered}</span>
            </div>
          </div>
        ))}
    </div>
  );
}
