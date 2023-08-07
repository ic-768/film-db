import DropdownInput from "../DropdownInput";

interface TypeInputProps {
  type?: string;
  setType: (y: string) => void;
}

const TypeInput = ({ type, setType }: TypeInputProps) => {
  // create options for every Type, starting from 1920
  const options = [
    { value: "", label: "None" },
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
