
import Account from './components/main-pages/Account.jsx';
import Home from './components/main-pages/Home.jsx';
import Course from './components/main-pages/Course.jsx';
import Contact from './components/main-pages/Contact.jsx';
import Nopage from './components/main-pages/Nopage.jsx';
import Register from './components/login-pages/Register.jsx';
import Login from './components/login-pages/Login.jsx';

import Grade10main from './components/sub-pages/course/Grade10main.jsx';
import Grade11main from './components/sub-pages/course/Grade11main.jsx';
import Revisionmain from './components/sub-pages/course/Revisionmain.jsx';
import Pastpapermain from './components/sub-pages/course/Pastpapermain.jsx'

import Grade10lesson01 from './components/sub-pages/lessons/grade10/Garde10lesson01.jsx';
import Grade10lesson02 from './components/sub-pages/lessons/grade10/Grade10lesson02.jsx'


// import Grade10lesson03 from './components/sub-pages/lessons/grade10/Garde10lesson03.jsx';
// import Grade10lesson04 from './components/sub-pages/lessons/grade10/Garde10lesson04.jsx';
// import Grade10lesson05 from './components/sub-pages/lessons/grade10/Garde10lesson05.jsx';
// import Grade10lesson06 from './components/sub-pages/lessons/grade10/Garde10lesson06.jsx';
// import Grade10lesson07 from './components/sub-pages/lessons/grade10/Garde10lesson07.jsx';
// import Grade10lesson08 from './components/sub-pages/lessons/grade10/Garde10lesson08.jsx';
// import Grade10lesson09 from './components/sub-pages/lessons/grade10/Garde10lesson08.jsx';


// import Grade11lesson01 from './components/sub-pages/lessons/grade11/Grade11-lesson01.jsx'
// import Grade11lesson02 from './components/sub-pages/lessons/grade11/Grade11-lesson02.jsx'
// import Grade11lesson03 from './components/sub-pages/lessons/grade11/Grade11-lesson03.jsx'
// import Grade11lesson04 from './components/sub-pages/lessons/grade11/Grade11-lesson04.jsx'
// import Grade11lesson05 from './components/sub-pages/lessons/grade11/Grade11-lesson05.jsx'
// import Grade11lesson06 from './components/sub-pages/lessons/grade11/Grade11-lesson06.jsx'




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
        <Route path="/course/revisionmain" element={<Revisionmain />}></Route>
        <Route path="/course/pastpapermain" element={<Pastpapermain />}></Route>
 
        <Route path="/grade10lesson1" element={<Grade10lesson01 />}></Route>
        <Route path="/grade10lesson2" element={<Grade10lesson02 />}></Route>
 
        {/* <Route path="/grade10lesson3" element={<Grade10lesson03 />}></Route>
        <Route path="/grade10lesson4" element={<Grade10lesson04 />}></Route>
        <Route path="/grade10lesson5" element={<Grade10lesson05 />}></Route>
        <Route path="/grade10lesson6" element={<Grade10lesson06 />}></Route>
        <Route path="/grade10lesson7" element={<Grade10lesson07 />}></Route>
        <Route path="/grade10lesson8" element={<Grade10lesson08 />}></Route>
        <Route path="/grade10lesson9" element={<Grade10lesson09 />}></Route> */}
  

        {/* <Route path="/grade11lesson1" element={<Grade11lesson01 />}></Route>
        <Route path="/grade11lesson2" element={<Grade11lesson02 />}></Route>
        <Route path="/grade11lesson3" element={<Grade11lesson03 />}></Route>
        <Route path="/grade11lesson4" element={<Grade11lesson04 />}></Route>
        <Route path="/grade11lesson5" element={<Grade11lesson05 />}></Route>
        <Route path="/grade11lesson6" element={<Grade11lesson06 />}></Route> */}

      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;