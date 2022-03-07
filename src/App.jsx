import React from 'react';
// import { Routes, Route } from 'react-router-dom';

// Components
import Todo from './Components/Todo/Todo';
// import SignIn from './Components/Users/SignIn';
// import SignUp from './Components/Users/SignUp';

const App = () => {
  return (
    <>

      {/* <Routes> */}
      {/* <Route path="/" element={<SignIn title="Sign In" />} />
        <Route path="/signup" element={<SignUp title="Register your account" />} /> */}
      {/* <Route path="/" element={<Todo title="Your Todos 📓" />} /> */}
      <Todo title="Your Todos 📓" />
      {/* </Routes> */}

    </>
  )
}

export default App;