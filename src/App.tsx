import * as C from "./App.styles";
import logo from "./assets/logo.png";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import EqualizerIcon from "@material-ui/icons/Equalizer";

const App = () => {
  return (
    <C.Container>
      <C.Left>
        <a href="#">
          <img src={logo} alt="" width="130px" />
        </a>
        <a href="#" className="icons">
          <HomeIcon className="icon" /> Início
        </a>
        <a href="#" className="icons">
          <SearchIcon className="icon" /> Procurar
        </a>
        <a href="#" className="icons">
          <EqualizerIcon className="icon" /> A tua Bibloteca
        </a>
      </C.Left>
    </C.Container>
  );
};

export default App;
