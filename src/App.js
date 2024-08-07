import { useEffect, useState } from "react";
import Count from "./components/Count";
import Heading from "./components/Heading";
import Card from "./components/Card";
import HamburgerMenu from "./components/HamburgerMenu";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [startGame, setStartGame] = useState(false);
  const [count, setCount] = useState(0);
  const [wrapper, setWrapper] = useState("");
  const [disableButton, setDisableButton] = useState(true);

  function handleChange(e) {
    console.log(e.target.value);
    setCount(Number(e.target.value));
    setDisableButton(false);
  }

  function handleClick() {
    setStartGame(true);
  }

  useEffect(() => {
    switch (count) {
      case 1:
        setWrapper("app-one");
        break;
      case 2:
        setWrapper("app-two");
        break;
      case 3:
        setWrapper("app-three");
        break;
      case 4:
        setWrapper("app-four");
        break;
      default:
        setWrapper("app-one");
    }
  }, [count]);

  // useEffect(() => {
  //   if(count > 0 && count < 5) {

  //   }

  // }, [count]);

  // <div className={`App ${startGame && count === 4 ? "App-four" : ""}`}></div>

  return (
    <main className="main-container">
      <Analytics />
      <div className={wrapper}>
        {startGame && Array.from({ length: count }).map((_, index) => <Card key={index} />)}

        {startGame && <HamburgerMenu />}

        {!startGame && (
          <div className="text-center">
            <Heading />
            <p className="text-2xl text-white m-3">Select Number of Players</p>

            <input className="text-2xl" type="number" min="1" max="4" onChange={handleChange} placeholder={count} />
            <button className="text-white text-2xl pl-3 hover:cursor-pointer" disabled={disableButton} onClick={handleClick}>
              Confirm
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
