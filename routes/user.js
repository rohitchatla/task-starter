
//lib/packages imports
const express=require('express');
const router=express.Router();
const Post=require('../models/Post');
const User=require('../models/User');



//get specific person details
router.get('/:id',async(req,res)=>{
	try{
		const post=await User.findById(req.params.id);
		res.json(post);
	}catch(err){

		res.json({message:err});
	}
});


//add person to Users(contributors)
router.post('/add', async (req,res)=>{

	//todo-->doing-->done
	const post =new User({
		name : req.body.name,
		email : req.body.email,
		password:req.body.password
	});

	try{
	const savedPost=await post.save();
	res.json({message:'User added'});
	
	}catch(err) {
		res.json({message: err});
	}

});


//edit user details
router.post('/edit/:id', async (req,res)=>{//(or)router.put

	try{
	const updatedPost=await User.updateOne({_id:req.params.id},
		{$set: {name:req.body.name,email:req.body.email,password:req.body.password}});
	res.json({message:'User details updated'});
	}catch(err){
		res.json({message:err});
	}
	
	
});

//add user to particular project
router.post('/addu', async (req,res)=>{

	

	try{
	const updatedPost=await Post.update({_id:req.body.pid},
		{$push: {'contributors.id':req.body.uid}});
	res.json({message:'User details updated'});
	}catch(err){
		res.json({message:err});
	}

});


module.exports=router;
