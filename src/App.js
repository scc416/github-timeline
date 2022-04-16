import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { updateInput } from "./actions/";

const App = () => {
  const dispatch = useDispatch();
  const input = useSelector(({ input }) => input);
  return (
    <div>
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => dispatch(updateInput(e.target.value))}
        />
      </form>
    </div>
  );
};

export default App;
