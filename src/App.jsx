
import './App.css';
import { DarkProvider } from './context/darkThemeContext';

import Home from './pages/home';
import About from './pages/about';
import Blogs from './pages/blogs';
import Projects from './pages/projects';
import HireMe from './pages/hireMe';
import NotFound from './pages/notFound';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
import LayoutHeader from './component/layoutHeader';
import LayoutFooter from './component/layoutFooter';

export default function App() {

  // const { darkMode, toggleDarkMode } = useContext(DarkContext);

  return (
    <div>
      <DarkProvider>
        <LayoutHeader />
        <Router>
          <Routes>
            {/* <Route
              path="/"
              element={<Navigate to={"/home"} />}
            /> */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/hireme" element={<HireMe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <LayoutFooter />
      </DarkProvider>
    </div>
  )
}
