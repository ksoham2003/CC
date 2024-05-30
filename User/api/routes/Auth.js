const express = require('express');
const router = express.Router();

const {register, login, getProducts, getProduct} = require('../controllers/User');

router.post('/register', register);
router.post('/login', login);
router.get('/get-events', getProducts);
router.post('/get-event', getProduct);

module.exports = router;