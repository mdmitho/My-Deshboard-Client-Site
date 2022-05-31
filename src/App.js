
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Analytics from './components/Dashboard/Analytics/Analytics';
import CRM from './components/Dashboard/CRM/Crm';
import Dashboard from './components/Dashboard/Dashboard';
import Helpdesk from './components/Dashboard/Helpdesk/Helpdesk';
import Sales from './components/Dashboard/Sales/Sales';
import Home from './components/Page/Home/Home';
import Navbar from './components/Page/Navbar/Navebar';

function App() {
  return (
    <div className="App">
<Navbar></Navbar>
     
      <Routes>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route index path="analytics" element={<Analytics></Analytics>}></Route>
          <Route path="crm" element={<CRM></CRM>}></Route>
          <Route path="helpdesk" element={<Helpdesk></Helpdesk>}></Route>
          <Route path="Sales" element={<Sales></Sales>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
