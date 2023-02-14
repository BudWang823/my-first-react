import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/com-navbar.css'
class NavBarStatic extends Component {
	static propTypes = {
		name: PropTypes.string,
		isShowLeft: PropTypes.bool,
		isShowRight: PropTypes.bool.isRequired
	};
	static defaultProps = {
		name: '默认name',
		isShowLeft: false,
		isShowRight: false
	};
	render() {
		const {name,isShowLeft,isShowRight}  = this.props
		return (
			<div className="warpper">
				<h2>
					{isShowLeft && <button>left button</button>}
					<span>{name}</span>
					{isShowRight && <button>right button</button>}
				</h2>
			</div>
		);
	}
}



export default NavBarStatic;
