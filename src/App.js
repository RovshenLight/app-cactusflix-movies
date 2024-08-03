import './App.css';
import Home from './pages/home/Home'
import Watch from './pages/watche/Watch';
import Regist from './pages/regist/Regist'
import Login from './pages/login/Login'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useAuth } from './AuthContext/AuthContext';

function App() {

  const { isAuthenticated } = useAuth();

  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path='/'>
            {isAuthenticated ? <Home /> : <Redirect to='/Regist' />}
          </Route>
          <Route exact path='/Regist'>
            {!isAuthenticated ? <Regist /> : <Redirect to='/' />}
          </Route>
          <Route exact path='/Login'>
            {!isAuthenticated ? <Login /> : <Redirect to='/' />}
          </Route>
          {isAuthenticated && (
            <>
          <Route path='/Movies'>
            <Home type='Movies' />
          </Route>
          <Route path='/Series'>
            <Home type='Series' />
          </Route>
          <Route path='/Watch'>
            <Watch />
          </Route>            
            </>
          )}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
