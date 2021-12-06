import Home  from './components/Home';
import Fetch  from './components/Fetch';
import Image from './components/Image';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/fetch" component={Fetch}/>
          <Route exact path="/image" component={Image}/>
        </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
