import React, { useEffect, useState } from "react";

const OrderDisplay = (props) => {
  const [order, setOrder] = useState();
  const { index, _id, name, price, phone, address, quantity } = props.iteam;
  useEffect(() => {
    fetch("http://localhost:5000/order")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  function handleDelete(id) {
    // console.log(id);
    const confirmation = window.confirm("Are you sure to Delete!!");
    if (confirmation) {
      const url = `http://localhost:5000/order/${id}`;
      fetch(url, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount == 1) {
            alert("Delete Successfully");
            const remaining = order.filter((iteam) => iteam._id !== id);
            setOrder(remaining);
          } else {
            alert("Something is wrong");
          }
        });
    }
  }
  return (
    <tr>
      <td>{}</td>

      <td>{name}</td>
      <td>{quantity}</td>
      <td>{phone}</td>
      <td>{address}</td>
      <td>{price}</td>

      <td>
        <button onClick={() => handleDelete(_id)}>Delete</button>
      </td>
    </tr>
  );
};

export default OrderDisplay;
