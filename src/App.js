
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
import Pastpapermain from './components/sub-pages/course/Pastpapermain.jsx';

import Grade10lesson01 from './components/sub-pages/lessons/grade10/Garde10lesson01.jsx';
import Grade10lesson02 from './components/sub-pages/lessons/grade10/Grade10lesson02.jsx';
import Grade10lesson03 from './components/sub-pages/lessons/grade10/Grade10lesson03.jsx';
import Grade10lesson04 from './components/sub-pages/lessons/grade10/Grade10lesson04.jsx';
import Grade10lesson05 from './components/sub-pages/lessons/grade10/Grade10lesson05.jsx';
import Grade10lesson06 from './components/sub-pages/lessons/grade10/Grade10lesson06.jsx';
import Grade10lesson07 from './components/sub-pages/lessons/grade10/Grade10lesson07.jsx';
import Grade10lesson08 from './components/sub-pages/lessons/grade10/Grade10lesson08.jsx';
import Grade10lesson09 from './components/sub-pages/lessons/grade10/Grade10lesson09.jsx';


import Grade11lesson01 from './components/sub-pages/lessons/grade11/Grade11lesson01.jsx';
import Grade11lesson02 from './components/sub-pages/lessons/grade11/Grade11lesson02.jsx';
import Grade11lesson03 from './components/sub-pages/lessons/grade11/Grade11lesson03.jsx';
import Grade11lesson04 from './components/sub-pages/lessons/grade11/Grade11lesson04.jsx';
import Grade11lesson05 from './components/sub-pages/lessons/grade11/Grade11lesson05.jsx';
import Grade11lesson06 from './components/sub-pages/lessons/grade11/Grade11lesson06.jsx';


import Revisionlesson01 from './components/sub-pages/lessons/revision/Revisionlesson01.jsx';
import Revisionlesson02 from './components/sub-pages/lessons/revision/Revisionlesson02.jsx';
import Revisionlesson03 from './components/sub-pages/lessons/revision/Revisionlesson03.jsx';
import Revisionlesson04 from './components/sub-pages/lessons/revision/Revisionlesson04.jsx';
import Revisionlesson05 from './components/sub-pages/lessons/revision/Revisionlesson05.jsx';
import Revisionlesson06 from './components/sub-pages/lessons/revision/Revisionlesson06.jsx';
import Revisionlesson07 from './components/sub-pages/lessons/revision/Revisionlesson07.jsx';
import Revisionlesson08 from './components/sub-pages/lessons/revision/Revisionlesson08.jsx';
import Revisionlesson09 from './components/sub-pages/lessons/revision/Revisionlesson09.jsx';





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
 
        <Route path="/course/grade10lesson1" element={<Grade10lesson01 />}></Route>
        <Route path="/course/grade10lesson2" element={<Grade10lesson02 />}></Route>
        <Route path="/course/grade10lesson3" element={<Grade10lesson03 />}></Route>
        <Route path="/course/grade10lesson4" element={<Grade10lesson04 />}></Route>
        <Route path="/course/grade10lesson5" element={<Grade10lesson05 />}></Route>
        <Route path="/course/grade10lesson6" element={<Grade10lesson06 />}></Route>
        <Route path="/course/grade10lesson7" element={<Grade10lesson07 />}></Route>
        <Route path="/course/grade10lesson8" element={<Grade10lesson08 />}></Route>
        <Route path="/course/grade10lesson9" element={<Grade10lesson09 />}></Route>


        <Route path="/grade11lesson1" element={<Grade11lesson01 />}></Route>
        <Route path="/grade11lesson2" element={<Grade11lesson02/>}></Route>
        <Route path="/grade11lesson3" element={<Grade11lesson03 />}></Route>
        <Route path="/grade11lesson4" element={<Grade11lesson04 />}></Route>
        <Route path="/grade11lesson5" element={<Grade11lesson05 />}></Route>
        <Route path="/grade11lesson6" element={<Grade11lesson06 />}></Route>

        <Route path="/revisionlesson01" element={<Revisionlesson01/>}></Route>
        <Route path="/revisionlesson02" element={<Revisionlesson02/>}></Route>
        <Route path="/revisionlesson03" element={<Revisionlesson03/>}></Route>
        <Route path="/revisionlesson04" element={<Revisionlesson04/>}></Route>
        <Route path="/revisionlesson05" element={<Revisionlesson05/>}></Route>
        <Route path="/revisionlesson06" element={<Revisionlesson06/>}></Route>
        <Route path="/revisionlesson07" element={<Revisionlesson07/>}></Route>
        <Route path="/revisionlesson08" element={<Revisionlesson08/>}></Route>
        <Route path="/revisionlesson09" element={<Revisionlesson09/>}></Route>


       

      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;