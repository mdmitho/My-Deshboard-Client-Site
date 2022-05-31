
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Page/Home/Home';
import Navbar from './components/Page/Navbar/Navebar';

function App() {
  return (
    <div className="App">
    <h1 className='text-2xl font-bold text-purple-500'>Hello boss</h1>
    <Navbar></Navbar>
    <Dashboard></Dashboard>
    </div>
  );
}

export default App;
