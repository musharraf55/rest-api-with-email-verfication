const express = require("express");
const userRoutes = require("../controllers/users");
const authRoutes = require("../controllers/login_auth");
const router = express.Router();

router.post('/add' , userRoutes);
router.get('/all' , userRoutes);
router.post('/:id/verify/:token/' , userRoutes);
router.post('/login' , authRoutes);


module.exports = router;