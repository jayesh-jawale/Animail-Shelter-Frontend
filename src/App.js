import "./App.css";
import { AdoptForm } from "./components/adoptForm";
import { AdoptFormPage } from "./pages/adoptFormPage";
import { GiveAwayPage } from "./pages/giveAwayPage";
import { GiveAwayForm } from "./components/giveAwayForm";
import { AnimalShelter } from "./components/animalShelter";
import { GetPetByType } from "./components/getPet";
import { GetPetByTypeDog } from "./components/getPetDog";
import { GetPetByTypeCat } from "./components/getPetCat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>;

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <AnimalShelter />
          </Route>

          <Route exact path="/adopt">
            <AdoptFormPage />
          </Route>

          <Route exact path="/give-away">
            <GiveAwayPage />
          </Route>

          <Route exact path="/pets-we-have">
            <GetPetByType />
          </Route>

          <Route exact path="/pets-we-have/dog">
            <GetPetByTypeDog />
          </Route>

          <Route exact path="/pets-we-have/cat">
            <GetPetByTypeCat />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
