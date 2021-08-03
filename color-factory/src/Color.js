import React from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import './Color.css';

function Color({ colors }) {
  const { color } = useParams();
  const history = useHistory();

  let currColor = colors.find((c) => c.name === color);

  if (!currColor) {
    history.goBack();
  }

  return (
    <div className="Color" style={{ backgroundColor: currColor.hex }}>
      <h1> This is {currColor.name}.</h1>
      <p>Isn't it beautiful?</p>
      <Link to="/colors">Go Back</Link>
    </div>
  );
}

export default Color;
