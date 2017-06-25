import React , {Component} from 'react'

class Container extends Component{
	constructor(props){
		super(props)
		this.state={"image":0};
		this.images=["banner3","banner1","banner2"];

		this.pre=this.pre.bind(this);
		this.next=this.next.bind(this);
	}
	pre(){
		let imgIndex=this.state.image;
		if(imgIndex==0){
			imgIndex=2;
		}else{
			--imgIndex;
		}
		this.setState({"image":imgIndex})
	}
	next(){
		let imgIndex=this.state.image;
		if(imgIndex==2){
			imgIndex=0;
		}else{
			++imgIndex;
		}
		this.setState({"image":imgIndex})
	}
	componentDidMount(){
		this.next.bind(this);
		this.lunbo=setInterval(()=>{
			this.next();
		},3000)
	}
	componentWillUnmount(){
		clearInterval(this.lunbo);
	}
	render(){
		return (
			<div id="container">
				<span id="prePic" onClick={this.pre}>&lt;</span>
				<div id="pic">
					<a id="images" className={this.images[this.state.image]}/>
				</div>
				<span id="nextPic" onClick={this.next}>&gt;</span>
			</div>
			
		)
	}
}

export default Container