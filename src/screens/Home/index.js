import React from 'react'

import { Wrapper, Header,Container, Balance, BalanceContainer, BalanceTitle } from './styles'

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import Suggestions from '../../components/Suggestions'
import Activities from '../../components/Activities'


 export default function Home(){
    return (
        <Wrapper>
            <Container>

            <Header>
            <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c68e" />
            <BalanceContainer>
                <BalanceTitle>Meu Saldo</BalanceTitle>
                <Balance>R$ 0,00</Balance>
            </BalanceContainer>

            <AntDesign name="gift" size={30} color="#10c68e" />

            </Header>

            <Suggestions />

            <Activities />

            </Container>
        </Wrapper>
    )
}