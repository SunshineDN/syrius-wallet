import {BoxWrapper, Button, Container, Elipse, MidLeft, Subtitle, TextWrapper, Title} from "./MainHomeStyles.js";

export const MainHome = () => {
    return (
        <Container>
            <MidLeft>
                <Elipse />
                <TextWrapper>
                    <Title>A poderosa carteira digital, onde o mundo está na palma de sua mão</Title>
                    <Subtitle>Nossa AI Syrius Wallet veio para lhe ajudar em qualquer câmbio, além de organizar em poucos segundos</Subtitle>
                </TextWrapper>
                <Button>Comece agora</Button>
            </MidLeft>
            <BoxWrapper>
            </BoxWrapper>
        </Container>
    )
}

export default MainHome;