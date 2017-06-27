import React , {Component} from 'react'

import Logo from './header/logo'
import Menu from './header/menu'


function LiTmp(props){
	let selected=props.selected==props.i?"active":"";
	return (
		<li  className={selected} >
			<a onClick={props.click} data-num={props.i} href="#">{props.children}</a>
		</li>
	)
}
class Header extends Component{
	constructor(props){
		super(props);
		this.menu=["首页","分类展示","精品案例","关于我们"];
		this.state={
			"selected":0
		}
		this.menuClick=this.menuClick.bind(this);
	}
	menuClick(e){
		let num=e.target.getAttribute("data-num");
		this.setState({
			"selected":num
		});
		this.props.module(num);
	}
	render(){
		return (
			<div id="header">
				{/* 
				<Logo />
				<Menu module={this.props.module}/>
				*/}
				
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
				        {/*<li className="active"><a href="#">首页 <span className="sr-only">(current)</span></a></li>
				        <li><a href="#">精品展示</a></li>
				        <li><a href="#">分类展示</a></li>
				        <li><a href="#">关于我们</a></li>
					    */}
					    {this.menu.map( (value,i)=>{
							return <LiTmp click={this.menuClick} selected={this.state.selected} key={i} i={i}>{value}</LiTmp>} )
						}
				      </ul>
				    </div>
				  </div>
				</nav>
			</div>
		)
	}
}

export default Header