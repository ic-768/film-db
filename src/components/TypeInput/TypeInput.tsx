import DropdownInput from "../DropdownInput";
import { DropdownOption } from "../DropdownInput/DropdownInput";

interface TypeInputProps {
  type?: string;
  setType: (y?: string) => void;
}

const TypeInput = ({ type, setType }: TypeInputProps) => {
  // create options for every Type, starting from 1920
  const options: DropdownOption[] = [
    { value: "", label: "None" },
    { value: "movie", label: "Movie" },
    { value: "series", label: "Series" },
  ];

  const selectedOption = options.find((o) => o.value === type);

  return (
    <DropdownInput
      title="Type (optional)"
      options={options}
      selectedOption={selectedOption}
      onChange={setType}
    />
  );
};

export default TypeInput;
