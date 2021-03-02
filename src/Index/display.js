import React from 'react';
import './display.scss';

export default class display extends React.Component {
	constructor(props) {
		super(props);
		//console.log(this.props.data);
	}

	append_store(data) {
		return data.map((e, i) => {
			return (
				<React.Fragment key={i}>
					<div className='name'>{e.name}</div>
					<div>{e.addr}</div>
					<div>{e.tel}</div>
				</React.Fragment>
			);
		});
	}

	append() {
		let d = this.props.data;
		let t = [];
		let v = [];
		for (let i in d) {
			t.push(i);
			v.push(d[i]);
		}

		return t.map((e, i) => (
			<div className='row' key={i}>
				<h1 className='title'>{e}</h1>
				{this.append_store(v[i])}
			</div>
		));
	}

	render() {
		return <div id='display'>{this.append()}</div>;
	}
}
