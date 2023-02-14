import React from 'react';
import '../css/com-sidebar.css'

export default function SideBar(props) {
	const {bg,position} = props
	console.log(bg)
	const style = {
		background: bg,
		width: '200px',
		position: 'fixed'
	}
	const left = {left:0}
	const right = {right:0}
	const styleObj = position === 'left' ? {...style, ...left} : {...style,...right}
	return (
		<div className={'SideBar'}>
			<ul style={styleObj}>
				<li>ds</li>
				<li>sd</li>
				<li>sd</li>
				<li>sd</li>
			</ul>
		</div>
	)
};
