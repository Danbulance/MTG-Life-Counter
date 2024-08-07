import { useState } from "react";

import ButtonsContainer from "./ButtonsContainer";
import ResetButton from "./ResetButton";
import ImageSelector from "./ImageSelector";
import Angels from "../images/angels.jpg";
import Chaos from "../images/chaos.jpg";
import Cute from "../images/cute.png";
import Dinosaurs from "../images/dinosaurs.png";
import Dragons from "../images/dragons.png";
import DrWho from "../images/drwho.jpg";
import Eldrazi from "../images/eldrazi.jpg";
import Faerie from "../images/faerie.png";
import LOTR from "../images/lotr.jpeg";
import Merfolk from "../images/merfolk.jpg";
import Zombies from "../images/zombies.jpg";

export default function Count() {
  const [lifePoints, setLifePoints] = useState(0);
  const [numLifePoints, setNumLifePoints] = useState(false);
  const [bgImage, setBgImage] = useState("");

  function handleClick() {
    setNumLifePoints(true);
  }

  function handleChange(e) {
    console.log(e.target.value);
    setLifePoints(Number(e.target.value));
    // setLifePoints(e.target.value);
  }

  function reset() {
    setLifePoints(0);
  }

  // SET BG IMAGE START
  const handleImageChange = (e) => {
    let bgString = e.target.value;
    setBgImage(bgString.toLowerCase());
    // switch (bgString) {
    //   case "Angels":
    //     setBgImage(Angels);
    //     break;
    //   case "Chaos":
    //     setBgImage(Chaos);
    //     break;
    //   case "Cute":
    //     setBgImage(Cute);
    //     break;
    //   case "Dinosaurs":
    //     setBgImage(Dinosaurs);
    //     break;
    //   case "Dragons":
    //     setBgImage(Dragons);
    //     break;
    //   case "DrWho":
    //     setBgImage(DrWho);
    //     break;
    //   case "Eldrazi":
    //     setBgImage(Eldrazi);
    //     break;
    //   case "Faerie":
    //     setBgImage(Faerie);
    //     break;
    //   case "LOTR":
    //     setBgImage(LOTR);
    //     break;
    //   case "Merfolk":
    //     setBgImage(Merfolk);
    //     break;
    //   case "Zombies":
    //     setBgImage(Zombies);
    //     break;

    //   default:
    //     setBgImage(false);
    // }
    console.log(setBgImage);
    return;
  };
  // SET BG IMAGE END

  return (
    <div className={`card ${bgImage}`}>
      {!numLifePoints && (
        <>
          <p className="text-3xl pt-5">Select Starting Life Points</p>

          <input className="text-2xl mt-2 mb-2" type="number" min="0" max="40" onChange={handleChange} placeholder="0" value={lifePoints} />
          <button className="text-2xl hover:cursor-pointer life-point-btn" onClick={handleClick}>
            Set Life Points
          </button>

          <ImageSelector setBgImage={setBgImage} handleImageChange={handleImageChange} />
        </>
      )}

      {numLifePoints && (
        <>
          {/* <img src={bgImage} alt="" /> */}

          <p className="count">{lifePoints}</p>

          <ResetButton reset={reset} />

          <ButtonsContainer setLifePoints={setLifePoints} />
        </>
      )}

      {/* <PlusButton setLifePoints={setLifePoints} />
      <MinusButton setLifePoints={setLifePoints} />
      <button onClick={reset}>Reset</button> */}
    </div>
  );
}
