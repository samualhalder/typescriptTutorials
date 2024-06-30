import React, { useReducer } from "react";
import { useTheme } from "../context/themeContext";

type Props = {
  name: string;
  age: number;
  setter: React.Dispatch<React.SetStateAction<string>>;
};
type stateType = {
  count: number;
};
type actionType =
  | {
      type: "incriment";
      payload: number;
    }
  | { type: "decriment"; payload: number };

const intialState: stateType = {
  count: 0,
};
const reducer = (state: stateType, action: actionType): stateType => {
  switch (action.type) {
    case "incriment":
      return { count: state.count + action.payload };
      break;
    case "decriment":
      return { count: state.count - action.payload };
      break;
    default:
      return state;
      break;
  }
};

function Card({ name, age, setter }: Props) {
  const { theme, toggleTheme } = useTheme();
  const [state, dispatch] = useReducer(reducer, intialState);
  const handleInc = (): void => {
    dispatch({
      type: "incriment",
      payload: 1,
    });
  };
  const handleDec = (): void => {
    dispatch({
      type: "decriment",
      payload: 1,
    });
  };
  return (
    <div>
      <h3>
        its iniside a Card {name},age {age},theme is {theme}
      </h3>
      <input
        type="text"
        placeholder="enter somethinng"
        name=""
        id=""
        onChange={(e) => setter(e.target.value)}
      />
      <form action=""></form>
      <button onClick={() => toggleTheme()}>Change theme</button>
      <h1>Count is :{state.count}</h1>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
    </div>
  );
}

export default Card;
