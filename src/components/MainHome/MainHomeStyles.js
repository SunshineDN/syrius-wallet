import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  gap: 9px;
  flex-wrap: wrap;
`;

export const MidLeft = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
  align-items: flex-start;
  gap: 26px;
  position: relative;
  z-index: 9999;
`;

export const Elipse = styled.div`
  width: 429px;
  height: 429px;
  border-radius: 429px;
  background: ${({theme}) => theme.sphere};
  filter: blur(50px);
  position: absolute;
  z-index: -1;
  
  &:nth-child(1) {
    top: -100%;
    left: 100px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 27px;
`;

export const Title = styled.h1`
  color: ${({theme}) => theme.text};
  font-size: 35px;
  font-weight: 700;
  letter-spacing: 4.725px;
  text-transform: none;
`;

export const Subtitle = styled.h2`
  color: ${({theme}) => theme.text};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.8px;
  text-transform: none;
`;

export const Button = styled.button`
  display: flex;
  padding: 15px 52px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 100px;
  background: ${({theme}) => theme.primary_btn};
  border: none;
  outline: none;
  cursor: pointer;

  color: ${({theme}) => theme.text};
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.8px;
`;

export const BoxWrapper = styled.div`
    display: flex;
    width: 464.971px;
    height: 565px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
    flex-shrink: 0;
    
    border-radius: 100px;
    border: 3px solid ${({theme}) => theme.text};
    background: ${({theme}) => theme.box_bg};
`;