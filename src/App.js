import React, {useState} from 'react'
import Login from './components/Login'
import Navbar from './components/Navbar'

const App = () => {
  const [loggedInUser, setLoggedUser] = useState("")

  const activeUser = (email) => {
    setLoggedUser(email)
  }


  return (
    <div>
      
      <Navbar loggedInUser={loggedInUser} activeUser={activeUser}/>
      <h1>iLink Client</h1>
      { !loggedInUser && <Login activeUser={activeUser}/>}
     
    </div>
  );
}

export default App;
