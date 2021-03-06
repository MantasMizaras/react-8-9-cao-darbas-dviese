import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const SinglePetPage = () => {
  const [currentPet, setCurrentPet] = useState({});

  const { petId } = useParams();

  const getCurrentPetAndSave = async () => {
    const resp = await fetch(`https://glittery-dull-snickerdoodle.glitch.me/v1/logs/${petId}`);
    const dataInJs = await resp.json();
    const currentPet = dataInJs.find(({ id }) => id === +petId);
    setCurrentPet(currentPet);
    console.log('currentPet ===', currentPet);
  };

  useEffect(() => {
    getCurrentPetAndSave();
  }, []);

  if (currentPet !== undefined) {
    return (
      <div className='pet-card'>
        <h2>{currentPet.name}</h2>
        <p>{currentPet.status}</p>
        <p>{currentPet.description}</p>
        <Link to={`/pets/${currentPet.id}`}>
          <button>View Log</button>
        </Link>
        <button>Delete</button>
      </div>
    );
  } else {
    return (
      <div className='pet-card'>
        <h3>nera jokiu irasu</h3>
      </div>
    );
  }

  return (
    <div className='pet-card'>
      <h2>{currentPet.name}</h2>
      <p>{currentPet.status}</p>
      <p>{currentPet.description}</p>
      <Link to={`/pets/${currentPet.id}`}>
        <button>View Log</button>
      </Link>
      <button>Delete</button>
    </div>
  );
};

export default SinglePetPage;
