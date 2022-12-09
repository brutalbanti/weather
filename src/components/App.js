import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GetLocation } from "./pages/GetLocation";
import MoreDetails from "./pages/MoreDetails";

class App extends React.Component {
    render() {
        const city = localStorage.getItem('city');
        return (
            <React.StrictMode>
                <Router>
                    <div className="app-container __container">
                        <Switch>
                            <Route exact path="/">
                                <GetLocation cityLocal={city} />
                            </Route>
                            <Route exact path="/details">
                                <MoreDetails cityLocal={city} />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </React.StrictMode>
        )
    }
}

export default App;