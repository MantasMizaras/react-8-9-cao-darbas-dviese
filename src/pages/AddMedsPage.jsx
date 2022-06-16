import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button1 from '../UI/button/Button1';
import css from './AddPetForm.module.css';

const AddMedsPage = () => {
  const [nameValue, setNameValue] = useState('');
  const [descValue, setDescValue] = useState('');

  function nameEnterHandler(event) {
    setNameValue(event.target.value);
  }

  function descEnterHandler(event) {
    setDescValue(event.target.value);
  }

  return (
    <div className={css.formDisplay}>
      <h1 className={css.addPetsTitle}>Add Drugs Page</h1>
      <form onSubmit={sendValues} className={css.AddPetForm}>
        <label htmlFor='name'>Enter Your Drug</label>
        <input
          onChange={nameEnterHandler}
          value={nameValue}
          type='text'
          id='name'
          placeholder='Name'
        />
        <label htmlFor='dob'>Enter Drug Description</label>
        <input
          onChange={descEnterHandler}
          value={descValue}
          type='text'
          id='Description'
          placeholder='Description'
        />

        <div className='addButtons'>
          <Button1 secondary>ADD DRUG</Button1>
          <Link to='/'>
            <Button1 main>BACK</Button1>
          </Link>
        </div>
      </form>
    </div>
  );

  function sendValues(event) {
    event.preventDefault();

    if (nameValue === '') return;
    const drugObj = {
      name: nameValue,
      description: descValue,
    };
    async function postDrugs() {
      const resp = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/meds', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(drugObj),
      });
      const dataInJs = await resp.json();
      console.log('dataInJs ===', dataInJs);
      if (dataInJs.changes === 1) {
        window.location.href = '/';
      } else {
        console.error('Error in adding a pet');
      }
    }
    postDrugs();

    console.log(drugObj);
    // clear inputs
    setNameValue('');
    setDescValue('');
  }
};
export default AddMedsPage;
