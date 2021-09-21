import { Route, Routes } from 'react-router';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" />  
    <div className="container">
    </div>
    <Routes>
      <Route path="/" element={<TextForm />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  );
}

export default App;
