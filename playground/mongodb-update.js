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

	// db.collection('Todos').findOneAndUpdate({_id:new ObjectID("5bafadd2e8342f08a283d99b")},{
	// 	$set:{
	// 		completed:true
	// 	}
	// },{
	// 	returnOriginal:false
	// }).then((result)=>{console.log(result)})
	
	db.collection('Users').findOneAndUpdate({_id:new ObjectID("5baf980d22b0a313c8357d04")},{
		$set:{
			name:"Anil"
		},
		$inc:{
			age:1
		}
	},{
		returnOriginal:false
	}).then((result)=>{console.log(result)})

	//client.close();
});