import { useState } from "react";
import { Theme, ThemeContextProvider } from "./context/themeContext";
import Card from "./components/Card";

type User = {
  name: string;
  age: number;
};

function App() {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    setTheme((pre) => (pre === "light" ? "dark" : "light"));
    console.log("toggle theme ");
    console.log(theme);
  };

  const [user, setuser] = useState<User>();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("sublitted");

    console.log(user);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setuser((pre) => ({
      ...pre!,
      [e.target.name]:
        e.target.name === "name" ? e.target.value : +e.target.value,
    }));
  };

  return (
    <ThemeContextProvider value={{ theme, toggleTheme }}>
      <div
        style={{
          backgroundColor: theme === "dark" ? "black" : "",
          height: "100vh",
        }}
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id=""
            value={user?.name || ""}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            name="age"
            id=""
            value={user?.age || 0}
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Submit</button>
        </form>
        <Card name="samual" age={10} setter={() => {}}></Card>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
