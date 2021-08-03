import React from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import './DogDetails.css';

function DogDetails({ dogs }) {
  const { name } = useParams();

  const currentDog = dogs.find(
    (dog) => dog.name.toLowerCase() === name.toLowerCase()
  );

  if (!currentDog) return <Redirect to="/dogs" />;

  return (
    <div className="DogDetails">
      <img src={currentDog.src} alt={currentDog.name} width="200px"></img>
      <h1>{currentDog.name}</h1>
      <h4>
        {' '}
        {currentDog.name} is {currentDog.age} years old
      </h4>
      <ul>
        {currentDog.facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
      <Link to="/dogs">Go Back</Link>
    </div>
  );
}

export default DogDetails;
