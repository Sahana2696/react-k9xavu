import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Books from './Books';
import Contact from './Contact';
import Aboutus from './Aboutus';
import Login from './Login';
import Home from './Home';
import Pagenotfound from './Pagenotfound';
import './style.css';
import { Provider } from 'react-redux';
import store from './store'
class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter history>
          <div className="col-lg-12 main">
            <nav className="navbar navbar-light pull-right">
            <Link to='/Home'>Home</Link>
              <Link to='/Login'>Login</Link>
              <Link to='/Books'>Books</Link>
              <Link to='/Contact'>Contact</Link>
              <Link to='/Aboutus'>Aboutus</Link>



            </nav>
          </div>
          <div className="style">
            <Switch>
            <Route exact path='/Home' component={Home} />
              <Route exact path='/Login' component={Login} />
              <Route exact path='/Books' component={Books} />
              <Route exact path='/Contact' component={Contact} />
              <Route exact path='/Aboutus' component={Aboutus} />
           
            </Switch>
          </div>

        </BrowserRouter>
      </div>
    );
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
