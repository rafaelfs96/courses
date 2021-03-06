import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Dashboard from '../dashboard/dashboard2'
import BillingCycle from '../billingCycle/billingCycle'

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={ Dashboard } />
      <Route path='/billingCycles' component={ BillingCycle } />
      <Redirect from='*' to='/' />
    </Switch>
  )
}
