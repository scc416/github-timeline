import "App.css";
import UsernameForm from "components/UsernameForm";
import Timeline from "components/Timeline/";
import Spin from "components/Spin";
import Error from "components/Error";

const App = () => (
  <>
    <UsernameForm />
    <Error />
    <Timeline />
    <Spin />
  </>
);

export default App;
