import './App.css';
import Test from './components/test';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery'
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">

      <NavBar></NavBar>
      <div className='row' style={{width:"98vw"}}>
        <div className='col-3 p-0'><SideBar></SideBar></div>
        <div className='col p-0'><Test /></div>
      </div>

    </div>
  );
}

export default App;
