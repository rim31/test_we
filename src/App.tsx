import React from "react";
import NavBar from './Components/Layout/Layout';
import Home from './Components/Pages/Home/Home';
import Books from './Components/Pages/Books/Books';
import Characters from './Components/Pages/Characters/Characters';
import Houses from './Components/Pages/Houses/Houses';
import { StoreContainer } from "./Components/Store"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <StoreContainer.Provider>
        <div className="App" style={{ backgroundColor: "whitesmoke", height: '100%' }}>

          {/* Layout named NavBar */}
          <NavBar>
            <header className="App-header" style={{ backgroundColor: "#282c34", minHeight: '100vh', color: 'white' }}>
              <div className="container" >

                {/* Routing */}
                <Switch>
                  <Route exact path={'/'} component={Home} />
                  <Route exact path={'/Books'} component={Books} />
                  <Route exact path={'/Houses'} component={Houses} />
                  <Route exact path={'/Characters'} component={Characters} />
                  <Route path={'*'} ><NotFound /></Route>
                </Switch>
              </div>
            </header>
          </NavBar>
        </div>


      </StoreContainer.Provider>
    </Router >
  );
};

function NotFound() {
  return (
    <h1>Page Not Found</h1>
  )
}

export default App;
