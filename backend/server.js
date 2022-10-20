const express = require('express');
const connectDB = require('./config/connectDB');
const Products = require('./models/Products')
const ProductsRouter = require('./routes/ProductsRoutes')
const UserRouter = require('./routes/UserRoutes')
const cors = require('cors')

// environment variables
require('dotenv').config()

//instance method express
const app = express()

//connect database
connectDB()

//parse body
app.use(express.json())

//cors
app.use(cors())

//router

app.use('/api/products',ProductsRouter)
app.use('/api/users',UserRouter)


const port = 5000
app.listen(port, () => console.log(`Server listening on port ${port}!`))