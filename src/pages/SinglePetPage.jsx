import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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

  return <div>SinglePetPage</div>;
};

export default SinglePetPage;
