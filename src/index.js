import './main.css'

import React from 'react'
import {createRoot} from 'react-dom/client'
import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import createRootReducer from 'reducers'
import routes from 'routes'

const container = document.getElementById('root');
const root = createRoot(container);

const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history)]
const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middlewares))
)


root.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {routes}
        </ConnectedRouter>
    </Provider>
)
