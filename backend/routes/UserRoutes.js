const express = require('express');
const User = require('../models/User');
const Products = require('../models/User');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/',async (req,res) => {
    try {
        res.send('test')
    } catch (error) {
        res.status(400).send(error.message)
    }
})

//register
router.post('/register', async (req, res) => {
    const {email,password,role} = req.body
    try {
        const existUser = await User.findOne({email : email})
        // const roleUser = req.body.role 
        if (existUser) {
            return res.status(400).send({msg : "user already exists"})
        }
        // if (roleUser === 'topAdmin' || roleUser === 'admin') {
        //     return res.status(400).send("t7eb t3adaha 3liya")
        // }
        const newUser = new User(req.body)
        const hashedPassword = await bcrypt.hash(password,10)
        newUser.password = hashedPassword
        await newUser.save()
        res.send({msg : "user added successfully",newUser})
    } catch (error) {
        res.status(400).send(error.message)
        console.log(error)
    }
})

router.post('/login',async function (req, res) {
    const {email,password,role} = req.body
    try {
        const existUser = await User.findOne({email : email})
        if (!existUser) {
            return res.status(400).send({msg : "user doesn't exist,please sign up"});
        }

        const isMatched = await bcrypt.compare(password,existUser.password)
        if (!isMatched) {
            return res.status(400).send({msg : "email or password is incorrect"});
        }

        const payload = {id : existUser._id}
        const token = await jwt.sign(payload,process.env.privateKey)

        res.send({user : existUser,token})
    } catch (error) {
        res.status(400).send(error.message)
        console.log(error)
    }
})
module.exports = router;