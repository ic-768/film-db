import DropdownInput from "../DropdownInput";

interface TypeInputProps {
  setType: (y: string) => void;
}

const TypeInput = ({ setType }: TypeInputProps) => {
  // create options for every Type, starting from 1920
  const options = [
    { value: undefined, label: "None" },
    { value: "movie", label: "Movie" },
    { value: "series", label: "Series" },
  ];

  return (
    <DropdownInput
      title="Type (optional)"
      options={options}
      onChange={setType}
    />
  );
};

export default TypeInput;