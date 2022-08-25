import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Spinner } from "react-bootstrap";
import "./ShowMenu.css";
const ShowMenu = () => {
  const [items, setItems] = useState([]);
  const [updatedItems, setUpdatedItems] = useState([]);
  const [isLoding, setIsLoding] = useState(false);

  const history = useNavigate();
  useEffect(() => {
    fetch("https://agile-cove-20388.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setUpdatedItems(data);
        setIsLoding(true);
      });
  }, []);

  const filterItem = (categItem) => {
    const updatedItems = items.filter((currentElem) => currentElem.category === categItem);
    setUpdatedItems(updatedItems);
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
          <button className="btn btn-warning" onClick={() => setUpdatedItems(items)}>
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
      {isLoding ? (
        <div className="menu-items container-fluid">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row">
                {updatedItems.map((element) => {
                  return (
                    <div className="col-12 col-md-4 col-lg-4">
                      <div class="card m-5">
                        <img className="card-img-top" src={element.image} alt={element.name} style={{ height: "420px" }} />
                        <div class="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="title-name">
                              <h5 class="card-title text-uppercase">{element.name}</h5>
                            </div>
                            <div className="rating">
                              <p>({element.rating})</p>
                            </div>
                          </div>
                          <p class="card-text">{element.description}</p>
                          <div className="footer d-flex justify-content-between align-items-center">
                            <div className="price">
                              <p class="card-text">Price: {element.price} tk</p>
                            </div>
                            <div className="food-btn">
                              <button onClick={() => handleDetails(element._id)} className="btn">
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
      ) : (
        // <Spinner animation="border" />
        <h1 className="text-center">Loading ....</h1>
      )}
    </>
  );
};

export default ShowMenu;
