import React, {Component, createContext} from 'react';

const GlobalContext = createContext()

class App extends Component {
	render() {
		return (
			<GlobalContext.provider>
				<div>
					没啥用 不会

				</div>
			</GlobalContext.provider>

		);
	}
}

export default App;
