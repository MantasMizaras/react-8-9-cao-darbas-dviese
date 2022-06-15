import { useState, useEffect } from 'react';
import SinglePetCard from '../petList/SinglePetCard';

import { NavLink } from 'react-router-dom';

const PetListPage = () => {
  const [petsArr, setPetsArr] = useState([]);

  const getPetsAndSetState = async () => {
    const resp = await fetch('/db/pets.json');
    const dataInJs = await resp.json();
    const onlyDataWeNeed = dataInJs.map(({ id, name, dob, client_email }) => ({
      id,
      name,
      dob,
      client_email,
    }));
    setPetsArr(onlyDataWeNeed);
  };

  useEffect(() => {
    getPetsAndSetState();
  }, []);

  return (
    <div>
      <div className='pets-header'>
        <h1>Pet List</h1>
        <NavLink to='/AddPet'>
          <button>Add Pet</button>
        </NavLink>
      </div>
      <div className='pets-grid'>
        {petsArr.map((pObj) => (
          <SinglePetCard key={pObj.id} {...pObj} />
        ))}
      </div>
    </div>
  );
};

export default PetListPage;
