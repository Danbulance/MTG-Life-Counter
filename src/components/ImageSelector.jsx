export default function ImageSelector({ handleImageChange }) {
  //   const [bgImage, setBgImage] = useState("");

  //   const handleImageChange = (e) => {
  //     const setBgImage = e.target.value;
  //     console.log(setBgImage);
  //     return;
  //   };

  return (
    <>
      <label for="image-select" className="text-white">
        Choose a background:
      </label>

      <select onChange={handleImageChange} name="images" id="image-select">
        <option value="">--Please choose an option--</option>
        <option value="Default">Default</option>
        <option value="Angels">Angels</option>
        <option value="Chaos">Chaos</option>
        <option value="Cute">Cute</option>
        <option value="Dinosaurs">Dinosaurs</option>
        <option value="Dragons">Dragons</option>
        <option value="DrWho">DrWho</option>
        <option value="Eldrazi">Eldrazi</option>
        <option value="Faerie">Faerie</option>
        <option value="LOTR">LOTR</option>
        <option value="Merfolk">Merfolk</option>
        <option value="Zombies">Zombies</option>
      </select>
    </>
  );
}

// get value from option chosen

// on confirm take value and add into bg image

// add to class for bg image
