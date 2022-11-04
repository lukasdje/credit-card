import React from 'react';
import Icon from "react-native-vector-icons/MaterialIcons"
import Feather from "react-native-vector-icons/Feather"

import {
  ActionSales,
  BoxIcons,
  BoxInfo,
  BoxSales,
  Container,
  Content,
  Header,
  ImageUser,
  ListScroll,
  NameUser,
  SalesValue,
  TitleSales
} from './styles';
import { ActionButton } from '../../components/ActionButton'
import { ListMoviments } from '../../components/ListMoviments';

export function Home() {

  return (
    <Container>
      <Header>
        <Content>
          <BoxInfo>
            <ImageUser source={{ uri: "https://img.freepik.com/fotos-gratis/foto-interna-de-um-cara-perplexo-e-hesitante-com-a-barba-por-fazer-segura-o-queixo-e-duvida-levanta-as-sobrancelhas-tem-uma-expressao-sem-nocao-usa-uma-camisa-elegante-isolada-sobre-uma-parede-branca-pessoas-emocoes-conceito-de-estilo-de-vida_273609-15037.jpg?w=2000" }} />
            <NameUser>Olá, Lucas Siqueira</NameUser>
          </BoxInfo>
          <BoxIcons>
            <Feather name='eye' size={20} color="#fff"/>
            <Feather name='bell' size={20} color="#fff"/>
            <Feather name='log-out' size={20} color="#fff"/>
          </BoxIcons>
        </Content>
        <BoxSales>
          <TitleSales>Saldo disponível</TitleSales>
          <SalesValue>R$ 2340,90</SalesValue>
          <ActionSales>
            <Icon name="keyboard-arrow-right" size={30} color="#fff" />
          </ActionSales>
        </BoxSales>

      </Header>
      <ListScroll
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <ActionButton title="Transferir"/>
        <ActionButton title="Receber"/>
        <ActionButton title="PIX"/>
        <ActionButton title="Deposito"/>
        <ActionButton title="Pagamento"/>
      </ListScroll>
      <ListMoviments />

    </Container>
  );
}