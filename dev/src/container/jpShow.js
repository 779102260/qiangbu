import React , {Component} from 'react'

import JpBanner from '../../images/JpShow/jpBanner.jpg'
import JpItem01 from '../../images/JpShow/jp_item01.jpg'

function JpItem(props) {
	let url=props.imgUrl.split(" ")[0];
	let des=props.des;

	return (
		<div className="jp_item">
			<div className="jp_item_inner">
				<dl>
					<dt className="eg_img"><img src={url}/></dt>
					<dd className="eg_title">{des}</dd>
				</dl>
			</div>
		</div>
	)
}
class JpShow extends Component{
	constructor(props){
		super(props)
		this.state={
			data:[]
		}
	}
	componentWillMount(){
		var oThis=this;
		$.ajax({
			url:"/jp.php",
			type:"get",
			dataType:"json",
			success:function(msg) {
				console.log(msg)
				// msg=JSON.parse(msg);
				if(msg.result){
					oThis.setState({data:msg.data})
				}
			},
			error:function(msg){
				console.log(2,msg)
			}
		})
	}
	render(){
		return (
			<div className="JpShow">
				{/*<div className="JpBanner"><img src={JpBanner} /></div>*/}
				<div className="jpContainer">
					<div className="jpTitle">
						<h3>案例<strong>展示</strong></h3>
						<div className="line"></div>
					</div>
					<div className="jpList">

						{
							this.state.data.map((value,i)=>{
								console.log(value);
								return(
									<JpItem imgUrl={value.jp_url} key={i} des={value.jp_name}/>
								)
							})
						}
						
					</div>	
				</div>
			</div>
		)
	}
}

export default JpShow