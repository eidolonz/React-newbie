import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie'
import App from './App'
import configureStore from './store/configureStore'
import './index.scss'

// import registerServiceWorker from './registerServiceWorker';
const rootEl = document.getElementById('app')

const renderApp = (Component) => {
  console.log('KKKKKKKKKKKKKKKKKKKKKKK', Component, document.getElementById('app'));
  render(
    <Provider store={store}>
      <CookiesProvider>
        <Component />
      </CookiesProvider>
    </Provider >
    ,
    rootEl
  )
}

renderApp(App)
// ReactDOM.render(<App />, document.getElementById('app'));
// registerServiceWorker();
