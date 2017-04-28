import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Layout from './components/Layout'
import RouteDetails from './components/RouteDetails'

const app = document.getElementById('points')

render(
    <Router>
        <div>
            <Route exact path='/home' component={Layout}/>
            <Route path='/home/route-details' component={RouteDetails}/>
        </div>
    </Router>
, app)