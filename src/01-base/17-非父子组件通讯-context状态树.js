import React, {Component, createContext} from 'react';

const GlobalContext = createContext()
class App extends Component {
	render() {
		return (
			<GlobalContext.provider>
				<div>

				</div>
			</GlobalContext.provider>

		);
	}
}

export default App;
