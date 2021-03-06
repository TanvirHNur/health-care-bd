import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './componets/shared/Header/Header';
import Home from './componets/Home/Home/Home';
import ServiceDetails from './componets/ServiceDetails/ServiceDetails';
import Footer from './componets/shared/Footer/Footer';
import FindDoctors from './componets/FindDoctors/FindDoctors/FindDoctors';
import Login from './componets/login/Login/Login';
import Register from './componets/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './componets/login/PrivateRoute/PrivateRoute';
import Blogs from './componets/Blogs/Blogs/Blogs';
import NotFound from './componets/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header/>
        <Switch>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <PrivateRoute path="/booking/:serviceId">
              <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <PrivateRoute path="/find-doctor">
              <FindDoctors></FindDoctors>
          </PrivateRoute>
          <PrivateRoute path="/blog">
            <Blogs/>
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
