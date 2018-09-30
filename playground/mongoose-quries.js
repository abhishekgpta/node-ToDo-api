const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {ObjectID} = require("mongodb");

var id = "5bb0848c4412102cc869eba1";

// Todo.find({
// 	_id: id,
// }).then((todos)=>{
// 	console.log("todos",todos);
// });

// Todo.findOne({
// 	_id: id,
// }).then((todo)=>{
// 	console.log("todo",todo);
// });
// if(!ObjectID.isValid(id)){
// 	console.log("Id is not valid");
// }
Todo.findById(id).then((todo)=>{
	if(!todo){
		return console.log("id not found");
	}
	console.log("todo by id",todo);
}).catch((e)=>{console.log(e);});