import React , {Component} from 'react'

import phoneImg from '../images/phone.png'
import emailImg from '../images/email.png'
import addressImg from '../images/address.png'

class Footer extends Component{
	constructor(props){
		super(props)
		this.state={
			name:"",
			email:"",
			phone:"",
			message:"",
			note:""
		}

		this.inputChange=this.inputChange.bind(this);
		this.submitMessage=this.submitMessage.bind(this);
	}
	inputChange(e){
		let value=e.target.value;
		let name=e.target.name;
		this.setState({
			[name]:value
		})
	}
	submitMessage(){
		let  data=this.state;
		let oThis=this;
		if(!data.phone){
			this.phoneReq.style.display="block";
		}else{
			$.ajax({
				url:"/rest.php",
				data:data,
				type:"post",
				dataType:"",
				async:true,
				success:function (msg) {
					msg=JSON.parse(msg);
					if(msg.result){
						// alert("提交成功，我们会尽快与您联系！")
						oThis.setState({
							name:"",
							email:"",
							phone:"",
							message:"",
							note:"提交成功，我们会尽快与您联系！"
						})
					}
					oThis.phoneReq.style.display="none";
					setTimeout(function(){
						oThis.setState({
							note:""
						})
					},2000)
				}
			})
		}

	}
	render(){
		return (
			<div id="footer" className="clearfix">
				<div className="contract">
					<h1>CONTRACT US</h1>
					<h3>联系我们</h3>
					<p><span className="base_tag">姓名：</span><input className="base_input" type="text" name="name" value={this.state.name} onChange={this.inputChange}/></p>
					<p><span className="base_tag">邮箱：</span><input className="base_input" type="text" name="email" value={this.state.email} onChange={this.inputChange}/></p>
					<p>
						<span className="base_tag">电话：</span>
						<input className="base_input" type="text" name="phone" value={this.state.phone} onChange={this.inputChange}/>
						<span className="required" ref={(ele)=>this.phoneReq=ele}> * 必填</span>
					</p>
					<p><span className="base_tag">附言：</span><textarea name="message" value={this.state.message} onChange={this.inputChange}/></p>
					<p className="sbtn"><a id="submitMessage" onClick={this.submitMessage}>提交</a></p>
					<p className="note">{this.state.note}</p>
				</div>
				<div className="us">
					<div id="phone" className="us_item">
						<i className=" icon-phone icon_img">
							
						</i>
						<span>电话：</span>
						<span>86-13470855708</span>
					</div>
					<div id="email" className="us_item">
						<i className="icon-envelope icon_img">
							
						</i>
						<span>邮箱：</span>
						<span>779102260@qq.com</span>
					</div>
					<div id="address" className="us_item">
						<i className="icon-map-marker icon_img">
							
						</i>
						<span>地址：</span>
						<span>安徽省六安市恒大御景湾</span>
					</div>
				</div>
				<div className="clearfix"></div>
				<div id="boot">
					<p>&copy;2017 全国墙布批发公司 版权所有</p>
				</div>
			</div>
		)
	}
}

export default Footer