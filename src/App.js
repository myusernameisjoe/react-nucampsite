import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';


function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesDirectoryPage/>
      <Footer />
    </div>
  );
}

export default App;



// Each component is like a function
// Each prop is like an argument


