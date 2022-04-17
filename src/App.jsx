import "App.css";
import Header from "components/Header/UsernameForm";
import Timeline from "components/Timeline/";
import Spin from "components/Spin";
import Error from "components/Error";

const App = () => (
  <>
    <Header />
    <Error />
    <Timeline />
    <Spin />
  </>
);

export default App;
