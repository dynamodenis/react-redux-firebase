import React from 'react';
// import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/projects/ProjectDetail';
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import PrivateRoute from './components/auth/PrivateRoute';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard}/>
          <PrivateRoute exact path="/project/:id" component={ProjectDetail} />
          <Route exact path="/login" component={SignIn}/>
          <Route exact path="/register" component={SignUp}/>
          <PrivateRoute exact path="/create" component={CreateProject}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
