const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

//route importing
const salesRoutes = require('./routes/sales')

//using routes
app.use('/api/sales', salesRoutes)

app.get('/api/health', (req, res)=> {
       res.status(200).json({
        status: 'Server is running',
        message: 'Adidas forecast API is live',
       })
    })
//404 handeler - route not found
app.use((req, res) =>{
    res.status(404).json({
        success: false,
        message: `Route &{req.url} not found`
    })
})

//500 handeler - server error
app.use((err, req, res, next) =>{
    console.error(err.stack)
    res.status(500).json({
        success: false,
        message: 'Something went wrong on the server'
    })
})
const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})    
