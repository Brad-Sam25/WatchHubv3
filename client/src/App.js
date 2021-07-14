import './App.css';
import Landing from './components/pages/Landing';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Related from './components/Related';
import { 
  ApolloClient,
  ApolloProvider,  
  InMemoryCache,
  createHttpLink, 
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import { Navbar } from 'react-bulma-components';
const httpLink = createHttpLink({
  uri: '/graphql',
});
 

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
          <div>
            {/* <NavBar /> */}
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={NavBar} />
            <Route exact path="/signup" component={Signup} />
            {/* <Stats />
            <Landing />
            <Footer /> */}
          </div>
        </Router>
    </ApolloProvider>
  );
}


export default App;
