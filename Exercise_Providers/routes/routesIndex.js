const express = require('express');
const router = express.Router();
const {getAll,createProvider,updateProvider,removeProvider} = require('../controllers/provider.js');

router.get('/providers',getAll);
router.post('/provider/add',createProvider);
router.put('/provider/update/:_id',updateProvider);
router.delete('/provider/delete/:_id',removeProvider);

module.exports=router;