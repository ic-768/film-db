import { ChangeEventHandler, useState } from "react";

export type DropdownOption = {
  value?: string;
  label: string;
};

interface DropdownInputProps {
  title: string;
  options: DropdownOption[];
  onChange: (v: string) => void;
}

const DropdownInput = ({ options, title, onChange }: DropdownInputProps) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(); // State to keep track of the selected option

  const handleOptionChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    console.log(event);
    setSelectedOption(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div>
      <label className="block" htmlFor="Dropdown">
        {title}
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
