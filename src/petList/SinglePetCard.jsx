import { Link } from 'react-router-dom';

const SinglePetCard = (props) => {
  return (
    <div className='pet-card'>
      <h2>{props.name}</h2>
      <p>{new Date(props.dob).toLocaleDateString()}</p>
      <p>{props.client_email}</p>
      <Link to={`/pets/${props.id}`}>
        <button>View Log</button>
      </Link>
      <button onClick={() => props.onDelete(props.id)}>Delete</button>
    </div>
  );
};

export default SinglePetCard;
