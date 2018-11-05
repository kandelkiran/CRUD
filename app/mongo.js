let Mongoose = require('mongoose')
let uri = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}`
console.log(uri)
Mongoose.set('debug',true)
Mongoose.set('useCreateIndex',true)

Mongoose.connection.openUri(uri,{
	useNewUrlParser : true
}).then(function(mongo){
	console.log(mongo)
}).catch(function(err){
	console.log(err)
})

let connection = Mongoose.connection

connection.on('connected', function(){
	console.log('MongoDB Connected')
})

connection.on('disconnected', function(){
	console.log('MongoDB Disconnected')
})

export default connection
