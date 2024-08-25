import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import PageNotFound from './views/404/404';

const root = ReactDOM.createRoot(document.getElementById('root'));

const currentPath = window.location.pathname;

if (currentPath === '/') {
  root.render(<Home />);
} else if (currentPath === '/about') {
  root.render(<About />);
} else if (currentPath === '/contact') {
  root.render(<Contact />);
}else{
  root.render(<PageNotFound />);
}
