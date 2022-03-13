import HomePage from './pages/HomePage';
import PrivacyPage from './pages/PrivacyPage';
// adds the navbar
import NavBar from './NavBar';
// adds a not found page
import NotFoundPage from './pages/NotFoundPage';
// adds a footer
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

// allows navigation between pages
import {
	BrowserRouter,
    Routes,
	Route
} from 'react-router-dom';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<HomePage/>} exact />
            <Route path="/privacy" element={<PrivacyPage/>} exact />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        

    </div>
  );
}

export default App;
