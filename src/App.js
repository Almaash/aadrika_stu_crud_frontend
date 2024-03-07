import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from './Components/Update.js';
import ShowRegistration from './Components/ShowRegistration.js';
import Registration from './Components/Registration.js';
import Toggler from './Components/Toggler.js';


function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Registration/>}/>
        <Route path="/showdata" element={<ShowRegistration/>}/>
        <Route path="/updatedata/:id" element={<Update/>}/>
        <Route path="/tog" element={<Toggler/>}/>
          

      </Routes>
    </BrowserRouter>

  );
}

export default App;
