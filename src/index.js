import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.css'
// import './01-base/01-class'
// import App from './01-base/01-class';
// import App from './01-base/03-组件嵌套'
// import App from './01-base/04-组件样式'
// import App from './01-base/05-事件处理-1'
// import App from './01-base/05-事件处理-2'
// import App from './01-base/06-ref'
// import App from './01-base/07-todolist'
// import App from './01-base/08-dangerouslySetInnerHTML'
// import App from './01-base/09-数据选项卡'
// import App from './01-base/10-setstate'
// import App from './01-base/11-betterScroll'
// import App from './01-base/12-props'
// import App from './01-base/13-props-function'
import App from './01-base/14-受控案例todolist'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<App/>
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
