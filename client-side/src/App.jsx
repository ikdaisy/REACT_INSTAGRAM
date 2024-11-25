import { useState } from 'react'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import './App.scss'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import Email from './components/Email/Email'
import Profile from './components/Profile/Profile'
import EditProfile from './components/EditProfile/EditProfile'



function App() {
  const [user,setUser]=useState("")
  // const [profile,setProfile]=useState("")


  console.log(`app ${user}`);
  
  return (
    <>
    <BrowserRouter>
      {user&&<Nav user={user} setUser={setUser} />}
      <Routes>
        <Route path='/' element={<Home setUser={setUser} />}/>
        <Route path='/profile' element={<Profile setUser={setUser}/>}/>
        <Route path='/editprofile' Component={EditProfile}/>


        <Route path='/signin' Component={SignIn}/>
        <Route path='/email' Component={Email}/>
        <Route path='/signup' Component={SignUp}/>
      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
