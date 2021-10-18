import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './componets/shared/Header/Header';
import Home from './componets/Home/Home/Home';
import ServiceDetails from './componets/ServiceDetails/ServiceDetails';
import Footer from './componets/shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path="/booking/:serviceId">
              <ServiceDetails></ServiceDetails>
          </Route>
         
          <Route path="/">

          </Route>
          <Route path="/">

          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
