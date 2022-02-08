import React from 'react';
import styled from 'styled-components';

interface Props {
  isClick: boolean;
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ToggleClick {
  click: boolean;
}

const ToggleWrapper = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
`;

const ToggleCircle = styled.div<ToggleClick>`
  position: absolute;
  ${(props) => (props.click ? 'right: 0;' : 'left: 0;')};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid ${(props) => (props.click ? '#2A18BD;' : 'gray;')};
  background: ${(props) => (props.click ? '#2A18BD;' : 'white;')};
`;

const ToggleBackground = styled.div<ToggleClick>`
  width: 34px;
  height: 14px;
  border-radius: 100px;
  background: ${(props) => (props.click ? '#AEA8E6;' : '#9F9F9F;')};
`;

export const Toggle: React.FC<Props> = ({ isClick, setIsClick }) => {
  const clickToggle = () => {
    setIsClick(!isClick);
  };
  return (
    <ToggleWrapper onClick={clickToggle}>
      <ToggleCircle click={isClick} />
      <ToggleBackground click={isClick} />
    </ToggleWrapper>
  );
};
