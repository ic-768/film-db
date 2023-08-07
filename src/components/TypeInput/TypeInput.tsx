import DropdownInput, { DropdownOption } from "../DropdownInput";

interface TypeInputProps {
  type?: string;
  setType: (t?: DropdownOption["value"]) => void;
}

/**
 * Dropdown for movie type
 */
const TypeInput = ({ type, setType }: TypeInputProps) => {
  // create options for every Type
  const options: DropdownOption[] = [
    { value: "", label: "None" },
    { value: "movie", label: "Movie" },
    { value: "series", label: "Series" },
  ];

  return (
    <DropdownInput
      title="Type (optional)"
      options={options}
      selectedOption={type}
      onChange={setType}
    />
  );
};

export default TypeInput;
