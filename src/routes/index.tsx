import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import GlobalStyle from '@/assets/styles/global'
import { GameCenter } from '@/pages/GameCenter/gameCenter.page'
import { PlayerInfoPage } from '@/pages/PlayerInfo/playerInfo'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={PlayerInfoPage} />
        <Route path="/game" exact component={GameCenter} />
        <GlobalStyle />
      </Switch>
    </Router>
  )
}

export default Routes
