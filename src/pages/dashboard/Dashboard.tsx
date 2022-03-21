import { useEffect, useState } from 'react';
import { CardInfoProps } from 'utils/type';
import { useRequestApi } from 'hooks';
import { Card } from 'components';
import { NoResults } from 'components/NoResults';
import Header from 'components/Header';
import Nav from 'components/Nav';
import { DashboardStyle } from 'assets/styles';
const { Container, Grid } = DashboardStyle;

export default function Dashboard() {
  const [cardData, setCardData] = useState<Array<CardInfoProps>>([]);
  const [params, setParams] = useState<{
    method?: string;
    material?: string;
    status?: string;
  }>({});

  const apiParams = {
    url: 'https://dry-hollows-03672.herokuapp.com/requests',
    method: 'GET',
    params: {},
  };
  const { response, onApiRequest } = useRequestApi(apiParams);

  useEffect(() => {
    onApiRequest({ ...apiParams, params });
  }, [params]);

  useEffect(() => {
    if (!response) return;
    setCardData(response.data);
  }, [response]);

  return (
    <>
      {!cardData.length && <NoResults />}
      <Nav />
      <Container>
        <Header params={params} setParams={setParams} />
        <Grid>
          {cardData.map((data: CardInfoProps) => (
            <Card key={data.id} data={data} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
