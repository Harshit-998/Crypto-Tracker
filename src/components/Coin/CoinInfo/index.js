import React, { useState } from "react";
import "./styles.css";

function CoinInfo({ name, desc }) {
 
  const shortDesc =
   desc.slice(0, 200) +
        "<p style='color:var(--grey); cursor:pointer;'>Read More...</p>"
     
  
  const fullDesc =
       desc + "<p style='color:var(--grey); cursor:pointer;'>Read Less...</p>"
     
       const [flag, setFlag] = useState(false);
  return (
    <div className="grey-wrapper">
      <h1 className="coin-info-heading">{name}</h1>
      
      {desc.length > 200 ? (
        <p
        onClick={() =>  setFlag(!flag)}
        className="coin-info-desc"
        dangerouslySetInnerHTML={{ __html: !flag ? shortDesc : fullDesc }}
      />
      ) :(
        <p  dangerouslySetInnerHTML={{ __html: desc }}/>
       ) 
       }
    
    </div>
  );
}

export default CoinInfo;
