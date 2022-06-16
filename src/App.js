import { Route, Switch } from 'react-router-dom';

import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AddMedsPage from './pages/AddMedsPage';
import AddPetPage from './pages/AddPetPage';
import MedicationPage from './pages/MedicationPage';
import PetListPage from './pages/PetListPage';
import SinglePetPage from './pages/SinglePetPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/pets/:petId'>
          <SinglePetPage />
        </Route>
        <Route path='/Medication'>
          <MedicationPage />
        </Route>
        <Route path='/AddPet'>
          <AddPetPage />
        </Route>
        <Route path='/AddMed'>
          <AddMedsPage />
        </Route>
        <Route exact path='/'>
          <PetListPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
