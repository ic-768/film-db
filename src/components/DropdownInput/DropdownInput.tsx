import { ChangeEventHandler } from "react";

type DropdownOption = {
  value?: string;
  label: string;
};

interface DropdownInputProps {
  title: string;
  selectedOption?: DropdownOption["value"];
  options: DropdownOption[];
  onChange: (label: DropdownOption["value"]) => void;
}

/**
 * Dropdown for user to choose a value
 */
const DropdownInput = ({
  title,
  selectedOption,
  options,
  onChange,
}: DropdownInputProps) => {
  const handleOptionChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    onChange(event.target.value);
  };

  const option = options.find((o) => o.value === selectedOption);

  return (
    <div>
      <label className="block" htmlFor="Dropdown">
        {title}
      </label>
      <select
        id="Dropdown"
        name="Dropdown"
        value={option?.value}
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
