const router = require("express").Router();
const AuthService = require("../../services/AuthService");

router.post('/register', async(req, res) => {
    const data = req.body;
    try {
        const result = await AuthService.signUp(data.email, data.password);
        console.log(result);
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

});

router.post('/login', async(req, res) => {
    const data = req.body;
    try {
        const result = await AuthService.login(data.email, data.password);
        res.json(result)
    } catch (error) {
        res.status(403).json({ message: error.message })
    }
});

module.exports = router