import { Route, Switch } from 'react-router-dom';

import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AddPetPage from './pages/AddPetPage';
import MedicationPage from './pages/MedicationPage';
import PetListPage from './pages/PetListPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/Medication'>
          <MedicationPage />
        </Route>
        <Route exact path='/'>
          <PetListPage />
        </Route>
        <Route path='/AddPet'>
          <AddPetPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
