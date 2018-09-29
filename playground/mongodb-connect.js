//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");


var obj = new ObjectID();
console.log(obj)
MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(error,client)=>{
	if(error){
		return console.log("Unable to connect mongodb server");
	}
	console.log("connected to Mongodb server");
	var db = client.db("Todos")
	
	// db.collection('Todos').insertOne({
	// 	text:"Something ot do",
	// 	completed: false
	// },(err,result)=>{
	// 	if(err){
	// 		return console.log('Unable to inset Todo',err);
	// 	}
	// 	console.log(JSON.stringify(result.ops,undefined,2));
	// });
	db.collection('Users').insertOne({
		name:"Abhishek",
		age:25,
		location:"Hyderabad"
	},(err,result)=>{
		if(err){
			return console.log('Unable to inset Todo',err);
		}
		console.log(JSON.stringify(result.ops,undefined,2));
	});
	client.close();
});