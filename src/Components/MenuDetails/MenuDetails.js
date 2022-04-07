import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MenuDetails.css";
const MenuDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [specificDetail, setSpecificDetail] = useState("");

  useEffect(
    () =>
      fetch("/output (1).json")
        .then((res) => res.json())
        .then((data) => setDetails(data)),

    []
  );
  console.log(details);
  useEffect(() => {
    if (details.length > 0) {
      const matchedData = details?.filter((detail) => detail.id == id);
      setSpecificDetail(matchedData);
    }
  }, [details]);
  //   console.log(specificDetail[0].name);

  return (
    <div className="details-aera">
      <div className="container">
        <div className="row m-5">
          <div className="col-md-7">
            <div>
              <div class="card ">
                <img src={specificDetail.image} class="card-img-top" alt="Image" height="260px" />
                <div class="card-body">
                  <h5 class="card-title text-dark">{specificDetail.name}</h5>
                  <div>
                    <span> Price </span> <span> {specificDetail.price} </span>
                  </div>

                  <div>
                    <span> </span> <span> {specificDetail.description} </span>
                  </div>
                </div>
                <div class="card-footer"></div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            {/* Buy car  */}

            <div className="info">
              <h3> Buyer details </h3>
              <form onSubmit={""}>
                <input type="text" placeholder="Address" />
                <input type="number" placeholder="Phone" />
                <input type="text" placeholder="Quantity" />
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
