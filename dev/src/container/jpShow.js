import React , {Component} from 'react'
import JpShowPic from './jpShowPic'

// import JpBanner from '../../images/JpShow/jpBanner.jpg'
// import JpItem01 from '../../images/JpShow/jp_item01.jpg'

function JpItem(props) {
	let url=props.imgUrl.split(" ")[0];
	let des=props.des;

	function clickHander(){
		props.click(props.index)
	}
	return (
		<div className="jp_item" onClick={clickHander} data-num={props.index}>
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
			data:[],
			listDetailShow:false,
			listDetailData:[],
			listDetailText:""
		}
		this.listChick=this.listChick.bind(this);
		this.closeDetail=this.closeDetail.bind(this);
	}
	componentWillMount(){
		var oThis=this;
		$.ajax({
			url:"/jp.php",
			type:"get",
			dataType:"json",
			success:function(msg) {
				if(msg.result){
					oThis.setState({data:msg.data})
				}
			},
			error:function(msg){
				console.log(2,msg)
			}
		})
	}
	listChick(i){
		var index=i;
		var data=this.state.data[index];
		this.setState({
			listDetailShow:true,
			listDetailData:data.jp_url.split(" "),
			listDetailText:data.jp_name
		})
	}
	closeDetail(){
		this.setState({
			listDetailShow:false,
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
								return(
									<JpItem imgUrl={value.jp_url} click={this.listChick} index={i} key={i} des={value.jp_name}/>
								)
							})
						}
						
					</div>	
				</div>
				{
					this.state.listDetailShow && 
					<div className="jpListDetail">
						<p className="detail_close"><span onClick={this.closeDetail}>x</span></p>
						<div className="detail_wrap">
							<JpShowPic images={this.state.listDetailData}/>
						</div>
						<p className="detail_text">{this.state.listDetailText}</p>
					</div>
					
				}
			</div>
		)
	}
}

export default JpShow