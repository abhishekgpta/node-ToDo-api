const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {ObjectID} = require("mongodb");

var id = "5bb0848c4412102cc869eba1";

// Todo.remove({}).then((result)=>{
// 	console.log(result);
// });

Todo.findOneAndRemove({"text" : "Second test todo"}).then((result)=>{
	console.log(result);
});

// Todo.findByIdAndRemove(id).then((todo)=>{
// 	if(!todo){
// 		return console.log("id not found");
// 	}
// 	console.log("todo by id",todo);
// }).catch((e)=>{console.log(e);});