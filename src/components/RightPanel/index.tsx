import { Backdrop } from "@material-ui/core";
import React, { useEffect } from "react";
import * as C from "./styles";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const RightPanel = () => {
  return (

      <C.Right>
        <div className="playlist--container">
        <div className="navbar">
          <div className="navbar--leftcontainer" style={{marginLeft:"20px"}}>
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
          <div className="navbar--rightcontainer" style={{marginRight:"20px"}}>
            <a href="#" className="navbar--user">
              ...
            </a>
          </div>
        </div>
      
          <div className="playlist--card--container--top">
            <span> Spotify Playlists</span>
           <span> Ver Tudo</span> 
          </div>
          <div className="playlist--card--container">
          <div className="playlist--card">
            ...
            </div>
            <div className="playlist--card">
            ...
            </div>
          </div>
        </div>
      </C.Right>
 
  );
};

export default RightPanel;
