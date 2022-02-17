import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Coursebundle from './Coursebundle'
import Service1 from './Service1'

const Service = () => {
    return (
        <div>
            services are here
            <Link to="/service1">
                Service 1
            </Link>
            <Link to="/service2">
                Service 2
            </Link>
            <Link to="/service3">
                Service 3
            </Link>
            
            <Switch>
                <Route path="/service1" exact component={Service1} />
                <Route path="/service2" exact component={Coursebundle} />
                <Route path="/service1" exact component={Service1} />
            </Switch>
            
        </div>
    )
}

export default Service
