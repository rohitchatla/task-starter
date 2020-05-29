//lib/packages imports
const express=require('express');
const router=express.Router();
const Post=require('../models/Post');
const User=require('../models/User');


//get back all projects
router.get('/',async(req,res)=>{
	try{
		const posts=await Post.find();
		res.json({message: posts});
		
	}catch(err){
		res.json({message: err});
	}	
});

//get specific project details
router.get('/:id',async(req,res)=>{
	try{
		const post=await Post.findById(req.params.id);
		res.json(post);
	}catch(err){
		res.json({message:err});
	}
});


//delete a project
router.delete('/delete/:id', async (req,res)=>{
	try{
	const removedPost=await Post.remove({_id:req.params.id});
	res.json(removedPost);
	}catch(err){
		res.json({message:err});
	}
});



//add a project
router.post('/add', async (req,res)=>{

	//todo-->doing-->done
	const post =new Post({
		title: req.body.title,
		description : req.body.description
	});

	try{
	const savedPost=await post.save();
	res.json({message:'Project saved'});
	
	}catch(err) {
		res.json({message: err});
	}

});


//update/commit a Post
router.post('/edit', async (req,res)=>{//(or)router.put

	try{
	const updatedPost=await Post.updateOne({_id:req.body.uid},
		{$set: {title:req.body.title,description:req.body.description}});
	res.json({message:'project updated'});
	}catch(err){
		res.json({message:err});
	}
	
	
});




module.exports=router;