import home from './home'

export function set(app){
	app.use('/', home)
}
