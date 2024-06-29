import React from "react";
import { useTheme } from "../context/themeContext";

type Props = {
  name: string;
  age: number;
  setter: React.Dispatch<React.SetStateAction<string>>;
};



function Card({ name, age, setter }: Props) {
  const { theme, toggleTheme } = useTheme();
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
    </div>
  );
}

export default Card;
