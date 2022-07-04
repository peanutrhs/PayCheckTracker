import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import PayStubList from './Components/PayStubList';
import EditPayStub from './Components/EditPayStub';
import CreatePayStub from './Components/CreatePayStub';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

function App() {
  
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Landing/>} />
        <Route path='/PayStubList' element ={<PayStubList/>}/>
        <Route path='/EditPayStub' element = {<EditPayStub/>}/>
        <Route path='CreatePayStub' element={<CreatePayStub/>}/>
        
      </Routes>
    </Router>
   
  );
}

export default App;
