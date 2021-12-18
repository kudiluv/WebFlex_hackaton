import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Content from './Content';
import { actions } from '../components/store/reducers/authReducer';
import TokenService from '../components/tokenService/TokenService';
import Header from './Header';

const App = () => {
  const dispatch = useDispatch();
  if (TokenService.getAccessToken()) {
    dispatch(actions.setAuth(TokenService.getAccessToken()));
  }

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