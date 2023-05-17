import { useState } from "react";
import "./Card.css";

const RestaurantCard = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };

  return (
    <div
      className={`res-card ${expanded ? "expanded" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={props.src} alt="house-logo" className="res-logo" />
      <div className="details">
        <h5>
          <b> {props.title} </b>
        </h5>

        <p>
          <b>Location:</b> {props.location}{" "}
        </p>
        <p>
          <b>Price :$</b> {props.price}
        </p>
        <p>
          <b>Type :</b>
          {props.type}
        </p>
        <p>
          <b>Area:</b>
          {props.area} Sqft
        </p>
      </div>
      {expanded && (
        <div className="expanded-details">
          <p>
            <b>Property-id:</b>
            {props.property_id}
          </p>

          <p>
            <b>Seller-id:</b>
            {props.seller_id}
          </p>

          <p>
            <b>Descrption:</b> {props.description}
          </p>
          <p>
            <b>Contact: </b>
            {props.Contact_Number}
          </p>
        </div>
      )}
    </div>
  );
};

export default RestaurantCard;
