//import browser router
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
//pages import
import Home from './pages/Home';
import About from './pages/About';
import ArticleList from './pages/ArticleList';
import Article from './pages/Article';
import NotFound from './pages/NotFound';

//components
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
    <Navbar />
    <div className='max-w-screen-md mx-auto pt-20'>
    <navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/articles-list' element={<ArticleList />} />
      <Route path='/article/:name' element={<Article />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
