import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Profile from './pages/profile'
import login from './components/login';
import register from './components/register';

function App() {
        return(
            <div className='App'>
              <Router>
                <Routes>
                  <Route path='/' exact Component={Home}/>
                  <Route path='/login' Component={login} />
                  <Route path='/register' Component={register} />
                  <Route path='/profile' Component={Profile}/>
                </Routes>
              </Router>
            </div>
          )
    
 
}

export default App;
