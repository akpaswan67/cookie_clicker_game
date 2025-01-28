import React from "react";

const Clicker = ({ onClick }) => {
    return (
        <button onClick={onClick} className="clicker-btn">
            Click Me!
        </button>
    );
};

export default Clicker;
