import React, { useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import SignIn from './SignInPage.jsx';
import Register from './RegisterPage.jsx';
import Header from './header.jsx';
import { UserContext } from './contexts/userContext';
import Client from './ClientForm.jsx'



const initialUserData = {

}


function App() {
  const [ userData, setUserData] = useState(initialUserData)
  {/*^This state will allow us to grab data stored in the client/instructor anywhere we want*/}

  return (
    <div className="App">
      <Header />
      <Switch>
        <UserContext.Provider value={ setUserData }>
          <Route path='/signin'>
            <SignIn />
          </Route>
        </UserContext.Provider>
        <Route path='/register'>
          <Register />
        </Route>
        <UserContext.Provider value={ userData }>
          <Route path='/client'>
            <Client />
          </Route>
        </UserContext.Provider>
        <UserContext.Provider value={ userData }>
          {/* Put Instructor Page and Route inside */}
        </UserContext.Provider>
      </Switch>
     
    </div>
  );
}

export default App;
