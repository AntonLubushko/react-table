import { Route, Switch } from 'react-router-dom';
import React from 'react';
import NotFound from './NotFound';
import Form from './Form';
import Post from "./Posts";
import SinglePost from "./SinglePost";

const App = () => (
  <div className="row mt-5">
    <Switch>
      <Route exact path="/" component={Form} />
      <Route exact path="/posts" component={Post} />
      <Route exact path="/posts/:id" component={SinglePost} />
      <Route path="*" component={NotFound} />
    </Switch>
  </div>
);

export default App;