import {Container} from "./HomeStyles.js";
import HomeHeader from "../../components/HomeHeader/HomeHeader.jsx";
import MainHome from "../../components/MainHome/MainHome.jsx";

const Home = () => {
    return (
        <Container>
            <HomeHeader />
            <MainHome />
        </Container>
    )
}

export default Home;