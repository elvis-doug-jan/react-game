import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { ConnectedRouter } from 'connected-react-router'
import { History } from 'history'

import App from '@/App'
import GlobalStyle from '@/assets/styles/global'

interface RouterProps {
  history: History
}

const Routes = (props: RouterProps) => {
  const { history } = props

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={App} />
        <GlobalStyle />
      </Switch>
    </ConnectedRouter>
  )
}

export default Routes
