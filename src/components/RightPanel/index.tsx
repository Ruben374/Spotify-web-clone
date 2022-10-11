import * as C from "./styles";
import NavBar from '../Navbar'

const RightPanel = () => {
  return (
    <C.Right>
      <div className="playlist--container">
        <NavBar/>
       
      </div>
    </C.Right>
  );
};

export default RightPanel;
