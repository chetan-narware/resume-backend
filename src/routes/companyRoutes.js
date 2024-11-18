// routes/companyRoutes.js
const express = require('express');
const companyController = require('../controllers/companyController');
const router = express.Router();
const {getCompany}=require('../controllers/getcompany')
const {getRoles}=require('../controllers/getroles')
// Route to add a new company with roles
router.post('/addCompany', companyController.addCompany);
router.get('/companies',getCompany);
router.get('/roles',getRoles);
module.exports = router;