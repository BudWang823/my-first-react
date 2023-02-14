import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NavBar extends Component {
	render() {
		const {name,isShowLeft,isShowRight}  = this.props
		return (
			<div>
				<h2>
					{isShowLeft && <button>left button</button>}
					我是-{this.props.name}
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

export default NavBar;
