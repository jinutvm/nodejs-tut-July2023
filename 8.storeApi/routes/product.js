const express=require('express')
const router = express.Router();


const {
    getAllProducts,
    getAllProductsStatic,
    createNewProduct
} = require ('../controllers/product')


router.route('/').get(getAllProducts).post(createNewProduct)
router.route('/static').get(getAllProductsStatic)

module.exports = router;