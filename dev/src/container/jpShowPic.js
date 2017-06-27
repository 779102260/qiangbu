import React , {Component} from 'react'

class JpShowPic extends Component{
	constructor(props){
		super(props)
		this.state={"image":0};

		this.images=props.images;
		this.max=this.images.length-1;

		this.pre=this.pre.bind(this);
		this.next=this.next.bind(this);
	}
	pre(){
		let imgIndex=this.state.image;
		if(imgIndex==0){
			imgIndex=this.max;
		}else{
			--imgIndex;
		}
		this.setState({"image":imgIndex})
	}
	next(){
		let imgIndex=this.state.image;

		if(imgIndex==this.max){
			imgIndex=0;
		}else{
			++imgIndex;
		}
		this.setState({"image":imgIndex})
	}
	// componentDidMount(){
	// 	this.next.bind(this);
	// 	this.lunbo=setInterval(()=>{
	// 		this.next();
	// 	},3000)
	// }
	// componentWillUnmount(){
	// 	clearInterval(this.lunbo);
	// }
	render(){
		return (
			<div id="picWrap">
				<span id="prePic" onClick={this.pre}>&lt;</span>
				<div className="pic">
					<img className="detail_pic" src={this.images[this.state.image]}/>
				</div>
				<span id="nextPic" onClick={this.next}>&gt;</span>
			</div>
			
		)
	}
}

export default JpShowPic