import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GetLocation } from "./pages/GetLocation";

class App extends React.Component {
    render() {
        const city = localStorage.getItem('city');
        return (
            <div className="app-container __container">
                <React.StrictMode>
                    <Router>
                        <Switch>
                            <Route path="/">
                                <GetLocation cityLocal={city}/>
                            </Route>
                        </Switch>
                    </Router>
                </React.StrictMode>
            </div>
        )
    }
}

export default App;