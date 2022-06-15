import { Link } from 'react-router-dom';

const SingleMedCard = (props) => {
  return (
    <div className='pet-card'>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <Link to={`/meds/${props.id}`}>
        <button>View Log</button>
      </Link>
      <button>Delete</button>
    </div>
  );
};

export default SingleMedCard;
