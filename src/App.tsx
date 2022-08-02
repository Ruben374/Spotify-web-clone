import React, { useEffect } from "react";
import * as C from "./App.styles";
import logo from "./assets/logo.png";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import AddBoxIcon from "@material-ui/icons/AddBox";
import FavoriteIcon from "@material-ui/icons/Favorite";

const App = () => {
  return (
    <C.Container>
      <C.Left id="teste">
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
        <a href="#" className="icons" id="list">
          <AddBoxIcon className="icon" /> Criar Lista de reprodução
        </a>
        <a href="#" className="icons">
          <FavoriteIcon className="icon" />
          Criar Lista de reprodução
        </a>
      </C.Left>
      <C.Right>...</C.Right>
    </C.Container>
  );
};

export default App;
