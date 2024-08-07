import { MinusIcon } from "@radix-ui/react-icons";

export default function MinusButton({ setLifePoints }) {
  return (
    <button
      className="count-btn"
      onClick={() => {
        setLifePoints((prev) => prev - 1);
      }}
    >
      <MinusIcon className="count-btn-icon" />
    </button>
  );
}
