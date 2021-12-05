import Home  from './components/Home';
import Blog  from './components/Blog';
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
          <Route exact path="/blog" component={Blog}/>
          <Route exact path="/image" component={Image}/>
        </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
