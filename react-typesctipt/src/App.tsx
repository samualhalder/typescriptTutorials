import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "@reduxjs/toolkit/query";
import { decriment, incriment, incrimentByValue } from "./redux/Slices/count";
import { useState } from "react";
function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  const [loclaCount, setLoclaCount] = useState<number>(0);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col">
      <h1>ToolKit</h1>
      <h2>value:{count}</h2>
      <div>
        <button onClick={(e) => dispatch(incriment())}>+</button>
        <button onClick={(e) => dispatch(decriment())}>-</button>
      </div>
      <input
        type="number"
        value={loclaCount}
        name=""
        id=""
        onChange={(e) => setLoclaCount(+e.target.value)}
      />
      <button onClick={(e) => dispatch(incrimentByValue(loclaCount))}>
        ADD
      </button>
    </div>
  );
}

export default App;
