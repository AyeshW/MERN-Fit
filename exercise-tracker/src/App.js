import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component";
import ExerciseList from "./components/exercise-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Route path="/" exact component={ExerciseList}></Route>
        <Route path="/edit/:id" component={EditExercise}></Route>
        <Route path="/create-exercise" component={CreateExercise}></Route>
        <Route path="/create-user" component={CreateUser}></Route>
      </div>
    </Router>
  );
}

export default App;
