import React from 'react';

export default class navBtn extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<a href={this.props.url}>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'auto 30px',
						backgroundColor: '#ae9571',
						fontSize: '15px',
						float: 'left',
						borderRadius: '18px',
						color: '#FFF',
						padding: '10px 20px 10px 20px',
						boxSizing: 'border-box',
						textAlign: 'left',
						margin: '5px',
					}}>
					<div style={{ lineHeight: '20px' }}>
						<div style={{ fontSize: '20px' }}>{this.props.title}</div>
						<div style={{ fontSize: '13px', marginTop: '3px' }}>{this.props.location}</div>
					</div>
					<div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', fontSize: '1.5vw' }}>&gt;</div>
				</div>
			</a>
		);
	}
}
