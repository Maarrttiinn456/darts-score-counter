
import { MyProvider } from './DataToPassThrough';

//Pages
import LoginPage from './Pages/Login'
import Homepage from './Pages/Homepage'
import LeagueDetail from './Pages/LeagueDetail';

//React routes
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='min-h-screen'>
      <div className="container max-w-xl py-12">
        <MyProvider>
          <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/league/:id' element={<LeagueDetail/>}></Route>
            <Route path='/login' element={<LoginPage/>}></Route>
          </Routes>
        </MyProvider>
      </div>
    </div>  
    
  );
}

export default App;
