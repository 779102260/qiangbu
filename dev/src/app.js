import React , {Component} from 'react'
import ReactDOM from 'react-dom';

import Header from './header'
import Container from './container'
import Footer from './footer'
import Introduce from './container/introduce'
import JpShow from './container/JpShow'
import TypeShow from './container/TypeShow'
import AboutUs from './container/AboutUs'

import '../css/header.css'

class App extends Component{
	constructor(props){
		super(props);
		this.state={
			module:0
		}

		this.changeMoudle=this.changeMoudle.bind(this);
	}
	changeMoudle(module){
		this.setState({
			"module":module
		})
	}
	render(){
		return(
			<div id="wrapper">
				<Header module={this.changeMoudle}/>
				{
					this.state.module==0 && 
					<div>
						<Container />
						<Introduce />
						<TypeShow />
					</div>
				}

				{
					this.state.module==1 && <TypeShow/>
				}
				{
					this.state.module==2 && <JpShow/>
				}
				{
					this.state.module==3 && <AboutUs/>
				}
				<Footer />
			</div>
		)
	}
}
 ReactDOM.render(
 	<App />,document.getElementById('app')
 )
// export default App
