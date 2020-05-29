//model for the database structure
const mongoose=require('mongoose');

const PostSchema=mongoose.Schema({

	title:{
		type:String,
		required:true
	},
	description:{
		type:String,
		required:true
	}

});


module.exports=mongoose.model('Projects',PostSchema);