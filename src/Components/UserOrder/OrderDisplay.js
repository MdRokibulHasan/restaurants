import React, { useEffect, useState } from "react";

const OrderDisplay = (props) => {
  const [order, setOrder] = useState();
  const [product, setProduct] = useState(props.iteam);
  const { index, _id, name, price, phone, address, quantity } = props.iteam;
  useEffect(() => {
    fetch("https://agile-cove-20388.herokuapp.com/order")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  // handle Increment
  const handleIncrement = (id) => {
    // let totalQuantity = order.map((tq) => (tq._id === _id ? { ...tq, quantity: tq.quantity - 1 } : tq)
    // setOrder(totalQuantity);

    // );
    console.log("clicked", id);
  };
  const handleDecrement = (id) => {
    // setProduct((order) => order.map((item) => (_id === item._id ? { ...item, quantity: item.quantity + 1 } : item)));
    console.log("clicked", id);
  };

  function handleDelete(id) {
    // console.log(id);
    const confirmation = window.confirm("Are you sure to Delete!!");
    if (confirmation) {
      const url = `https://agile-cove-20388.herokuapp.com/order/${id}`;
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

      <td>{phone}</td>
      <td>{address}</td>
      <td width={"130px"} padding={"10px"} margin={"15px"}>
        <div className="input-group">
          <button type="button" onClick={() => handleDecrement(_id)} className="input-group-text">
            -
          </button>
          <div className="form-control text-center">{quantity}</div>
          <button type="button" onClick={() => handleIncrement(_id)} className="input-group-text">
            +
          </button>
        </div>
      </td>
      <td>{price * quantity}</td>

      <td>
        <button onClick={() => handleDelete(_id)}>Delete</button>
      </td>
    </tr>
  );
};

export default OrderDisplay;
