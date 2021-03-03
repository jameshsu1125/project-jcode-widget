import React from 'react';
import './text.scss';

export default class text extends React.Component {
	constructor(props) {
		super(props);
	}

	all() {
		this.props.sync('all');
	}

	nor() {
		this.props.sync('nor');
	}

	cen() {
		this.props.sync('cen');
	}

	sou() {
		this.props.sync('sou');
	}

	est() {
		this.props.sync('est');
	}

	copy() {
		this.props.copy();
	}

	render() {
		return (
			<div id='text'>
				<button onClick={this.all.bind(this)}>門市</button>
				<button onClick={this.nor.bind(this)}>北部</button>
				<button onClick={this.cen.bind(this)}>中部</button>
				<button onClick={this.sou.bind(this)}>南部</button>
				<button onClick={this.est.bind(this)}>東部</button>
				<button onClick={this.copy.bind(this)}>複製HTML</button>
			</div>
		);
	}
}
