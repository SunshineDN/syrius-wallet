import {
    Container,
    DropIcon,
    Language,
    LanguageSpan,
    LoginBtn,
    Logo,
    Nav,
    NavLink,
    NavRight,
    User
} from "./HomeHeaderStyles.js";

const HomeHeader = () => {
    return (
        <Container>
            <Logo />
            <Nav>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/contacts'}>Contacts</NavLink>
            </Nav>
            <NavRight>
                <Language>
                    <LanguageSpan>PT-BR</LanguageSpan>
                    <DropIcon />
                </Language>
                <User />
                <LoginBtn>Login</LoginBtn>
            </NavRight>
        </Container>
    )
}

export default HomeHeader;