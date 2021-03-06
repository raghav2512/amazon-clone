import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import Order from "./Order";
import { useStateValue } from "./StateProvider";
import "./Orders.css";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  console.log("user", user);

  useEffect(() => {
    //order by date created. most recent one at the top
    // display all recent orders. Put id and data in it. orders variable becomes an array
    // if we push/retrieve a value from db, this will give us a real time response
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
    console.log("orders=>>>>", orders);
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
