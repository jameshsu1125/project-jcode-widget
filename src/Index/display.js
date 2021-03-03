import React from 'react';

import Nav from './nav';

export default class display extends React.Component {
	constructor(props) {
		super(props);
		this.state = { location: this.props.location || 'all' };
		this.data = this.props.data;
	}

	append_store(data) {
		return data.map((e, i) => {
			return (
				<React.Fragment key={i}>
					<div
						style={{
							backgroundColor: '#ae9579',
							color: '#fff',
							padding: '5px 0px',
						}}>
						{e.name}
					</div>
					<div
						style={{
							backgroundColor: '#f5f3e2',
							padding: '5px 0px',
							color: '#111',
							fontSize: '14px',
						}}>
						<a style={{ color: '#111' }} target='_blank' href={`https://www.google.com.tw/maps/place/${e.addr}/`}>
							{e.addr}
						</a>
					</div>
					<div
						style={{
							backgroundColor: '#f5f3e2',
							padding: '5px 0px',
							color: '#111',
							fontSize: '14px',
						}}>
						<a style={{ color: '#111' }} href={`tel:${e.tel}`}>
							{e.tel}
						</a>
					</div>
				</React.Fragment>
			);
		});
	}

	append_department_h3(e) {
		if (e === '百貨櫃點 / Department stores') return <h3 style={{ color: '#a4780d' }}>各百貨營業時間，請於該百貨官網查詢</h3>;
	}

	get_location_all() {
		let d = this.data;
		let t = [];
		let v = [];
		for (let i in d) {
			t.push(i);
			v.push(d[i]);
		}
		return t.map((e, i) => (
			<div key={i}>
				<h1 style={{ color: ' #a4780d' }}>{e}</h1>
				{this.append_department_h3(e)}
				{this.append_store(v[i])}
			</div>
		));
	}

	update(e, d) {
		this.data = d;
		this.setState({ location: e });
	}

	append_by_location() {
		switch (this.state.location) {
			case 'all':
				return (
					<>
						<Nav />
						{this.get_location_all()}
					</>
				);
			case 'nor':
			case 'cen':
			case 'sou':
			case 'est':
				return <>{this.get_location_all()}</>;
				break;
			default:
				return '';
		}
	}

	render() {
		return (
			<div
				ref='main'
				style={{
					textAlign: 'center',
				}}>
				{this.append_by_location()}
			</div>
		);
	}
}
