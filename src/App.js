import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Route ,Routes } from 'react-router-dom';
import SignIn from './authentication/SignIn';
import SignUp from './authentication/SignUpStudent';
import {Student , Lecturer} from './dashboards'
import { Dashboard } from './dashboards/student/pages'

function App() {
  return (
    <div className="App">
      HEllo
      <BrowserRouter >
        <Routes>
          
          <Route path='login' element={<SignIn/>}/>
          <Route path='signup' element={<SignUp/>}/>
          <Route path='student/*' element={<Student/>}/>
            {/* <Route path/> */}
          <Route path='lecturer/*' element={<Lecturer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
