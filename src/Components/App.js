import React from 'react';
import '../CSS/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';


// This is where the main application will be rendered from
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />

           {/* Setting up the paths to each of the components */}
           <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </div>
    );
  }
}

export default function Router() {

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};
