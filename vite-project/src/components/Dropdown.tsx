import { ChangeEvent } from "react";

interface Props {
  colors: string[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

function Dropdown({ colors, onChange }: Props) {
  return (
    <>
      <label style={{ marginRight: "10px" }}>Select button color: </label>
      <select
        onChange={(e) => {
          onChange(e);
        }}
      >
        {colors.map((color, indx) => (
          <option value={color} key={`color${indx}`}>
            {color}
          </option>
        ))}
      </select>
    </>
  );
}

export default Dropdown;
