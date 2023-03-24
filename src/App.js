import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer';

function App() {
    return (
      <div className='App'>
        <Header />
        <CampsitesDirectoryPage />
        <Footer />
      </div>
    );
}

export default App;
