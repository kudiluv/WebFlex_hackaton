const router = require("express").Router();
const express = require("express");
const AuthService = require("../../services/AuthService");

router.post('/register/:id', async(req, res) => {
    const data = req.body;
    try {
        const result = await AuthService.signUp(data.email, data.password, req.params.id);
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});

router.post('/refresh', async(req, res) => {
    const data = req.body;
    try {
        const result = await AuthService.updateToken(data);
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.post('/login', async(req, res) => {
    const data = req.body;
    try {
        const result = await AuthService.login(data.email, data.password);
        res.json(result)
    } catch (error) {
        res.status(403).json({ message: error.message })
    }
});

router.post('/create-user', async(req, res) => {
    const data = req.body;
    try {
        const result = await AuthService.addUser(data.name, data.role);
        res.json(result)
    } catch (error) {
        res.status(403).json({ message: error.message })
    }
})

module.exports = router