import Express from 'express'
import Dotenv from 'dotenv'
import Bodyparser from 'body-parser'

Dotenv.config()

let app = Express()

app.use(Bodyparser.json())
app.use(Bodyparser.urlencoded({extended: false}))

app.listen(4000,function(){
	console.log('Express Server is running in port %d', this.address().port)
})

app.use(Express.static('public'))

require('./app/mongo')

require('./routes').set(app)

