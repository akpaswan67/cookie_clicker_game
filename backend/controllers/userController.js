const User = require("../models/User");
const updateScore = require("../jobs/updateScore");

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createUser = async (req, res) => {
    try {
        const { username } = req.body;
        let user = await User.findOne({ username });
        if (!user) {
            user = new User({ username });
            await user.save();
        }
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const incrementScore = async (req, res) => {
    try {
        const result = await updateScore(req.params.id);  // Update score logic
        res.json(result);  // Send back updated score and prizes
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
module.exports = { getUser, createUser, incrementScore };
