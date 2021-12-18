import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from './../components/pages/Login/Login';
import { actions } from '../components/store/reducers/authReducer';
import TokenService from '../components/tokenService/TokenService';

const App = () => {
  const dispatch = useDispatch();
  if (TokenService.getAccessToken()) {
    dispatch(actions.setAuth(TokenService.getAccessToken()));
  }

  const data = useSelector(state => state.authReducer.data);
  console.log(data);
  
  return (
    <div className="layout">
      <Login />
    </div>
  );
};

export default App;