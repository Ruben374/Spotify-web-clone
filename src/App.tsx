
import * as C from "./App.styles";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel"


const App = () => {
  return (
    <C.Container>
      <LeftPanel />
      <RightPanel />
    </C.Container>
  );
};

export default App;
