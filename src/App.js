import HomeScreen from './screens/HomeScreen';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import FaqScreen from './screens/FaqScreen';
import NotFoundScreen from './screens/NotFoundScreen';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/faq' element={<FaqScreen />} />
          <Route path='*' element={<NotFoundScreen />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
