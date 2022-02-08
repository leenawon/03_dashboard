import React from 'react';
import { IData } from './type';
import { CardStyle } from 'assets/styles';

interface Props {
  data: IData;
}

const {
  CardContainer,
  CardTitleWrapper,
  CardTitle,
  Status,
  Client,
  Due,
  Border,
  InfoList,
  InfoItem,
  ButtonWrapper,
  BlueButton,
  WhiteButton,
} = CardStyle;

export const Card: React.FC<Props> = ({ data }) => {
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
          도면 개수
          <span>{data.count}개</span>
        </InfoItem>
        <InfoItem>
          총 수량
          <span>{data.amount}개</span>
        </InfoItem>
        <InfoItem>
          가공 방식
          <div>
            {data.method.map((method: string) => (
              <span key={method}>{method}</span>
            ))}
          </div>
        </InfoItem>
        <InfoItem>
          재료
          <div>
            {data.material.map((material: string) => (
              <span key={material}>{material}</span>
            ))}
          </div>
        </InfoItem>
      </InfoList>
      <ButtonWrapper>
        <BlueButton>요청 내역 보기</BlueButton>
        <WhiteButton>채팅하기</WhiteButton>
      </ButtonWrapper>
    </CardContainer>
  );
};
