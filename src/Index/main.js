import React from 'react';

import Data from './../db.json';
import Display from './Display';
import Text from './text';

import ReactDOMServer from 'react-dom/server';
import copy from 'copy-text-to-clipboard';

export default class index extends React.Component {
	constructor(props) {
		super(props);
		this.data = { ...Data };
		this.location = 'all';
	}

	sync(e) {
		let sort, dat, i, j;
		this.location = e;
		switch (e) {
			case 'all':
				this.data = { ...Data };
				break;
			case 'nor':
				sort = ['基隆市 / Keelung City', '台北市 / Taipei City', '新北市 / New Taipei City', '桃園縣 / Taoyuan County', '新竹市/縣 / Hsinchu'];
				dat = {};
				for (i in Data) {
					for (j = 0; j < sort.length; j++) {
						if (sort[j] === i) dat[i] = Data[i];
					}
				}
				this.data = { ...dat };
				break;
			case 'cen':
				sort = ['苗栗縣 / Miaoli County', '台中市 / Taichung City', '彰化縣 / Changhua County', '南投縣 / Nantou County'];
				dat = {};
				for (i in Data) {
					for (j = 0; j < sort.length; j++) {
						if (sort[j] === i) dat[i] = Data[i];
					}
				}
				this.data = { ...dat };
				break;

			case 'sou':
				sort = ['雲林縣 / Yunlin County', '嘉義市 / Chiayi City', '台南市 / Tainan City', '高雄市 / Kaohsiung County', '屏東縣 / Pingtung County'];
				dat = {};
				for (i in Data) {
					for (j = 0; j < sort.length; j++) {
						if (sort[j] === i) dat[i] = Data[i];
					}
				}
				this.data = { ...dat };
				break;
			case 'est':
				sort = ['台東縣 / Taitung County', '花蓮縣 / Hualien County', '宜蘭縣 / Ilan County', '澎湖縣 / Penghu County'];
				dat = {};
				for (i in Data) {
					for (j = 0; j < sort.length; j++) {
						if (sort[j] === i) dat[i] = Data[i];
					}
				}
				this.data = { ...dat };

				break;
		}

		this.refs.display.update(e, this.data);
	}

	copy() {
		let a = ReactDOMServer.renderToString(<Display data={this.data} location={this.location} />);
		copy(a);
		alert('copyed!');
	}

	render() {
		return (
			<div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '90% 10%' }}>
				<Display ref='display' data={Data} location={this.location} />
				<Text sync={this.sync.bind(this)} copy={this.copy.bind(this)} />
			</div>
		);
	}
}
