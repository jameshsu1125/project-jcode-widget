import React from 'react';
import Nav_btn from './nav_btn';

export default class nav extends React.Component {
	constructor(props) {
		super(props);
		const root = this;
		//script
	}

	componentDidMount() {
		//script
	}

	componentDidUpdate() {
		//script
	}

	componentWillUnmount() {
		//script
	}

	render() {
		return (
			<div style={{ cursor: 'pointer', width: '100%', height: 'auto', float: 'left', padding: '20px 0px' }}>
				<Nav_btn
					title='北部地區'
					location='台北、新北、基隆、桃園、新竹'
					url='https://www.jcode.com.tw/pages/%E5%8C%97%E9%83%A8%E9%96%80%E5%B8%82-%E5%8F%B0%E5%8C%97%E6%96%B0%E5%8C%97%E5%9F%BA%E9%9A%86%E6%A1%83%E5%9C%92%E6%96%B0%E7%AB%B9'
				/>
				<Nav_btn
					title='中部地區'
					location='苗栗、台中、彰化、南投'
					url='https://www.jcode.com.tw/pages/%E4%B8%AD%E9%83%A8%E9%96%80%E5%B8%82-%E8%8B%97%E6%A0%97%E5%8F%B0%E4%B8%AD%E5%BD%B0%E5%8C%96%E5%8D%97%E6%8A%95'
				/>
				<Nav_btn
					title='南部部地區'
					location='雲林、嘉義、台南、高雄、屏東'
					url='https://www.jcode.com.tw/pages/%E5%8D%97%E9%83%A8%E9%96%80%E5%B8%82-%E9%9B%B2%E6%9E%97%E5%98%89%E7%BE%A9%E5%8F%B0%E5%8D%97%E9%AB%98%E9%9B%84%E5%B1%8F%E6%9D%B1%E7%B8%A3'
				/>
				<Nav_btn
					title='東部與外島門市'
					location='宜蘭、花蓮、台東、澎湖'
					url='https://www.jcode.com.tw/pages/%E6%9D%B1%E9%83%A8%E8%88%87%E5%A4%96%E5%B3%B6%E9%96%80%E5%B8%82-%E5%AE%9C%E8%98%AD%E8%8A%B1%E8%93%AE%E5%8F%B0%E6%9D%B1%E6%BE%8E%E6%B9%96'
				/>
			</div>
		);
	}
}
