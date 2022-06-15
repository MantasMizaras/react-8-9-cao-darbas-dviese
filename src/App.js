import { Route, Switch } from 'react-router-dom';

import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
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
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
