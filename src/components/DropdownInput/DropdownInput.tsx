import { ChangeEventHandler } from "react";

type DropdownOption = {
  value?: string;
  label: string;
};

interface DropdownInputProps {
  title: string;
  selectedOption?: DropdownOption;
  options: DropdownOption[];
  onChange: (label: DropdownOption["value"]) => void;
}

const DropdownInput = ({
  selectedOption,
  options,
  title,
  onChange,
}: DropdownInputProps) => {
  const handleOptionChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
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
        value={selectedOption?.value}
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
export type { DropdownOption };
