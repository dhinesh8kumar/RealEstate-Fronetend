
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
        
        <p><b>Location:</b> {props.location} </p>
        <p><b>Price :</b> {props.price}</p>
        <p><b>Type :</b>{props.type}</p>
        
      </div>
      {expanded && (
        <div className="expanded-details">
          <p></p>
        </div>
      )}
    </div>
  );
};

export default RestaurantCard;
