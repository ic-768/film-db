import DropdownInput from "../DropdownInput";

interface YearInputProps {
  year?: string;
  setYear: (y?: string) => void;
}

const YearInput = ({ year, setYear }: YearInputProps) => {
  // create options for every year, starting from 1920
  const options = [
    { value: "", label: "None" },
    ...Array.from({ length: 104 }, (_, index) => {
      const year = 1920 + index;
      return { value: year.toString(), label: year.toString() };
    }),
  ];

  const selectedOption = options.find((o) => o.value === year);

  return (
    <DropdownInput
      selectedOption={selectedOption}
      title="Year (optional)"
      options={options}
      onChange={setYear}
    />
  );
};

export default YearInput;
