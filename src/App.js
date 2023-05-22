import './App.css';
import { BrowserRouter, Route, Routes, NavLink, Navigate } from 'react-router-dom'

//Page components
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Article from './pages/Article';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          {/* <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a> */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles/:id" element={<Article />}/>
          {/* redireciona caso url inexistente e limpa url */}
          <Route path="*" element={<Navigate replace to="/" />}/>
        </Routes>
        
      
      </BrowserRouter>
    </div>
  );
}

export default App;
