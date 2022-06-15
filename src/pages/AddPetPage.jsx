import { useState, useEffect } from 'react';

const AddPetPage = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your pets name:
        <input
          type='text'
          name='username'
          value={inputs.username || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your email:
        <input
          type='text'
          name='client_email'
          value={inputs.client_email || ''}
          onChange={handleChange}
        />
      </label>
      <input type='submit' />
    </form>
  );
};

export default AddPetPage;
