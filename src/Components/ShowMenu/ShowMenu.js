import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ShowMenu.css";
const ShowMenu = () => {
  const [items, setItems] = useState([]);
  const history = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const filterItem = (categItem) => {
    const updatedItems = items.filter((curentElem) => {
      return curentElem.category === categItem;
    });
    setItems(updatedItems);
  };
  const handleDetails = (_id) => {
    const uri = `/food/${_id}`;

    history(uri);
  };
  return (
    <>
      <h1 className="mt-5 text-center main-heading">Order Your Favourite Dish</h1>
      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          <button className="btn btn-warning" onClick={() => setItems(items)}>
            All
          </button>
          <button className="btn btn-warning" onClick={() => filterItem("breakfast")}>
            Brakefast
          </button>
          <button className="btn btn-warning" onClick={() => filterItem("lunch")}>
            Lunch
          </button>
          <button className="btn btn-warning" onClick={() => filterItem("dinner")}>
            Dinner
          </button>
        </div>
      </div>
      <div className="menu-items container-fluid">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row">
              {items.map((element) => {
                const { _id, name, image, description, price, rating } = element;
                return (
                  <div className="col-12 col-md-4 col-lg-4">
                    <div class="card m-5">
                      <img class="card-img-top" src={image} alt="Card image cap" style={{ height: "420px" }} />
                      <div class="card-body">
                        <div className="d-flex justify-content-between">
                          <div className="title-name">
                            <h5 class="card-title text-uppercase">{name}</h5>
                          </div>
                          <div className="rating">
                            <p>({rating})</p>
                          </div>
                        </div>
                        <p class="card-text">{description}</p>
                        <div className="footer d-flex justify-content-between align-items-center">
                          <div className="price">
                            <p class="card-text">Price: {price} tk</p>
                          </div>
                          <div className="food-btn">
                            <button onClick={() => handleDetails(_id)} className="btn">
                              Order Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowMenu;
