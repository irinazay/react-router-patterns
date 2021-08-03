import React from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

function DogList({ dogs }) {
  const listOfDogs = dogs.map((dog) => (
    <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
  ));

  return (
    <div className="DogList">
      <ul> {listOfDogs}</ul>
    </div>
  );
}

export default DogList;
