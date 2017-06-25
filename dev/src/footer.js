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
			message:""
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
						alert("提交成功，我们会尽快与您联系！")
						oThis.setState({
							name:"",
							email:"",
							phone:"",
							message:""
						})
					}
					oThis.phoneReq.style.display="none";
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
					<p><span>姓名：</span><input type="text" name="name" value={this.state.name} onChange={this.inputChange}/></p>
					<p><span>邮箱：</span><input type="text" name="email" value={this.state.email} onChange={this.inputChange}/></p>
					<p>
						<span>电话：</span>
						<input type="text" name="phone" value={this.state.phone} onChange={this.inputChange}/>
						<span className="required" ref={(ele)=>this.phoneReq=ele}> * 必填</span>
					</p>
					<p><span>附言：</span><textarea name="message" value={this.state.message} onChange={this.inputChange}/></p>
					<p><span id="submitMessage" onClick={this.submitMessage}>提交</span></p>
				</div>
				<div className="us">
					<div id="phone">
						<p>
							<img src={phoneImg} />
						</p>
						<p>电话</p>
						<p>86-13470855708</p>
					</div>
					<div id="email">
						<p>
							<img src={emailImg} />
						</p>
						<p>邮箱</p>
						<p>779102260@qq.com</p>
					</div>
					<div id="address">
						<p>
							<img src={addressImg} />
						</p>
						<p>地址</p>
						<p>安徽省六安市恒大御景湾</p>
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