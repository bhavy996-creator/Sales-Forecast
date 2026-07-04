const express = require('express')
const router = express.Router()

//GET/api/sales
router.get('/', (req, res)=>{
    res.status(200).json({
        success:true,
        message: 'Sales route is working',
        data: [
            { month: '2020-01', region: 'West', total_sales: 16253746 },
            { month: '2020-02', region: 'West', total_sales: 14997988 },
            { month: '2020-03', region: 'West', total_sales: 17660577 },
        ]
    })
})

//GET /api/sales/:region
router.get('/:region', (req, res)=>{
    const region = req.params.region

    res.status(200).json({
        success: true,
        message: `Fetching sales for region: ${region}`,
        region: region
    })
})

module.exports = router