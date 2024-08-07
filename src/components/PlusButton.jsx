import { PlusIcon } from "@radix-ui/react-icons";

export default function PlusButton({ setLifePoints }) {
  return (
    <button
      className="count-btn"
      onClick={() => {
        setLifePoints((prev) => prev + 1);
      }}
    >
      <PlusIcon className="count-btn-icon" />
    </button>
  );
}
