import * as C from "./App.styles";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel"
import Footer from "./components/Footer"



const App = () => {
  return (
    <C.Container>
      <LeftPanel />
      <RightPanel />
      <Footer/>
    </C.Container>
  );
};

export default App;
