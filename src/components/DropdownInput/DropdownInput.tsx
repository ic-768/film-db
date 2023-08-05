import { useState } from "react";

export type DropdownOption = {
  value?: string;
  label: string;
};

const DropdownInput = ({ options }: { options: DropdownOption[] }) => {
  const [selectedOption, setSelectedOption] = useState(); // State to keep track of the selected option

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label className="block" htmlFor="Dropdown">
        Dropdown (optional)
      </label>
      <select
        id="Dropdown"
        name="Dropdown"
        value={selectedOption}
        onChange={handleOptionChange}
        className="cursor-pointer bg-white px-4 py-2 pr-8 text-black"
      >
        {options.map((option, i) => (
          <option key={`${option.value}-${i}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownInput;
