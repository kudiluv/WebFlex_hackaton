import React from "react";
import './../components/globalStyles/index.css';
import usericon from './../components/media/images/usericon.svg';
import logout from './../components/media/images/logout.svg';
import TokenService from '../components/tokenService/TokenService';
import { useDispatch, useSelector } from "react-redux";
import { actions } from './../components/store/reducers/menuReducer';

const LineNavigation = (props) => {
    const dispatch = useDispatch();
    const active = !useSelector(state => state.menuReducer.active)
    const handleHideMenu = () => {
        dispatch(actions.setActive(active))
    }
    const handleLogOut = () => {
        TokenService.removeTokens();
        dispatch(actions.removeAuth());
    }
    return (
        <div className="line-navigation">
            <div className={`line-navigation__user`} onClick={handleHideMenu}><img src={usericon} alt="" /></div>
            <div className="logo"><span>Новая Эра</span></div>
            <div className="line-navigation__logout" onClick={handleLogOut}><img src={logout} alt="" /></div>
        </div>
    )
}

export default LineNavigation;