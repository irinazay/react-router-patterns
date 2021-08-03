import React from 'react';
import { Link } from 'react-router-dom';
import './ColorList.css';

function ColorList({ colors }) {
  const colorList = colors.map((color) => (
    <Link exact key={color.name} to={`/colors/${color.name}`}>
      {color.name}
    </Link>
  ));

  return (
    <div className="ColorList">
      <header>
        <h1>Welcome to the color factory.</h1>
        <h1>
          <Link to="/colors/new">Add a color</Link>
        </h1>
      </header>
      <div className="ColorList-links">
        <p>Please select a color.</p>
        <ul>{colorList}</ul>
      </div>
    </div>
  );
}

export default ColorList;
