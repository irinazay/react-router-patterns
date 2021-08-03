import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewColor({ addColor }) {
  const [formData, setFormData] = useState({
    name: '',
    hex: '#ffffff',
  });

  const history = useHistory();
  function handleChange(e) {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addColor(formData);
    history.push('/colors');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter Color</label>
        <input
          placeholder="enter name for a color"
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        ></input>
        <label htmlFor="hex">Color value</label>
        <input
          type="color"
          id="hex"
          name="hex"
          value={formData.hex}
          onChange={handleChange}
        ></input>
        <button>Add color</button>
      </form>
    </div>
  );
}

export default NewColor;
