import React, {Fragment} from 'react';
import Header from '../header/header';
import Main from '../main/main';
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
