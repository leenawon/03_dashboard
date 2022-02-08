import { COLOR_LOGO, GRAY_ICON } from 'assets/images';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 280px;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
`;

const Title = styled.div`
  height: 44px;
`;

const LogoImage = styled.img`
  margin: 16px 0 0 20px;
`;

const Border = styled.div`
  border: 1px solid #e5e5e5;
`;

const MenuList = styled.ul`
  margin: 36px 0 0 32px;
`;

const Image = styled.img`
  width: 15px;
  height: 15px;
  margin: 0 8px 24px 0;
`;

const MenuSpan = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #323d45;
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 998;
  display: none;
`;

export const Menu: React.FC = () => {
  return (
    <Container>
      <Title>
        <LogoImage src={COLOR_LOGO} alt="컬러 로고" />
      </Title>
      <Border />
      <MenuList>
        <li>
          <Image src={GRAY_ICON} alt="건물 이미지" />
          <MenuSpan>파트너정밀가공</MenuSpan>
        </li>
        <li>
          <MenuSpan>로그아웃</MenuSpan>
        </li>
      </MenuList>
      <Overlay />
    </Container>
  );
};
