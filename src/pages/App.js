import React from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import { Navbar, Alignment } from '@blueprintjs/core'

import Accounts from './accounts/Accounts'
import Marketplace from './marketplace/Marketplace'
import Listing from './marketplace/Listing'
import Contracts from './contracts/Contracts'

import AccountChooser from './accounts/_Chooser'

const App = () => (
  <>
    <Navbar>
      <Navbar.Group>
        <Navbar.Heading>Origin GraphQL Playground</Navbar.Heading>
        <Navbar.Divider />
        <NavLink
          className="bp3-button bp3-minimal"
          activeClassName="bp3-active"
          to="/accounts"
        >
          Accounts
        </NavLink>
        <NavLink
          className="bp3-button bp3-minimal"
          activeClassName="bp3-active"
          to="/marketplace"
        >
          Marketplace
        </NavLink>
        <NavLink
          className="bp3-button bp3-minimal"
          activeClassName="bp3-active"
          to="/contracts"
        >
          Contracts
        </NavLink>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <AccountChooser />
      </Navbar.Group>
    </Navbar>
    <div className="p-3">
      <Switch>
        <Route path="/accounts" component={Accounts} />
        <Route path="/marketplace/listings/:listingID" component={Listing} />
        <Route path="/marketplace" component={Marketplace} />
        <Route path="/contracts" component={Contracts} />
        <Redirect from="/" to="/accounts" />
      </Switch>
    </div>
  </>
)

export default App

require('react-styl')(`
  .text-center
    text-align: center
  .p-3
    padding: 1rem
  .mt-3
    margin-top: 1rem
  .mt-2
    margin-top: 0.5rem
  .mb-3
    margin-bottom: 1rem
`)
