import "./Header.scss";
import IosMoonOutline from "react-ionicons/lib/IosMoonOutline";

function Header({ theme, switchTheme }) {
  return (
    <header className="Header">
      <h1>Where in the world?</h1>
      <button onClick={() => switchTheme()}>
        <IosMoonOutline className="icon" />
        <span>{theme === "dark" ? "Light" : "Dark"} Mode</span>
      </button>
    </header>
  );
}

export default Header;
