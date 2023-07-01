import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  padding: 30px 62px;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  gap: 129px 0;
  flex-wrap: wrap;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.01) 0%, rgba(0, 22, 216, 0.00) 100%), ${({ theme }) => theme.background};
`;