import './navbar.css'
import React, { useState, useEffect } from 'react'
import { BiSearch } from 'react-icons/bi'
import { BiBell } from 'react-icons/bi'
import { BsChevronBarDown } from 'react-icons/bs'
import { BsChevronBarUp } from 'react-icons/bs'
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import CTA from '../CTA/CTA'
import moviesexport from '../export/moviesexport'

const NavBar = () => {

  const history = useHistory();
  const [dropDown, setDropDown] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [alert, setAlert] = useState(false);
  const [stickyClass, setStickyClass] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 0 ? setStickyClass('sticky') : setStickyClass('');
    }
  };

  const handleLogout = () => {
    history.push('/login');
  };


  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchInput(query);

    const filtered = moviesexport().filter(movie => 
      movie.movie_name.toLowerCase().includes(query)
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className='navbar'>
      <div className={`container ${stickyClass}`}>
        <div className="left">
            <Link className="logo" to="/">
              <h6>CactusFlix</h6>
            </Link>
            <ul>
              <li className='left__link'><Link to="/">Home</Link></li>
              <li className='left__link'><Link to="/Movies">Movies</Link></li>
              <li className='left__link'><Link to="/Series">Series</Link></li>
              <li className='left__link'><Link to="#Newandpopular">New and Popular</Link></li>
              <li className='left__link'><Link to="#Mylist">My list</Link></li>
            </ul>
        </div>
        <div className="right">
          {search ?  <BiSearch onClick={() => setSearch(false)} /> : <BiSearch onClick={() => setSearch(true)} />}
          {search && (
            <div className='right-search scale-in-top'>
              <input type="search" name="search" id="search" placeholder='Search' value={searchInput} onChange={handleSearch} />
              {filteredMovies.length > 0 && (
                <div className="search-results">
                  <ul>
                    {filteredMovies.map((result) => (
                      <li key={result.id}>  
                        <Link to={`/movie/${result.id}`}><Link to='/Watch'>{result.movie_name}</Link></Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
          {alert ? <BiBell onClick={() => setAlert(false)} /> : <BiBell onClick={() => setAlert(true)} />}
          {alert && (
            <div className='bell scale-in-top'>
              <span>Empty</span>
            </div>
          )}
          <div className="profile">
          {dropDown ? <BsChevronBarUp onClick={() => setDropDown(false)} /> : <BsChevronBarDown onClick={() => setDropDown(true)} />}
            {dropDown && (
            <>
            <ul className='scale-in-top'>
              <li><button className='logout' onClick={handleLogout}><CTA a='Lo' b='g O' c='ut' /></button></li>
            </ul>
            </>
            )}  
          </div>
        </div>
        <div className="mobile">
        {toggleMenu ? <IoClose onClick={() => setToggleMenu(false)} /> : <IoMenu onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
            <>
              <div className="mobile-left  bounce-in-top">
            <Link className="logo" to="/">
              <h6>CactusFlix</h6>
            </Link>
            <ul>
              <li className='mobile__left__link'><Link to="/">Home</Link></li>
              <li className='mobile__left__link'><Link to="/Movies">Movies</Link></li>
              <li className='mobile__left__link'><Link to="/Series">Series</Link></li>
              <li className='mobile__left__link'><Link to="/Newandpopular">New and Popular</Link></li>
              <li className='mobile__left__link'><Link to="/Mylist">My list</Link></li>
            </ul>
        </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default NavBar