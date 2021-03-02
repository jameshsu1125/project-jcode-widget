import React from 'react';
import './main.scss';

import $ from 'jquery';
require('jquery-easing');

export default class get extends React.Component {
	constructor(props) {
		super(props);
		const root = this;
	}

	componentDidMount() {
		const c = $('.all').children('div')[0];
		let dat = {};
		let lastTag;
		let job = {};
		let row = 0;
		let row_key_name = ['name', 'addr', 'tel'];

		$(c)
			.children()
			.each(function (i, e) {
				if (e.tagName === 'H1') {
					dat[e.innerText] = [];
					lastTag = e.innerText;
					job = {};
					row = 0;
				} else {
					job[row_key_name[row]] = e.innerText;
					row++;
					if (row == 3) {
						dat[lastTag].push(job);
						row = 0;
						job = {};
					}
				}
			});

		console.log(JSON.stringify(dat));
	}

	render() {
		return <div id='get'></div>;
	}
}
