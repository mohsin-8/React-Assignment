import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import components
import SignIn from './Components/Users/SignIn';
import SignUp from './Components/Users/SignUp';
import Todo from './Components/Todos/Todo';
import UserInformation from './Components/Users/UserInformation';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/registration" element={<SignUp />} />
        <Route path="/todos" element={<Todo title="Todo App" />} />
      </Routes>
    </>
  )
}

export default App;