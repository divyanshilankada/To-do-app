import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/login';
import RegisterPage from './components/register';
import './styles/App.css'

function App() {
  return (
    <div className="App">
         <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginPage />}></Route>
                <Route path='/register' element={<RegisterPage />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
