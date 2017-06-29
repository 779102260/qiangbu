import React , {Component} from 'react'
import JpShowPic from './jpShowPic'
// import typeBanner from '../../images/JpShow/typeBanner.jpg'
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
					<dt className="eg_img"><img src={"./images/"+url}/></dt>
					<dd className="eg_title">{des}</dd>
				</dl>
			</div>
		</div>
	)
}
class TypeShow extends Component{
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
			url:"/type.php",
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
		var oThis=this;
		$.ajax({
			url:"/type.php",
			type:"post",
			data:{name:data.enname},
			dataType:"json",
			success:function(msg) {
				if(msg.result){
					var aUrls=msg.data;
					var aUrl=[];
					for(var i=0,l=aUrls.length;i<l;i++){
						aUrl.push(aUrls[i].url);
					}
					oThis.setState({
						listDetailShow:true,
						listDetailData:aUrl,
						listDetailText:data.cnname
					})
				}
			},
			error:function(msg){
				console.log(2,msg)
			}
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
				{/*<div className="JpBanner"><img src={typeBanner} /></div>*/}
				<div className="jpContainer">
					<div className="jpTitle">
						<h3>分类<strong>展示</strong></h3>
						<div className="line"></div>
					</div>
					<div className="jpList">
						
						{
							this.state.data.map((value,i)=>{
								return(
									<JpItem imgUrl={value.url} click={this.listChick} index={i} key={i} des={value.cnname}/>
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

export default TypeShow