import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from "./views/About";
import Dataset from "./views/Dataset";
import Home from './views/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/dataset" component={Dataset} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
