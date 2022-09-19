import styled, { keyframes, css } from 'styled-components';

const bumpEffect = keyframes`
  0% {
    background: #dcd0d0;
  }

  50% {
    background: green;
  }

  100% {
    background: #dcd0d0;
    
  }
`;
const bumpAnimation = css`
animation: ${bumpEffect} 1.5s infinite cubic-bezier(.25,.75,.6,1);
`;

export const SensorCard =  styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: rgb(0 22 52 / ${props => props.connected ? '100%' : '80%'});
  color: #ffffff;
  transition: 0.75s background cubic-bezier(.25,.75,.6,1);
  position: relative;

  &::before {
    content: '';
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: red;
    position: absolute;
    left: 100%;
    top: 50px;
    transform: translateX(-60px);
    ${props => props.connected ? bumpAnimation : ''}
  }
`;

export const SensorCardBody = styled.article`
  padding: 10px;
  opacity: ${props => props.connected ? '1' : '0.8'};

  p {
    font-size: 18px;
  }
`;

export const SensorCardFooter = styled.footer`
  overflow: hidden;
`;
