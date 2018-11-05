import Home from '../components/home'
import Addform from '../components/addform'
import RetrieveInfo from '../components/retriveInfo'

//Other imports to take place

const routes = [
	{path: '/home', component: Home},
	{path: '/', component: Addform},
	{path:'/retriveinfo', component: RetrieveInfo}
]

export default  routes

