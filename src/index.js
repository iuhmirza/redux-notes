import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import { combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import noteReducer from './reducers/noteReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer
})

const store =  configureStore({reducer})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)