import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return <Router>
    {/* 한번에 하나의 route만 렌더링 */}
    <Switch> 
      <Route path={`${process.env.PUBLIC_URL}/movie/:id`}>
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
}

export default App;