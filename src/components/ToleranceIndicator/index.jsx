import React from 'react';

const ToleranceIndicator = ({ tolerance }) => {
    const formatTolerance = () => {
        return tolerance === 0 ? "" :  "±" + tolerance + "%";
    };
    return (
        <p> {formatTolerance()} </p>
    );
};

export default ToleranceIndicator
