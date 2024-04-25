
import Account from './components/main-pages/Account.jsx';
import Home from './components/main-pages/Home.jsx';
import Course from './components/main-pages/Course.jsx';
import Contact from './components/main-pages/Contact.jsx';
import Nopage from './components/main-pages/Nopage.jsx';
import Register from './components/login-pages/Register.jsx';
import Login from './components/login-pages/Login.jsx';
import Grade10main from './components/sub-pages/course/Grade10main.jsx';
import Grade11main from './components/sub-pages/course/Grade11main.jsx';
import Grade10lesson01 from './components/sub-pages/lessons/grade10/Garde10-lesson01.jsx';


import '../src/css/style.scss';

import { BrowserRouter,Routes, Route } from "react-router-dom";
function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/course" element={<Course />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="*" element={<Nopage />}></Route>

        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/course/grade10main" element={<Grade10main />}></Route>
        <Route path="/course/grade11main" element={<Grade11main />}></Route>
        <Route path="/grade10lesson1" element={<Grade10lesson01 />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;