import React, {Fragment} from 'react';
import Header from '../header/header.jsx';
import Main from '../main/main.jsx';
import './app.scss';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  );
};

export default App;
