import DropdownInput from "../DropdownInput";

const YearInput = () => {
  // create options for every year, starting from 1920
  const options = [
    { value: undefined, label: "None" },
    ...Array.from({ length: 104 }, (_, index) => {
      const year = 1920 + index;
      return { value: year.toString(), label: year.toString() };
    }),
  ];

  return <DropdownInput title="Year (optional)" options={options} />;
};

export default YearInput;
