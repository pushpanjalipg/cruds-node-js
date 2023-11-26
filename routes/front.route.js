const express=require('express');
const {home,create,edit, store,update, destroy } = require('../controllers/front.controllers');
const router=express.Router();

// index
router.get('/',home)

// create
router.get('/create',create)

// edit
router.get('/edit/:id',edit)

// store
router.post('/store',store)   /*jo jo ui ko represent krega uske liye get */

// update
router.post('/update/:id',update)

// delete
router.post('/destroy/:id',destroy)


module.exports=router;