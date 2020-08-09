import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './components/Home';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';
import ViewPost from './components/ViewPost';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div style={{ maxWidth: "50rem", margin: "4rem auto"}}>

      <Router>
        <Switch>
          <Route path="/posts/:id" component={ViewPost} />
          <Route path="/add" component={AddPost} />
          <Route path="/edit/:id" component={EditPost} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
