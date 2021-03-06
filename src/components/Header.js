import styled from "styled-components";
import ToggleTheme from "./ToggleTheme";
import { Link } from "react-router-dom";

const Header = (props) => {

  return (
    <HeaderDiv>
        <Link to="/"><img className="logo__img" src="img/logo.png"></img></Link>
        <div className="header__item">
            <Link to="/mypage"><div className="login">Login</div></Link>
            <ToggleTheme theme={props.theme} darkModeHandler={props.darkModeHandler} />
        </div>
    </HeaderDiv>
  );
};

export default Header;

const HeaderDiv = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;    
    width: 100%;
    height: 50px;
    padding: 0px 12px 0px 12px; 
    
    background-color: #27272A;

    .header__item{
        display: flex;
    }

    .login {
        width: 45px;
        height: 20px;
        padding: 3px 5px 0px 0px;
        color: lightgray;
        font-size: 15px;
        font-weight: bold;
    }

    a:link {
        text-decoration: none;
    }

    .logo__img {
        width: 120px;
        height: 50px;
        object-fit: cover;   
    }
`;
