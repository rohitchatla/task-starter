
//lib/packages imports
const express=require('express');
const router=express.Router();
const Post=require('../models/Post');
const User=require('../models/User');
const Lane=require('../models/lane');

//get specific person details
router.get('/:id',async(req,res)=>{
	try{
		const post=await Lane.findById(req.params.id);
		res.json(post);
	}catch(err){
		res.json({message:err});
	}
});


//add lane with the uid
router.post('/add', async (req,res)=>{//add the lane to the current user's(uid) project(pid) 
	const post = new Lane({
		'contributors.id' : req.body.uid,
		title : req.body.title,
		description : req.body.description,
		'pid.id' : req.body.pid
	});

	try{
	const savedPost=await post.save();
		//res.json(savedPost._id);
		const laneid=savedPost._id;

		//updating in Project for with lane_id
		const savinginproject =await Post.update({_id:req.body.pid},
		{$push: {'lane.id': savedPost._id}});
		res.json(savinginproject);
		

	}catch(err) {
		res.json({message: err});
	}

});


//add a new phase in lane(lid)
router.post('/node/add', async (req,res)=>{
	try{
	const updatedPost=await Lane.update({_id:req.body.lid},
		{$push: {'node.msg':req.body.title}});
	res.json({message:'lane details updated'});
	}catch(err){
		res.json({message:err});
	}

});

module.exports=router;