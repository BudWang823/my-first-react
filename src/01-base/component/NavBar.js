import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/com-navbar.css'
class NavBar extends Component {
	render() {
		const {name, isShowLeft, isShowRight} = this.props
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

NavBar.propTypes = {
	name: PropTypes.string,
	isShowLeft: PropTypes.bool,
	isShowRight: PropTypes.bool
};

NavBar.defaultProps = {
	name: "navbar",
	isShowLeft: false,
	isShowRight: false
};

export default NavBar;
