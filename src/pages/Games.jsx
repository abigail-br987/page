
import NavBar from "../components/NavBar"
import Space from "../components/Space"
import Desc from "../components/Desc"
import FirstGame from "../components/FirstGame"
import SecondGame from "../components/SecondGame"

function Games() {
    return(
        <>
        <NavBar></NavBar>
        <Space></Space>
        <Desc title="Sección de Juegos"
        content="Bubli, la mascotita de ForeverYoung, te acompañara en juegos que no solo están 
        diseñados para entretener, sino también para educar y promover el bienestar integral de los adolescentes. Se usó Javascript, Pygame y Python"></Desc>
        <FirstGame></FirstGame>
        <SecondGame></SecondGame>
        </>
    )
}
export default Games