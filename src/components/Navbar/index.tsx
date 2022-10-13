import * as C from "./styles";
import HomeIcon from "@material-ui/icons/Home";

const NavBar = () => {
  return (
    <C.NavBar>
      <div className="navbar--container">
        <HomeIcon color="primary"/>
        <input type={"search"} className="search--input" />
        <a href="#" className="navbar--user">
          ...
        </a>
      </div>
    </C.NavBar>
  );
};

export default NavBar;
