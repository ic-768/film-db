import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ChangeEventHandler } from "react";

import InputWithButton from "../InputWithButton";
import TypeInput from "../TypeInput";
import YearInput from "../YearInput";

export interface SearchPanelProps {
  title: string;
  year?: string;
  type?: string;
  onChangeTitle: ChangeEventHandler<HTMLInputElement>;
  onChangeYear: (y?: string) => void;
  onChangeType: (t?: string) => void;
}

const SearchPanel = ({
  title,
  year,
  type,
  onChangeTitle,
  onChangeYear,
  onChangeType,
}: SearchPanelProps) => (
  <div className="flex flex-col justify-center items-center w-full p-2 pt-16 outline outline-2 gap-4">
    <div className="flex flex-col outline-slate-200 bg-slate-600 p-6 rounded-lg gap-1">
      <label htmlFor="title_search">Search for a film</label>
      <InputWithButton
        placeholder="e.g. Avengers"
        text={title}
        setText={onChangeTitle}
        id="title_search"
        icon={faMagnifyingGlass}
      />
      <div className="flex items-center gap-2">
        <YearInput year={year} setYear={onChangeYear} />
        <TypeInput type={type} setType={onChangeType} />
      </div>
    </div>
  </div>
);
export default SearchPanel;
