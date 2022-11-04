import React from 'react';
import { Text, View } from 'react-native';

import { Container } from './styles';
import history from '../../data'
export function ListMoviments() {
  return (
    <Container 
        data={history}
        renderItem={({item, index}) => (
            <Text>{item.name}</Text>
        )}
    >

    </Container>
  );
}