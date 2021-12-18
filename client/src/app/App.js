import React from 'react';
import { useSelector } from 'react-redux';
import Content from './Content';
import Header from './Header';

const App = () => {

  const data = useSelector(state => state.authReducer.data);
  return (
    <div className="layout">
      <Header>
        <Content role={data.role} />
      </Header>
    </div>
  );
};

export default App;