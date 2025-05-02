
import HomePage from './components/HomePage'
import Department from './components/Department'
import Employee from './components/Employee'
import Logout from './components/Logout'
import Navbar from './components/Navbar'
import Update from './components/Update'

import { BrowserRouter as Router,Routes,Route, useLocation} from 'react-router-dom'
import UpdateEmployee from './components/UpdateEmployee'
import Login from './components/Login'


function App() {

  const location = useLocation()
  const hideNavbarOnPaths = ['/'];

  return(
    <>

      {!hideNavbarOnPaths.includes(location.pathname) && <Navbar />}
        {/* <Navbar /> */}
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/HomePage' element={<HomePage />} />
          <Route exact path='/Department' element={<Department />} />
          <Route exact path='/Employee' element={<Employee/>} />
          <Route exact path='/Logout' element={<Logout/>} />
          <Route exact path='/Update/:id' element={<Update />} />
          <Route exact path='/Employee' element={<Employee />} />
          <Route exact path='/UpdateEmployee/:id' element={<UpdateEmployee />} />
        </Routes>

    </>
  )
}

export default App
