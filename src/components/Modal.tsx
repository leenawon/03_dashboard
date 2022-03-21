import { useState, useEffect } from 'react';
import { MENU, COLOR_LOGO, GRAY_ICON } from 'assets/images';
import ModalStyle from 'assets/styles/ModalStyle';

const {
  MenuIcon,
  ModalBox,
  Overlay,
  ModalContent,
  TopLogoBox,
  TopLogoImg,
  ContentBox,
  LogoImg,
  FirstMenuBox,
  MenuText,
  LogOut,
} = ModalStyle;

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
    setModal((curr) => !curr);
  };

  return (
    <>
      <MenuIcon onClick={toggleModal} src={MENU} alt="메뉴 아이콘" />
      {modal && (
        <ModalBox>
          <Overlay onClick={toggleModal} />
          <ModalContent>
            <TopLogoBox>
              <TopLogoImg src={COLOR_LOGO} alt="상단 로고 이미지" />
            </TopLogoBox>
            <ContentBox>
              <FirstMenuBox>
                <LogoImg src={GRAY_ICON} alt="이미지" />
                <MenuText>파트너정밀가공</MenuText>
              </FirstMenuBox>
              <LogOut>로그아웃</LogOut>
            </ContentBox>
          </ModalContent>
        </ModalBox>
      )}
    </>
  );
}
