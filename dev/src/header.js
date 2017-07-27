import React , {Component} from 'react'
import {
	HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'


import Logo from './header/logo'
import Menu from './header/menu'


// function LiTmp(props){
// 	let selected=props.selected==props.i?"active":"";
// 	return (
// 		<li  className={selected} >
// 			<a onClick={props.click} data-num={props.i} href="#">{props.children}</a>
// 		</li>
// 	)
// }
class Header extends Component{
	constructor(props){
		super(props);
	}
	menuClick(e){
		$(".navbar-collapse").removeClass("in");
	}
	render(){
		return (
			<div id="header">
				<nav className="navbar navbar-default yqcHeader">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        <span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				      </button>
				      <a className="navbar-brand" href="#">全国墙布批发</a>
				    </div>
				    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				      <ul className="nav navbar-nav">
					    {/*this.menu.map( (value,i)=>{
							return <LiTmp click={this.menuClick} selected={this.state.selected} key={i} i={i}>{value}</LiTmp>} )
						*/}
							<li onClick={this.menuClick}><Link to="/">首页</Link></li>
							<li onClick={this.menuClick}><Link to="/classifiedDisplay">分类展示</Link></li>
							<li onClick={this.menuClick}><Link to="/boutiqueCase">精品案例</Link></li>
							<li onClick={this.menuClick}><Link to="/aboutUs">关于我们</Link></li>
				      </ul>
				    </div>
				  </div>
				</nav>
			</div>
		)
	}
}

export default Header