import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button, Container, Content, InputText, LabelPassword, TextButton, TextLabel } from './styles';

export function Signin() {
    const navigation = useNavigation()
    return (
        <Container>
            <Content>

                <InputText placeholder='Email'/>
                <InputText placeholder='Senha'/>
                <Button onPress={() => navigation.navigate("Home")}>
                    <TextButton>Entrar</TextButton>
                </Button>
                <LabelPassword onPress={() => navigation.navigate("Signup")}>
                    <TextLabel>Crie sua conta aqui</TextLabel>
                </LabelPassword>
            </Content>
        </Container>
    );
}