import * as C from "./styles";
import NavBar from "../Navbar";
import PlayLists from "../PlayLists";

const RightPanel = () => {
  return (
    <C.Right>
      <div className="playlist--container">
        <NavBar />   
        <PlayLists />
      </div>
    </C.Right>
  );
};

export default RightPanel;
