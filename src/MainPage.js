import Button from "react-bootstrap/Button";
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Quiz_App from "./Quiz_App";

function MainPage(props) {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/Projects' element={<Projects/>}></Route>
      <Route exact path='/Contact' element={<Contact/>}></Route>
      <Route exact path='/Projects/Quiz_App' element={<Quiz_App/>}></Route>
    </Routes>
  );
}

export default MainPage;