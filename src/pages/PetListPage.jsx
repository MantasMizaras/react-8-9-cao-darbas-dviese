import { useState, useEffect } from 'react';
import SinglePetCard from '../petList/SinglePetCard';

import { NavLink } from 'react-router-dom';

const PetListPage = () => {
  const [petsArr, setPetsArr] = useState([]);

  const getPetsAndSetState = async () => {
    const resp = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/pets');
    const dataInJs = await resp.json();
    const onlyDataWeNeed = dataInJs.map(({ id, name, dob, client_email }) => ({
      id,
      name,
      dob,
      client_email,
    }));
    setPetsArr(onlyDataWeNeed);
  };

  const deletePetById = async (id) => {
    const resp = await fetch(`https://glittery-dull-snickerdoodle.glitch.me/v1/pets/${id}`, {
      method: 'DELETE',
    });
    console.log('resp ===', resp);
    const data = await resp.json();
    if (data.changes === 1) {
      getPetsAndSetState();
    }
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
          <SinglePetCard onDelete={deletePetById} key={pObj.id} {...pObj} />
        ))}
      </div>
    </div>
  );
};

export default PetListPage;
