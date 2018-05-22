import React from 'react'
import { render } from 'react-dom'
import './index.scss';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
const rootEl = document.getElementById('app')

const renderApp = (Component) => {
  render(
    <Component />
    ,
    rootEl
  )
}

renderApp(App)
// ReactDOM.render(<App />, document.getElementById('app'));
// registerServiceWorker();
