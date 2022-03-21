import { CardStyle } from 'assets/styles';
import { CardInfoProps } from 'utils/type';

const {
  CardContainer,
  CardTitleWrapper,
  CardTitle,
  Status,
  Client,
  Due,
  InfoTitle,
  Border,
  InfoList,
  InfoItem,
  ButtonWrapper,
  BlueButton,
  WhiteButton,
} = CardStyle;

interface CardProps {
  data: CardInfoProps;
}

export const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <CardContainer key={data.id}>
      <CardTitleWrapper>
        <CardTitle>{data.title}</CardTitle>
        {data.status === '상담중' && <Status>{data.status}</Status>}
      </CardTitleWrapper>
      <Client>{data.client}</Client>
      <Due>{data.due}까지 납기</Due>
      <Border />
      <InfoList>
        <InfoItem>
          <InfoTitle>도면 개수</InfoTitle>
          <span>{data.count}개</span>
        </InfoItem>
        <InfoItem>
          <InfoTitle>총 수량</InfoTitle>
          <span>{data.amount}개</span>
        </InfoItem>
        <InfoItem>
          <InfoTitle>가공 방식</InfoTitle>
          <div>{data.method.toString()}</div>
        </InfoItem>
        <InfoItem>
          <InfoTitle>재료</InfoTitle>
          <div>{data.material.toString()}</div>
        </InfoItem>
      </InfoList>
      <ButtonWrapper>
        <BlueButton>요청 내역 보기</BlueButton>
        <WhiteButton>채팅하기</WhiteButton>
      </ButtonWrapper>
    </CardContainer>
  );
};
