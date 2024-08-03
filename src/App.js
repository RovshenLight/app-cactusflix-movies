import './App.css';
import Home from './pages/home/Home'
import Watch from './pages/watche/Watch';
import Regist from './pages/regist/Regist'
import Login from './pages/login/Login'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

function App() {

  const  user = true

  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path='/'>
            {user ? <Home /> : <Redirect to='/Regist' />}
          </Route>
          <Route exact path='/Regist'>
            {!user ? <Regist /> : <Redirect to='/' />}
          </Route>
          <Route exact path='/Login'>
            {!user ? <Login /> : <Redirect to='/' />}
          </Route>
          {user && (
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
