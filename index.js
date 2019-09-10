import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Blog from './Blog';
import Books from './Books';
import Contact from './Contact';
import Aboutus from './Aboutus';
import Login from './Login';
import  Pagenotfound from './Pagenotfound';
import './style.css';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="col-lg-12 main">
            <nav className="navbar navbar-light pull-right">
              <Link to='/Login'>Login</Link>
              <Link to='/Blog'>Blog</Link>
              <Link to='/Books'>Books</Link>
              <Link to='/Contact'>Contact</Link>
              <Link to='/Aboutus'>Aboutus</Link>
              <Link to='/Pagenotfound'>Pagenotfound</Link>


            </nav>
          </div>
          <div className="style">
            <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/Login' component={Login} />
              <Route exact path='/Blog' component={Blog} />
              <Route exact path='/Books' component={Books} />
              <Route exact path='/Contact' component={Contact} />
              <Route exact path='/Aboutus' component={Aboutus} />
              <Route exact path='/Pagenotfound' component={Pagenotfound} />
            </Switch>
          </div>

        </BrowserRouter>
      </div>
    );
  }
}
render(<App />, document.getElementById('root'));
