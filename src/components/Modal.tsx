import { useState, useEffect } from 'react';
import styled from 'styled-components';

const MenuIcon = styled.img`
  display: none;
  @media screen and (max-width: 768px) {
    display: inline;
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
`;

const ModalBox = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(49, 49, 49, 0.5);
`;

const ModalContent = styled.div`
  position: absolute;
  width: 78%;
  height: 100%;
  background: white;
`;

const TopLogoBox = styled.div`
  border-bottom: 1px solid #e5e5e5;
`;

const TopLogoImg = styled.img`
  width: 92px;
  height: 12px;
  margin: 16px 20px 11px 20px;
`;

const ContentBox = styled.div`
  padding: 36px 32px;
`;

const LogoImg = styled.img`
  width: 15px;
  height: 15px;
`;

const FirstMenuBox = styled.div`
  display: flex;
  align-items: center;
`;

const MenuText = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-left: 8px;
`;

const LogOut = styled.div`
  margin-top: 24px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

export default function Modal() {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modal]);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <MenuIcon
        onClick={toggleModal}
        src="/images/menu.png"
        alt="메뉴 아이콘"
      />
      {modal && (
        <ModalBox>
          <Overlay onClick={toggleModal} />
          <ModalContent>
            <TopLogoBox>
              <TopLogoImg
                src="/images/ModalLogoImg.png"
                alt="상단 로고 이미지"
              />
            </TopLogoBox>
            <ContentBox>
              <FirstMenuBox>
                <LogoImg src="/images/Vector.png" alt="이미지" />
                <MenuText>파트정밀가공</MenuText>
              </FirstMenuBox>
              <LogOut>로그아웃</LogOut>
            </ContentBox>
          </ModalContent>
        </ModalBox>
      )}
    </>
  );
}
