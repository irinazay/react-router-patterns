import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ColorList from './ColorList';
import NewColor from './NewColor';
import Color from './Color';

function Routes() {
  const [colors, setColors] = useState([{ name: 'grey', hex: '#808080' }]);

  function addColor(data) {
    setColors((colors) => [...colors, data]);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors">
          <ColorList colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <NewColor addColor={addColor} />
        </Route>
        <Route path="/colors/:color">
          <Color colors={colors} />
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
