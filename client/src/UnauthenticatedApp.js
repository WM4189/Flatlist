import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'

function UnauthenticatedApp({ setCurrentUser }) {
  return (
    <div className="center">
    {/* <h1>..Logged Out</h1> */}
    <Switch>
      <Route exact path="/">
        <Login setCurrentUser={setCurrentUser} />
      </Route>
      <Route exact path="/signup">
        <Signup setCurrentUser={setCurrentUser}/>
      </Route>
      <Redirect to="/" />
    </Switch>
    </div>
  )
}

export default UnauthenticatedApp