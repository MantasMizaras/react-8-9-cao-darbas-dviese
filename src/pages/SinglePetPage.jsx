import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const SinglePetPage = () => {
  const [currentPet, setCurrentPet] = useState({});

  const { petId } = useParams();

  const getCurrentPetAndSave = async () => {
    const resp = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/logs/');
    const dataInJs = await resp.json();
    const currentPet = dataInJs.find(({ id }) => id === +petId);
    setCurrentPet(currentPet);
  };

  useEffect(() => {
    getCurrentPetAndSave();
  }, []);

  return (
    <div className='pet-card'>
      <h2>{currentPet.name}</h2>
      <p>{new Date(currentPet.dob).toLocaleDateString()}</p>
      <p>{currentPet.client_email}</p>
      <Link to={`https://glittery-dull-snickerdoodle.glitch.me/v1/logs/${currentPet.id}`}>
        <button>View Log</button>
      </Link>
      <button>Delete</button>
    </div>
  );
};

export default SinglePetPage;
