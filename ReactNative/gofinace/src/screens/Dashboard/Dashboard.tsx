import React from 'react';
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  Greattings,
  UserName,
  PowerIcon,
} from './styles';

export function Dasboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://bit.ly/3oJ3okZ' }} />
            <User>
              <Greattings>Olá, </Greattings>
              <UserName>Rodney</UserName>
            </User>
          </UserInfo>
          <PowerIcon name='power'/>
        </UserWrapper>
      </Header>
    </Container>
  );
}
