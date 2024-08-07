import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import magicLogo from "../images/magic-logo.png";

export default function HamburgerMenu() {
  const [mainMenu, setMainMenu] = useState(false);

  const handleClick = () => {
    setMainMenu((prevState) => !prevState);
  };

  return (
    <section className="main-menu-section">
      <div className="main-menu-container">
        <img src={magicLogo} alt="magic logo" className="magic-image" onClick={handleClick} />

        {mainMenu && (
          <div className="main-menu-text">
            <a href="/">Main Menu</a>
          </div>
        )}
      </div>
    </section>
  );
}

{
  /* <button className="main-menu-btn" onClick={handleClick}>
        <HamburgerMenuIcon className="main-menu-icon" />
      </button> */
}
