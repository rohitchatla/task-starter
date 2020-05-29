
const express=require('express');
const router=express.Router();
const Post=require('../models/Post');
const User=require('../models/User');
const BMC=require('../models/bmc');

router.get('/:id',async(req,res)=>{
	try{
		const post=await BMC.findById(req.params.id);
		res.json(post);
	}catch(err){

		res.json({message:err});
	}
});

//add a project
router.post('/add', async (req,res)=>{

	//todo-->doing-->done
	const post =new BMC({
		title: req.body.title,
		description : req.body.description
	});

	try{
	const savedPost=await post.save();
	res.json({message:'BMC saved'});
	
	}catch(err) {
		res.json({message: err});
	}

});

module.exports=router;