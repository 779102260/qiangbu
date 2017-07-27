import React , {Component} from 'react'
import ReactDOM from 'react-dom';
//如果使用BrowserRouter需要浏览器配合
//见htaccess
import {
	HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Header from './header'
import Container from './container'
import Footer from './footer'
import Introduce from './container/introduce'
import JpShow from './container/JpShow'
import TypeShow from './container/TypeShow'
import AboutUs from './container/AboutUs'

import '../css/header.css'

const Home=()=>(
	<div>
		<Container />
		<Introduce />
		<TypeShow />
	</div>
)
class App extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<Router>
				<div id="wrapper">
					<Header />
					<Route exact path="/" component={Home}/>
					<Route exact path="/classifiedDisplay/" component={TypeShow}/>
					<Route exact path="/boutiqueCase/" component={JpShow}/>
					<Route exact path="/aboutUs/" component={AboutUs}/>
					<Footer />
				</div>
			</Router>

		)
	}
}
 ReactDOM.render(
 	<App />,document.getElementById('app')
 )
// export default App
