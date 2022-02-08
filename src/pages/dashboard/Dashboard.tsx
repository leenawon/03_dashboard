import { useEffect, useState } from 'react';
import axios from 'axios';
import { IData } from 'components/type';
import { ARROW, LOGO, WHITE_ICON } from 'assets/images';
import { DashboardStyle } from 'assets/styles';
import { Card, Material, Menu, Method, Toggle } from 'components';

const {
  Container,
  Header,
  Logo,
  SubMenu,
  Icon,
  MenuTitle,
  Bar,
  Title,
  SubTitle,
  DropDownWrapper,
  InnerFlex,
  BigDropDown,
  SmallDropDown,
  DropDownTitle,
  Arrow,
  StatusText,
  CheckBoxContainer,
  CheckBoxWrapper,
  CheckBox,
  Grid,
} = DashboardStyle;

export default function Dashboard() {
  const [data, setData] = useState<[]>([]);
  const [showMethod, setShowMethod] = useState<boolean>(false);
  const [showMaterial, setShowMaterial] = useState<boolean>(false);
  const [isClick, setIsClick] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get('http://localhost:4000/requests')
      .then((response) => setData(response.data));
    if (isClick) {
      axios
        .get('http://localhost:4000/requests?status=상담중')
        .then((response) => setData(response.data));
    }
  }, [isClick]);

  const methodClick = () => {
    setShowMethod((curr) => !curr);
    if (showMaterial) {
      setShowMaterial(false);
    }
  };

  const materialClick = () => {
    setShowMaterial((curr) => !curr);
    if (showMethod) {
      setShowMethod(false);
    }
  };

  const menuButtonClick = () => {
    setShowMenu((curr) => !curr);
  };

  return (
    <>
      <Header>
        <button onClick={menuButtonClick}>
          <Logo src={LOGO} alt="로고" />
        </button>
        <SubMenu>
          <Icon src={WHITE_ICON} alt="건물 이미지" />
          <MenuTitle>A 가공 업체</MenuTitle>
          <Bar />
          <MenuTitle>로그아웃</MenuTitle>
        </SubMenu>
      </Header>
      <Container>
        <Title>들어온 요청</Title>
        <SubTitle>파트너님에게 딱 맞는 요청서를 찾아보세요.</SubTitle>
        <DropDownWrapper>
          <InnerFlex>
            <BigDropDown onClick={methodClick}>
              <DropDownTitle>가공방식</DropDownTitle>
              <Arrow src={ARROW} alt="드롭 다운 화살표" />
            </BigDropDown>
            <SmallDropDown onClick={materialClick}>
              <DropDownTitle>재료</DropDownTitle>
              <Arrow src={ARROW} alt="드롭 다운 화살표" />
            </SmallDropDown>
          </InnerFlex>
          <InnerFlex>
            <Toggle isClick={isClick} setIsClick={setIsClick} />
            <StatusText>상담 중인 요청만 보기</StatusText>
          </InnerFlex>
        </DropDownWrapper>
        <div>
          {showMethod && (
            <CheckBoxContainer>
              {Method.map((method) => (
                <CheckBoxWrapper key={method}>
                  <CheckBox type="checkbox" id="scales" name="scales" />
                  <label htmlFor="scales">{method}</label>
                </CheckBoxWrapper>
              ))}
            </CheckBoxContainer>
          )}
          {showMaterial && (
            <CheckBoxContainer style={{ marginLeft: '105px' }}>
              {Material.map((material) => (
                <CheckBoxWrapper key={material}>
                  <CheckBox type="checkbox" id="scales" name="scales" />
                  <label htmlFor="scales">{material}</label>
                </CheckBoxWrapper>
              ))}
            </CheckBoxContainer>
          )}
        </div>
        <Grid>
          {data.map((data: IData) => (
            <Card key={data.id} data={data} />
          ))}
        </Grid>
        {showMenu && <Menu />}
      </Container>
    </>
  );
}
