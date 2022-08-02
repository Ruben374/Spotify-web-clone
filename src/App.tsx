import { Backdrop } from "@material-ui/core";
import React, { useEffect } from "react";
import * as C from "./App.styles";
import LeftPanel from "./components/LeftPanel";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const App = () => {
  return (
    <C.Container>
      <LeftPanel />
      <C.Right>
        <div className="navbar">
          <div className="navbar--leftcontainer">
            <a href="#" className="navbar--arrowbtn">
              <ArrowBackIosIcon />
            </a>
            <a href="#" className="navbar--arrowbtn">
              <ArrowForwardIosIcon />
            </a>
            <a href="#" className="navbar--playlistbtn">
              Lista de reprodução
            </a>
            <a href="#" className="navbar--btns">
              Podcasts
            </a>
            <a href="#" className="navbar--btns">
              Artistas
            </a>
            <a href="#" className="navbar--btns">
              Álbuns
            </a>
          </div>
          <div className="navbar--rightcontainer">
            <a href="#" className="navbar--user">
              ...
            </a>
          </div>
        </div>
      </C.Right>
    </C.Container>
  );
};

export default App;
