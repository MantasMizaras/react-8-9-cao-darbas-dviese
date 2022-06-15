import { useState, useEffect } from 'react';
import SinglePetCard from '../petList/SinglePetCard';

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
        <button>Add Pet</button>
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
