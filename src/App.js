
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { Button } from "semantic-ui-react";
function App() {
  return (
    <Router>
     
       <div className='main'>
       <div className='nav' >
       <Link to='/'>
        <Button>Create Table</Button>
        </Link>
       <Link to='/Read'>
       <Button >Read Table</Button>
       </Link>
        <Button>
       <a href='https://645b5379a8f9e4d6e76554ef.mockapi.io/users-crud'> Click Me </a>
       </Button> 
       </div>
       <div className="container"> 
       <Routes>   
        <Route path='/' Component={Create} />
        <Route path='/Read' Component={Read} />
        <Route path='Update' Component={Update}/>  
       </Routes>
       </div>
       </div>
    </Router>
  );
}

export default App;
