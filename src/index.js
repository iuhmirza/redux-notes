import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'


import noteReducer from './reducers/noteReducer'
import filterReducer from './reducers/filterReducer'

import { createNote } from './reducers/noteReducer'
import { filterChange } from './reducers/filterReducer' 

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer
})

const store =  configureStore({reducer})

console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)