import DropdownInput from "../DropdownInput";

interface YearInputProps {
  year?: string;
  setYear: (y: string) => void;
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

  return (
    <DropdownInput
      title="Year (optional)"
      options={options}
      onChange={setYear}
    />
  );
};

export default YearInput;
