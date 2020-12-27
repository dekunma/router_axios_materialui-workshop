// router, axios, material UI

import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom'

import About from './pages/About'
import Posts from './pages/Posts'
import IndividualPost from './pages/IndividualPost'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  return (
    <BrowserRouter>

      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <ul>
        <li><a href='/'>Welcome page</a></li>
        <li><a href='/about'>About page</a></li>
        <li><a href='/posts'>Posts page</a></li>
      </ul>
      <Route path='/' exact={true}>
        <div>
          <h1>Welcome page</h1>
        </div>
      </Route>

      <Route path='/about' component={About} exact={true} />
      <Route path='/posts' component={Posts} exact={true} />
      <Route path='/posts/:id' component={IndividualPost} exact={true} />
    </BrowserRouter>
  );
}

export default App;
