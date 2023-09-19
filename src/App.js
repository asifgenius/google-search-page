import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import GooglePage from './pages/GooglePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/google.com' element={<GooglePage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
