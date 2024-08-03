import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import CTA from '../../componets/CTA/CTA'
import './login.css'
import { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  return (
    <div className='login'>
      <div className="login__wrapper">
        <div className="login__top">
          <div className="login__logo" href=''>
            <h6>CactusFlix</h6>
          </div>
        </div>
        <div className="login__container">
          <form>
            <h1>Sign In</h1>
            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button className='login__btn'><Link to='/'><CTA a='Si' b='gn' c=' In' /></Link></button>
              {error && <p className='login__error'>{error}</p>}
            <span>New to CactusFlix <Link className='login__signup' to='/Regist'>Sign Up now.</Link></span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;