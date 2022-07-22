import React from 'react'
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Routing() {
  return (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
        </div>

        <Switch>
            <Route path="/about">
                <About></About>
            </Route>
            <Route path="/users">
                <Users></Users>
            </Route>
            <Route path="/">
                <Home></Home>
            </Route>
        </Switch>
    </Router>
  )
}
function Home() {
    return <h2>Hello</h2>
}

function About() {
    return <h2>About Us</h2>
}

function Users() {
    return <h2>Hello user</h2>
}

