import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NavBarStatic extends Component {
	static propTypes = {
		name: PropTypes.string,
		isShowLeft: PropTypes.bool,
		isShowRight: PropTypes.bool.isRequired
	};
	static defaultProps = {
		name: '默认name',
		isShowLeft: true,
		isShowRight: true
	};
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



export default NavBarStatic;
