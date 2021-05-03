import React, { useState, useEffect } from "react";
import "./App.css";
import { getUser } from "../../utilities/users-service";
import { Route, useHistory, Switch, Redirect } from "react-router-dom";
import * as puppyAPI from "../../utilities/puppies-api";
import PuppyListPage from "./PuppyListPage/PuppyListPage";
import AddPuppyPage from "./AddPuppyPage/AddPuppyPage";
import PuppyDetailPage from "./PuppyDetailPage/PuppyDetailPage";
import EditPuppyPage from "./EditPuppyPage/EditPuppyPage";
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from './AuthPage/AuthPage';


function App() {
  const [user, setUser] = useState(getUser());
  const [puppies, setPuppies] = useState([]);

  useEffect( () => {
    async function getPuppies() {
      const puppies = await puppyAPI.getAll();
      console.log(puppies)
      setPuppies(puppies)
    }
    getPuppies()
  }, [])
  
    const history = useHistory();
    
    useEffect(() => {
      history.push("/")
    }, [puppies, history])

  async function handleAddPuppy (newPupData){
    const newPup = await puppyAPI.create(newPupData);
    setPuppies([...puppies, newPup])
  }

  async function handleUpdatePuppy(updatedPuppyData) {
    const updatedPuppy = await puppyAPI.update(updatedPuppyData);
    const newPuppyArray = puppies.map(puppy => puppy._id === updatedPuppy._id ? updatedPuppy : puppy);
    setPuppies(newPuppyArray);
  }

  async function handleDeletePuppy(puppyID) {
     await puppyAPI.deleteOne(puppyID);
    setPuppies(puppies.filter(p => p._id !== puppyID))
  }

  return (
    <div className="App">
      {user ? 
        <>
          <NavBar user={user} setUser={setUser} />
            <Switch>
              <Route path="/puppies/list">
                <PuppyListPage puppies={puppies} handleDeletePuppy={handleDeletePuppy}/>
              </Route>
              <Route path="/puppies/add">
                <AddPuppyPage handleAddPuppy={handleAddPuppy} />
              </Route>
              <Route exact path="/puppies/details">
                <PuppyDetailPage />
              </Route>
              <Route exact path="/puppies/edit">
                <EditPuppyPage handleUpdatePuppy={handleUpdatePuppy}/>
              </Route>
              <Redirect to="/puppies" />
            </Switch>
          </>
          :
        <AuthPage setUser={setUser} />
      }
    </div>
  );
}

export default App;
