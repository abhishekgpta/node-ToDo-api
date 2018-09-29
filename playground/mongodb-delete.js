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

	// db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{console.log(result)})
	//db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{console.log(result)});

	db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{console.log(result)})
	// db.collection('Todos').find().count().then((count)=>{
	// 	console.log(`Todos ${count}`);
	// },(err)=>{
	// 	console.log("Unable ot fetch todos", err)
	// });


	//client.close();
});