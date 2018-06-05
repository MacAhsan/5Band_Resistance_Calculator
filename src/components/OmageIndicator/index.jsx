import React from 'react'

const OhmageIndicator = ({ resistance }) => {
    const formatResistance = () => {
        const r = parseFloat(resistance);
        const MILLION = 1000000;
        const THOUSAND = 1000;
        if (r > MILLION)
          return(r / MILLION).toFixed(1) + "MΩ";
        if(r > THOUSAND)
          return (r / THOUSAND).toFixed(1) + "KΩ";
        return r.toFixed(1) + "Ω";
    }
    return (
      <h2 className="App-Value-Typo"> {formatResistance()} </h2>
    );
};

export default OhmageIndicator
