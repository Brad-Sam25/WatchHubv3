import './App.css';
import Landing from './components/pages/Landing';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Login'
import Search from './components/Search'
import Stats from './components/Stats'
import 'bulma/css/bulma.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Related from './components/Related';


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        {/* <Route exact path="/" component={Login} /> */}
        <Search />
        <Related />
        <Stats />
        <Landing />
        <Footer />
      </div>
    </Router>
  );
}


export default App;
