import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 366px;
  height: 356px;
  padding: 24px 16px;
  background: ${({ theme }) => theme.whiteColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  &:hover {
    border: 2px solid ${({ theme }) => theme.pointColor};
  }
`;

const CardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const CardTitle = styled.h1`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
`;

const Status = styled.span`
  background: ${({ theme }) => theme.whiteColor};
  border: 1px solid ${({ theme }) => theme.orangeColor};
  box-sizing: border-box;
  border-radius: 12px;
  padding: 2px 8px;
  color: ${({ theme }) => theme.orangeColor};
`;

const Client = styled.h2`
  font-size: 14px;
  line-height: 20px;
  margin-top: 4px;
`;

const Due = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #939fa5;
  margin-top: 24px;
`;

const Border = styled.div`
  border: 1px solid ${({ theme }) => theme.borderColor};
  width: 334px;
  margin: 16px;
`;

const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 16px;
`;

const InfoItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 32px;
`;

const BlueButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 12px;
  background: ${({ theme }) => theme.pointColor};
  color: ${({ theme }) => theme.whiteColor};
  border-radius: 4px;
  margin-right: 14px;
`;

const WhiteButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 12px;
  border: 1px solid ${({ theme }) => theme.pointColor};
  color: ${({ theme }) => theme.pointColor};
  border-radius: 4px;
`;

const CardStyle = {
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
};

export default CardStyle;
