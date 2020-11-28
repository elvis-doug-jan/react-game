import React from 'react'

import { Cards } from './components/Cards/card.component'
import { Buttom } from './components/UI/Buttons/button.component'
import { Input } from './components/UI/Input/input.component'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Buttom />
        <Cards />
        <Input />
      </header>
    </div>
  )
}

export default App
