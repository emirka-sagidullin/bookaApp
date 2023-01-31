import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'
import About from './components/About/About'
import Addbook from './components/Addbook/Addbook'
import Home from './components/Home/Home'
import {useState} from 'react'

function App() {
  const [books, setBooks] = useState(['a', 'b', 'c', 'd', 'e', 'f'])
  function eee(){console.log(books)}
  return (
    <Router >
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/addbook'>Addbook</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/about' element={<About />}/>
            
          <Route path='/addbook' element={<Addbook books={books} setBooks={setBooks} />} />
            
          <Route path='/' element={  <Home books={books}/>} />
          
  
        </Routes>
      </div>
    </Router>
  );
}

export default App;