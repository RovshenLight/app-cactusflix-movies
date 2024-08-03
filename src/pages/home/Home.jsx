import './home.css'
import NavBar from '../../componets/navbar/NavBar'
import Featers from '../../componets/featers/Featers'
import List from '../../componets/list/List'
import Footer from '../../componets/footer/Footer'
import moviesexport from '../../componets/export/moviesexport'

const Home = ({type}) => {

  const movies = moviesexport();

  return (
    <div className='home'>
      <NavBar />
      <Featers type={type} />
      {movies.map(movie => <List key={movie.id} dat={movie} />)}
      <Footer />
    </div>
  )
}

export default Home;