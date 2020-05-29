
//model for the database structure
const mongoose=require('mongoose');

const LaneSchema=mongoose.Schema({

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
            type: mongoose.Schema.Types.ObjectId,
        }
	},
	pid:{
        id: {
            type: mongoose.Schema.Types.ObjectId,
        }
	},
	node:{
		msg:{
			type:mongoose.Schema.Types.String,
		}
	}

});


module.exports=mongoose.model('lane',LaneSchema);