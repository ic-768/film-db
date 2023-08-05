import DropdownInput from "../DropdownInput";

const TypeInput = () => {
  // create options for every Type, starting from 1920
  const options = [
    { value: undefined, label: "None" },
    { value: "movie", label: "Movie" },
    { value: "series", label: "Series" },
  ];

  return <DropdownInput options={options} />;
};

export default TypeInput;
