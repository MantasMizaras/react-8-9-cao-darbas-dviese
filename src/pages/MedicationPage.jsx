// import React from 'react';
import { useState, useEffect } from 'react';
import SingleMedCard from '../medList/SingleMedCard';

const MedicationPage = () => {
  const [medsArr, setMedsArr] = useState([]);

  const getMedsAndSetState = async () => {
    const resp = await fetch('/db/meds.json');
    const dataInJs = await resp.json();
    const onlyDataWeNeed = dataInJs.map(({ id, name, description }) => ({
      id,
      name,
      description,
    }));
    setMedsArr(onlyDataWeNeed);
  };

  useEffect(() => {
    getMedsAndSetState();
  }, []);

  return (
    <div>
      <div className='pets-header'>
        <h1>Medicament List</h1>
        <button>Add Medicament</button>
      </div>
      <div className='pets-grid'>
        {medsArr.map((pObj) => (
          <SingleMedCard key={pObj.id} {...pObj} />
        ))}
      </div>
    </div>
  );
};

export default MedicationPage;
