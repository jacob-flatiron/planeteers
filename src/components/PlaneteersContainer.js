import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({searched}) {
  return (
    <ul className="cards">
      {
        searched.map((element) => {
          return(
            <Planeteer key={element.id} element={element}/>
          )
        })
      }
    </ul>
  );
}

export default PlaneteersContainer;
