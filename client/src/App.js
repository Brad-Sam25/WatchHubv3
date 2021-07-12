import './App.css';
import Landing from './components/pages/Landing';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Login'
import 'bulma/css/bulma.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        {/* <Route exact path="/" component={Login} /> */}
        <Landing />
        <Footer />
      </div>
    </Router>
  );
}


export default App;
