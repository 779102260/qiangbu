import React , {Component} from 'react'

import aboutBanner from '../../images/JpShow/aboutBanner.jpg'

class AboutUs extends Component{
	render(){
		return (
			<div className="aboutUs">
				<div className="aboutBanner"><img src={aboutBanner}/></div>
				<div className="aboutus_content">
					<div className="jpTitle aboutTitle">
						<h3><strong>公司</strong>简介</h3>
						<div className="line"></div>
					</div>
					<p>全国墙布批发是一家致力于六安中高端墙纸墙布的代理、批发、销售与施工的专业公司。</p>
					<p>专业六安贴墙纸墙布25元/平方包安装服务六安。质量可靠，手艺过关，施工满意后付款。品牌墙布厂家直销，高精密单色提花、双色提花、墙布刺绣、印花绣、定位绣、素色.......</p>
					<p>墙布样本各种花色新潮多样，免费上门看墙布样本量尺寸，设计效果图。墙布样本在我家没有门面开支，没有中间熟人介绍费用，活我自己做。真正的做到与客户面对面，减少了中间利润环节，低于市场价格不花冤枉钱，给客户实实在在的实惠。</p>
					<p>加微信看更多图片了解详情！现场墙布施工讲解安装墙布注意事项！施工美观技巧！什么样的墙布适合什么样的地方铺贴更美观！关于墙布！墙角处施工！花头高度垂直度！墙布节约问题！底布布料介绍！墙布施工结束专业检查。墙布我们是认真的[拳头]</p>
				</div>
			</div>
		)
	}
}

export default AboutUs
