import React from "react";

const Scoreboard = ({ score, prizes }) => {
    return (
        <div className="scoreboard">
            <h2>Score: {score}</h2>
            <h2>Prizes Won: {prizes}</h2>
        </div>
    );
};

export default Scoreboard;
