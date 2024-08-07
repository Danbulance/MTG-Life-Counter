import MinusButton from "./MinusButton";
import PlusButton from "./PlusButton";

export default function ButtonsContainer({ setLifePoints }) {
  return (
    <div className="button-container">
      <MinusButton setLifePoints={setLifePoints} />
      <PlusButton setLifePoints={setLifePoints} />
    </div>
  );
}
