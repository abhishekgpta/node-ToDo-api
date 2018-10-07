const {ObjectID} = require("mongodb");
const jwt = require('jsonwebtoken');

const {Todo} = require("./../../models/todo");
const {User} = require("./../../models/user");

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
	_id: userOneId,
	email: 'abhishek@gmail.com',
	password:'useronepass',
	tokens:[{
		access:"auth",
		token:jwt.sign({_id:userOneId,access:"auth"},"abc123").toString()
	}]
},{
	_id: userTwoId,
	email:"abhi@gmail.com",
	password:"usertwopass",
	tokens:[{
		access:"auth",
		token:jwt.sign({_id:userTwoId,access:"auth"},"abc123").toString()
	}]
}];
const todos = [{
	_id: new ObjectID(),
	text:'First test todo',
	_creater:userOneId
},{
	_id:new ObjectID(),
	text:'Second test todo',
	completed:true,
	completedAt:333,
	_creater:userTwoId
}];

const populateTodos = (done)=>{
	Todo.deleteMany({}).then(() =>{
		 Todo.insertMany(todos);
	}).then(()=>done());
};

const populateUsers = (done)=>{
	User.deleteMany({}).then(() =>{
		var userOne = new User(users[0]).save();
		var userTwo = new User(users[1]).save();
		return Promise.all([userOne,userTwo]);
		 //User.insertMany(todos);
	}).then(()=>done());
};

module.exports = {todos,populateTodos,populateUsers,users};