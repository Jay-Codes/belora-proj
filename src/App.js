import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Route ,Routes } from 'react-router-dom';
import SignIn from './authentication/SignIn';
import SignUp from './authentication/SignUpStudent';
import {Student , Lecturer} from './dashboards'
import { useState,useEffect } from 'react'
import { Dashboard } from './dashboards/student/pages'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0OOBgcXEH1JqGkZ5ZJ_Stxf84nZ-7kmg",
  authDomain: "attendance-system-f989a.firebaseapp.com",
  projectId: "attendance-system-f989a",
  storageBucket: "attendance-system-f989a.appspot.com",
  messagingSenderId: "572883247026",
  appId: "1:572883247026:web:25007364f7167a42d94eab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {

  const [currentUser,setCurrentUser ] = useState()
  function redirect() {
    if(window.location.pathname ==='/') window.location.href ='login'
  }
  useEffect(()=>{
    console.log(currentUser)
  },[currentUser])
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          
          <Route path='login' element={<SignIn app={app} currentUser = {currentUser} setCurrentUser={setCurrentUser}/>}/>
          <Route path='signup' element={<SignUp app={app} currentUser = {currentUser} setCurrentUser={setCurrentUser}/>}/>
          <Route path='student/*' element={<Student app={app} currentUser = {currentUser} setCurrentUser={setCurrentUser}/>}/>
          <Route path='lecturer/*' element={<Lecturer app={app} currentUser = {currentUser} setCurrentUser={setCurrentUser}/>}/>
          {redirect()}
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
