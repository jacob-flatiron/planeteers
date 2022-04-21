import React, {useState} from "react";

function Planeteer({element}) {
  const {pictureUrl, name, bio, twitter, fromUSA, quote} = element
  const [show, setShow] = useState(true)


  const handleClick = () => {
    setShow((show) => !show)
  }
  
  return (
    <li className="cards__item">
      <div className="card">
        <img 
        onClick={handleClick}
          src={pictureUrl}
          alt={name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text" >{show ? bio : quote}</p>
          <div className="card__detail">
            <p>{twitter}</p>
            <p>{fromUSA ? "USA Based" : "Working Overseas"}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
