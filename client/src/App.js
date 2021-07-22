import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Campaigns from './pages/Campaigns';
import Profile from './pages/Profile';
import Navbar from './components/Navbar'
import ApolloClient from 'apollo-boost';
import React from 'react';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/campaigns' component={Campaigns} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>}/>
        </Switch>
      </Router>
    </ApolloProvider>
    
  );
}

export default App;