const express = require('express');
const Products = require('../models/Products');
const checkTitle = require('../middlewares/checkTitle')
const router = express.Router();

//get all products
router.get('/', async function (req, res) {
    const products = await Products.find()
    res.send(products)
});

router.post('/add',checkTitle, async function (req, res) {
    try {
        const existProduct = await Products.findOne({ title : req.body.title})
        if (existProduct) {
            return res.status(400).send({msg : 'Product already exists'})
        }else {
            const products = await Products.find()
            const newProduct = new Products ({...req.body})
            await newProduct.save()
            res.send(newProduct);
        } 
    } catch (error) {
        console.log(error.message)
        res.status(400).send(error.message)
    }
})

router.delete('/:id', async function (req, res) {
    try {
        const productDeleted = await Products.deleteOne({ _id : req.params.id})
        if (productDeleted.deletedCount) {
            return res.send('Product is deleted successfully')
        }else {
            return res.status(400).send({msg : 'Product is already deleted'})
        }   
    } catch (error) {
        console.log(error.message)
        res.status(400).send(error.message)
    }
})

router.put('/:id', async (req,res) => {
    try {
        const productUpdated = await Products.updateOne({_id : req.params.id},{...req.body})
        if (productUpdated.modifiedCount) {
            const productAfterUpdated = await Products.findOne({_id: req.params.id})
            return console.log("Product is updated successfully",productAfterUpdated)
        }else {
            return res.status(400).send({msg : 'Product is already updated'})
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
})

//get one product
router.get('/:id',async (req, res) => {
    try {
        const findOneProduct = await Products.findOne({_id: req.params.id})
        res.send(findOneProduct)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router;