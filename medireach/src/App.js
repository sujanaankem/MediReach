import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';


function App() {
  return <BrowserRouter>
    <Routes>
            <Route path="/" element={<Login />} />
        
        </Routes>
  </BrowserRouter>;
}

export default App;
