import styled, {keyframes} from "styled-components";
import {NavLink as Link} from "react-router-dom";
import {MdKeyboardArrowDown} from "react-icons/md";
import UserIcon from "../../assets/icons/User.svg";
import LogoIcon from "../../assets/FullLogo.svg";

const appear = keyframes`
  0% {
    opacity: 0;
    bottom: 0;
  }
  100% {
    opacity: 1;
    bottom: -15px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px 40px;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const Logo = styled.div`
  background: url(${LogoIcon}) no-repeat center;
  background-size: contain;
  width: 80px;
  height: 70px;
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 79px;
`;

export const NavLink = styled(Link)`
  display: flex;
  width: 117px;
  flex-direction: column;
  color: ${({theme}) => theme.text};
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 2.43px;
  text-transform: capitalize;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease-in-out;

  &.active::after {
    content: '';
    opacity: 0;
    animation: ${appear} 0.3s ease-in-out forwards;
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    background: ${({theme}) => theme.secondary_btn};
    border-radius: 50%;
  }
`;

export const NavRight = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 41px;
`;

export const Language = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

export const LanguageSpan = styled.span`
  color: ${({theme}) => theme.text};
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 146.5%;
  letter-spacing: 2.43px;
  text-transform: uppercase;
`;

export const DropIcon = styled(MdKeyboardArrowDown)`
  color: ${({theme}) => theme.text};
  font-size: 30px;
`;

export const User = styled.div`
  width: 40px;
  height: 40px;
  background: url(${UserIcon}) no-repeat center;
  cursor: pointer;
`;

export const LoginBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100px;
  height: 36px;
  background: ${({theme}) => theme.primary_btn};
  border: 1px solid ${({theme}) => theme.text};
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  color: ${({theme}) => theme.text};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 146.5%;
  letter-spacing: 2.16px;

  &:hover {
    transform: scale(1.1);
  }
`;