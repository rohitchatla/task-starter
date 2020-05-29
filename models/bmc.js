//model for the database structure
const mongoose=require('mongoose');

const bmcSchema=mongoose.Schema({

	title:{
		type:String,
		required:true
	},
	description:{
		type:String,
		required:true
	},
	contributors:{
        id: {
            type: mongoose.Schema.Types.ObjectId
        }
	}

});


module.exports=mongoose.model('bmc',bmcSchema);