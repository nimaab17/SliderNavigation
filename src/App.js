import { Route, Switch,BrowserRouter as Router } from 'react-router-dom'
import Layout from "./layout/Layout";
import News from "./page/mainPages/News"
import About from "./page/mainPages/About"
import Champions from "./page/mainPages/Champions"
import Constractors from "./page/mainPages/Constractors"
import Drivers from "./page/mainPages/Drivers"


function App() {
  return (
    <Router>
    <Layout>
      <Switch>
        <Route path='/news' exact>
          <News />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/champions'>
          <Champions />
        </Route>
        <Route path='/constractors'>
          <Constractors />
        </Route>
        <Route path='/drivers'>
          <Drivers />
        </Route>
      </Switch>
    </Layout>
    </Router>
  );
}

export default App;
