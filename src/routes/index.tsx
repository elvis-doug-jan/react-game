import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import GlobalStyle from '@/assets/styles/global'
import { PlayerInfoPage } from '@/pages/playerInfo'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={PlayerInfoPage} />
        <GlobalStyle />
      </Switch>
    </Router>
  )
}

export default Routes
