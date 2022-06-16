// import { useState, useEffect } from 'react';

// const AddPetPage = () => {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs((values) => ({ ...values, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(inputs);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Enter your pets name:
//         <input
//           type='text'
//           name='username'
//           value={inputs.username || ''}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Enter your email:
//         <input
//           type='text'
//           name='client_email'
//           value={inputs.client_email || ''}
//           onChange={handleChange}
//         />
//       </label>
//       <input type='submit' />
//     </form>
//   );
// };

// export default AddPetPage;

// post req

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button1 from '../UI/button/Button1';
import css from './AddPetForm.module.css';

const AddPetPage = () => {
  const [nameValue, setNameValue] = useState('');
  const [dobValue, setDobValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  function nameEnterHandler(event) {
    setNameValue(event.target.value);
  }

  function dobEnterHandler(event) {
    setDobValue(event.target.value);
  }

  function emailEnterHandler(event) {
    setEmailValue(event.target.value);
  }

  return (
    <div className={css.formDisplay}>
      <h1 className={css.addPetsTitle}>Add Pets Page</h1>
      <form onSubmit={sendValues} className={css.AddPetForm}>
        <label htmlFor='name'>Enter Pet Name</label>
        <input
          onChange={nameEnterHandler}
          value={nameValue}
          type='text'
          id='name'
          placeholder='Name'
        />
        <label htmlFor='dob'>Enter Date of Birth</label>
        <input
          onChange={dobEnterHandler}
          value={dobValue}
          type='date'
          id='dob'
          placeholder='Date Of Birth'
        />
        <label htmlFor='email'>Enter Email Address</label>
        <input
          onChange={emailEnterHandler}
          value={emailValue}
          type='email'
          id='email'
          placeholder='Email Address'
        />
        <div className='addButtons'>
          <Button1 secondary>ADD PET</Button1>
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
    const petObj = {
      name: nameValue,
      dob: dobValue,
      client_email: emailValue,
    };
    async function postPets() {
      const resp = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/pets/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(petObj),
      });
      const dataInJs = await resp.json();
      console.log('dataInJs ===', dataInJs);
      if (dataInJs.changes === 1) {
        window.location.href = '/';
      } else {
        console.error('Error in adding a pet');
      }
    }
    postPets();

    console.log('petObj ===', petObj);
    // clear inputs
    setNameValue('');
    setDobValue('');
    setEmailValue('');
  }
};
export default AddPetPage;
