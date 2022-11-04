import React from 'react';
import { View } from 'react-native';

import { Container, Title } from './styles';

interface Title {
    title: string;
}

export function ActionButton({ title }: Title) {
  return (
    <Container>
            <Title>{title}</Title>
    </Container>
  );
}