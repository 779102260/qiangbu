import React , {Component} from 'react'

import JpBanner from '../../images/JpShow/jpBanner.jpg'
import JpItem01 from '../../images/JpShow/jp_item01.jpg'
class JpShow extends Component{
	render(){
		return (
			<div className="JpShow">
				<div className="JpBanner"><img src={JpBanner} /></div>
				<div className="jpContainer">
					<div className="jpTitle">
						<h3>精品<strong>展示</strong></h3>
						<div className="line"></div>
					</div>
					<div className="jpList">
						<div className="jp_item">
							<div className="jp_item_inner">
								<dl>
									<dt className="eg_img"><img src={JpItem01}/></dt>
									<dd className="eg_title">恒生阳光城李先生业主墙布案例</dd>
								</dl>
							</div>
						</div>
						<div className="jp_item">
							<div className="jp_item_inner">
								<dl>
									<dt className="eg_img"><img src={JpItem01}/></dt>
									<dd className="eg_title">恒生阳光城李先生业主墙布案例</dd>
								</dl>
							</div>
						</div>
						<div className="jp_item">
							<div className="jp_item_inner">
								<dl>
									<dt className="eg_img"><img src={JpItem01}/></dt>
									<dd className="eg_title">恒生阳光城李先生业主墙布案例</dd>
								</dl>
							</div>
						</div>
						<div className="jp_item">
							<div className="jp_item_inner">
								<dl>
									<dt className="eg_img"><img src={JpItem01}/></dt>
									<dd className="eg_title">恒生阳光城李先生业主墙布案例</dd>
								</dl>
							</div>
						</div>
						<div className="jp_item">
							<div className="jp_item_inner">
								<dl>
									<dt className="eg_img"><img src={JpItem01}/></dt>
									<dd className="eg_title">恒生阳光城李先生业主墙布案例</dd>
								</dl>
							</div>
						</div>
					</div>	
				</div>
			</div>
		)
	}
}

export default JpShow