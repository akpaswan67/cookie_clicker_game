import React, { useState, useEffect } from "react";
import Clicker from "../components/Clicker";
import Scoreboard from "../components/Scoreboard";
import { createUser, getUser, incrementScore } from "../api/api";

const Home = () => {
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const storedUserId = localStorage.getItem("userId");
        if (storedUserId) {
            getUser(storedUserId).then(setUser);
        }
    }, []);

    const handleCreateUser = async () => {
        if (!username) return alert("Enter a username");
        const newUser = await createUser(username);
        localStorage.setItem("userId", newUser._id);
        setUser(newUser);
    };

    const handleClick = async () => {
        if (!user) return alert("Please create a user first!");
        setLoading(true);
        const updatedUser = await incrementScore(user._id);
        setUser(updatedUser);
        setLoading(false);
    };

    return (
        <div className="container">
            {!user ? (
                <div>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button onClick={handleCreateUser}>Start</button>
                </div>
            ) : (
                <>
                    <Scoreboard score={user.score} prizes={user.prizes} />
                    <Clicker onClick={handleClick} />
                    {loading && <p>Updating...</p>}
                </>
            )}
        </div>
    );
};

export default Home;
