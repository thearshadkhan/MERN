import React from 'react'
import DynamicForm from './usestate/dynamicForm'
import './App.css'
import StateUpdate from './usestate/StateUpdate'
import ToggleTheme from './usestate/ToggleTheme'
import StatefulList from './usestate/StatefulList'

const App = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <DynamicForm/>
      <h1>Counter </h1>
      <StateUpdate/>
      <ToggleTheme/>
      <StatefulList/>
    </div>
  )
}

export default App