import React , {Component} from 'react'

import typeBanner from '../../images/JpShow/typeBanner.jpg'
import JpItem01 from '../../images/JpShow/jp_item01.jpg'

class TypeShow extends Component{
	render(){
		return (
			<div className="JpShow">
				<div className="JpBanner"><img src={typeBanner} /></div>
				<div className="jpContainer">
					<div className="jpTitle">
						<h3>分类<strong>展示</strong></h3>
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

export default TypeShow