import * as C from "./styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const NavBar = () => {
  return (
    <C.NavBar>
      <div className="navbar--leftcontainer" style={{ marginLeft: "20px" }}>
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
      <div className="navbar--rightcontainer" style={{ marginRight: "20px" }}>
        <a href="#" className="navbar--user">
          ...
        </a>
      </div>

    </C.NavBar>
  );
};

export default NavBar;
