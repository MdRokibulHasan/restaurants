import React, { useEffect, useState } from "react";
import OrderDisplay from "./OrderDisplay";

const UserOrder = () => {
  const [order, setOrder] = useState();
  useEffect(() => {
    fetch("https://agile-cove-20388.herokuapp.com/order")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  return (
    <div className="mt-5">
      <h1 className="text-center m-5">My Order</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>

            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {order?.map((iteam, index) => (
            <OrderDisplay key={iteam._id} iteam={iteam}>
              {" "}
            </OrderDisplay>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserOrder;
