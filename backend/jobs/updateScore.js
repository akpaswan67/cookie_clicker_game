const User = require("../models/User");
const updateScore = async (userId) => {
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");
    
    user.score += 1;
    const chance = Math.random();
    if (chance < 0.5) user.score += 9;
    if (chance < 0.25) user.prizes += 1;
    
    await user.save();
    return { score: user.score, prizes: user.prizes };
};
module.exports = updateScore;
