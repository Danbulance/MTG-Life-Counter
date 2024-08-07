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

export default function Card() {
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
    return;
  };

  return (
    <div className={`card-holder ${bgImage ? "card-holder-img" : ""}`}>
      <div className={`card-background-image ${bgImage} ${numLifePoints ? "test-bg" : ""}`}>
        {!numLifePoints && (
          <>
            <p className="text-3xl text-white pt-5 start-points-text">Select Starting Life Points</p>

            <input className="text-2xl mt-2 mb-2 start-points-input" type="number" min="0" max="40" onChange={handleChange} placeholder="0" value={lifePoints} />
            <button className="text-2xl hover:cursor-pointer life-point-btn" onClick={handleClick}>
              Set Life Points
            </button>

            <ImageSelector setBgImage={setBgImage} handleImageChange={handleImageChange} />
          </>
        )}

        {numLifePoints && (
          <div class="card-inner">
            <div class="card-count">
              <p className="count">{lifePoints}</p>
              <ResetButton reset={reset} />
            </div>
          </div>
        )}
      </div>
      {numLifePoints && <ButtonsContainer setLifePoints={setLifePoints} />}
    </div>
  );
}

{
  /* <div class="h-screen w-screen bg-slate-400 flex flex-col">
  <div class="bg-slate-500 w-full h-full">
    <div class="bg-black bg-opacity-50 flex items-center justify-center h-full">
      <div class="text-white text-8xl font-bold">1</div>
    </div>
  </div>
  <div class="bg-slate-700 mt-auto h-20">
    this is the bottom bit
  </div>
</div> */
}
