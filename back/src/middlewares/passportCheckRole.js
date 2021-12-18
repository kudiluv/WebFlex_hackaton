module.exports = (role) => (req, res, next) => {
    const user = req.user;
    if (user.role === role) {
        next();
    } else {
        res.status(403).json({message: `You are is not ${role}`});
    }
}