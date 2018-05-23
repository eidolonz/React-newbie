import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import configureStore from './store/configureStore'
import './index.scss'

// import registerServiceWorker from './registerServiceWorker';
const store = configureStore()
const rootEl = document.getElementById('app')

const renderApp = (Component) => {
  render(
    <Provider store={store}>
      <Component />
    </Provider >
    ,
    rootEl
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextRoot = require('./App').default // eslint-disable-line global-require
    renderApp(NextRoot)
  })
}
 // registerServiceWorker();
