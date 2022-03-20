import ToggleStyle from 'assets/styles/ToggleStyle';

const { Container, CheckboxContainer, CheckboxLabel, Input, Consultation } =
  ToggleStyle;

interface Iprops {
  toggleClick: () => void;
}

export function Toggle({ toggleClick }: Iprops) {
  return (
    <Container>
      <CheckboxContainer>
        <Input
          id="checkbox"
          type="checkbox"
          name="status"
          value="상담중"
          onClick={toggleClick}
        />
        <CheckboxLabel htmlFor="checkbox" />
      </CheckboxContainer>
      <Consultation>상담중인 요청만 보기</Consultation>
    </Container>
  );
}
