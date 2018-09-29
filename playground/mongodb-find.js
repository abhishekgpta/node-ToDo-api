//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");


// var obj = new ObjectID();
// console.log(obj)
MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(error,client)=>{
	if(error){
		return console.log("Unable to connect mongodb server");
	}
	console.log("connected to Mongodb server");
	var db = client.db("Todos")
	
	// db.collection('Todos').find({
	// 	_id:new ObjectID("5baf9690b3cb5e21706034bc")
	// }).toArray().then((docs)=>{
	// 	console.log("Todos");
	// 	console.log(JSON.stringify(docs,undefined,2));
	// },(err)=>{
	// 	console.log("Unable ot fetch todos", err)
	// });

	db.collection('Todos').find().count().then((count)=>{
		console.log(`Todos ${count}`);
	},(err)=>{
		console.log("Unable ot fetch todos", err)
	});

	//client.close();
});