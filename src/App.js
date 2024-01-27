import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='contact' element={<ContactPage />}/>
        <Route path='directory' element={<CampsitesDirectoryPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;



// Each component is like a function
// Each prop is like an argument

// we will use this in the index.js file (to render the App component)


// first route handles a server request to no specific page at all (just the root of the site)
// second route handles a server request to the contact page
// third route handles a server request to the directory page
