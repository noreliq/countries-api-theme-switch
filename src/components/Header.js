import "./Header.scss";

// Icons
import IosMoonOutline from "react-ionicons/lib/IosMoonOutline";
import Container from "../layout/Container";

function Header({ themeName, switchTheme }) {
  return (
    <header className="Header">
      <Container className="Header__Container">
        <h1>Where in the world?</h1>
        <button onClick={switchTheme}>
          <IosMoonOutline />
          <span>{themeName} Mode</span>
        </button>
      </Container>
    </header>
  );
}

export default Header;
