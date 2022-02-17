import { Route, Switch } from "react-router-dom"
import Service from "./Service"

const Home = () => {
    return (
        <div>

            Home component

            <Switch>
                <Route path="/" >
                    <Service/>
                </Route>
            </Switch>
        </div>
    )
}

export default Home
