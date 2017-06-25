import React , {Component} from 'react'


function LiTmp(props){
	let selected=props.selected==props.i?"menuSelected":"";
	return (<li onClick={props.click} className={selected} data-num={props.i}>{props.children}</li>)
}
class Menu extends Component{
	constructor(props){
		super(props);
		this.menu=["首页","精品展示","分类展示","关于我们"];
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
		console.log(this.props);
		this.props.module(num);
	}
	render(){
		return (
			<div  id="menu">
				<ul>
					{this.menu.map( (value,i)=>{
						return <LiTmp click={this.menuClick} selected={this.state.selected} key={i} i={i}>{value}</LiTmp>} )
					}
				</ul>
			</div>
		)
	}
}

export default Menu