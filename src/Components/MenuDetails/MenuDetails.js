import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MenuDetails.css";
import axios, { Axios } from "axios";
const MenuDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [specificDetail, setSpecificDetail] = useState("");
  const [data, setData] = useState({
    address: "",
    phone: "",
    quantity: "",
  });
  useEffect(
    () =>
      fetch("http://localhost:5000/products")
        .then((res) => res.json())
        .then((data) => setDetails(data)),

    []
  );
  console.log(details);
  useEffect(() => {
    if (details.length > 0) {
      const matchedData = details?.filter((detail) => detail._id == id);
      setSpecificDetail(matchedData);
    }
  }, [details]);
  console.log(specificDetail);
  // order post server
  function submit(e) {
    e.preventDefault();
    Axios.post("http://localhost:5000/order", {
      address: data.address,
      phone: data.phone,
      quantity: data.quantity,
    }).then((res) => {
      console.log(res.data);
    });
  }

  function handel(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  return (
    <div className="details-aera">
      <div className="container">
        <div className="row m-5">
          {specificDetail?.map((pd) => (
            <div className="col-md-7">
              <div>
                <div class="card ">
                  <img src={pd.image} class="card-img-top" alt="Image" height="260px" />
                  <div class="card-body">
                    <h5 class="card-title text-dark">{pd.name}</h5>
                    <div>
                      <span> Price </span> <span> {pd.price} </span>
                    </div>

                    <div>
                      <span> </span> <span> {pd.description} </span>
                    </div>
                  </div>
                  <div class="card-footer"></div>
                </div>
              </div>
            </div>
          ))}

          <div className="col-md-5">
            {/* Buy food  */}

            <div className="info">
              <h3> Buyer details </h3>
              <form onSubmit={(e) => submit(e)}>
                <input onChange={(e) => handel(e)} id="address" value={data.address} type="text" placeholder="Address" />
                <input onChange={(e) => handel(e)} id="phone" value={data.phone} type="number" placeholder="Phone" />
                <input onChange={(e) => handel(e)} id="quantity" value={data.quantity} type="number" placeholder="Quantity" />
                <input type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDetails;