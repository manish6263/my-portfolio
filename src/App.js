import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import UserState from './context/UserState';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import WriteRecommendation from './pages/WriteRecommendation';
import ProjectPage from './pages/ProjectPage';
import BlogPage from './pages/BlogPage';
import AddProject from './pages/AddProject';
import AddBlog from './pages/AddBlog';
import AllProjects from './pages/AllProjects';
import AllBlogs from './pages/AllBlogs';
import AddSkill from './pages/AddSkill';

function App() {
  return (
    <UserState>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/all-projects' element={<AllProjects />} />
          <Route exact path='/all-blogs' element={<AllBlogs />} />
          <Route exact path='/write-a-recommendation' element={<WriteRecommendation />} />
          <Route exact path='/project/add' element={<AddProject />} />
          <Route exact path='/blog/add' element={<AddBlog />} />
          <Route exact path='/skill/add' element={<AddSkill />} />
          <Route exact path='/project/:id' element={<ProjectPage />} />
          <Route exact path='/blog/:id' element={<BlogPage />} />
          <Route exact path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </UserState>
  );
}

export default App;