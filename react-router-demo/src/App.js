import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApiData from "./components/ApiData";
import Home from "./components/Home";
import MyApiData from "./components/MyApiData";

const App = () => {
    return (
       <>
       <Router>
           <Switch>
               
               
               <Route exact path="/" component={Home} />
               
               <Route exact path="/apidata" component={ApiData} />
               <Route exact path="/api" component={MyApiData} />
               
           </Switch>
       </Router>
       </>
    )
}

export default App
