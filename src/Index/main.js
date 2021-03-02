import React from 'react';
import './main.scss';

import Data from './../db.json';
import Display from './Display';
import Text from './text';

export default class index extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id='index'>
				<Display data={Data} />
				<Text data={Data} />
			</div>
		);
	}
}
