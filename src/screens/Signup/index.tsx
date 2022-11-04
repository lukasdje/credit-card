import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button, Container, Content, InputText, LabelPassword, TextButton, TextLabel } from './styles';

export function Signup() {
    const navigation = useNavigation()
    return (
        <Container>
            <Content>

                <InputText placeholder='Nome'/>
                <InputText placeholder='Email'/>
                <InputText placeholder='Senha'/>
                <Button>
                    <TextButton>Registar</TextButton>
                </Button>
                <LabelPassword onPress={() => navigation.navigate("Signin")}>
                    <TextLabel>Já possui conta, entre aqui</TextLabel>
                </LabelPassword>
            </Content>
        </Container>
    );
}