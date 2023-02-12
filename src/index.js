import React from 'react';
import ReactDOM from 'react-dom/client';
// import './01-base/01-class'
// import App from './01-base/01-class';
// import App from './01-base/03-组件嵌套'
// import App from './01-base/04-组件样式'
import App from './01-base/05-事件处理-1'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
